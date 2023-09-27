"use client";
import { useEffect, useRef, useState } from "react";
import { v4 as uuid } from "uuid";
import { toast } from "react-toastify";
import Peer from "peerjs";

import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import { PERMISSION_DENIED } from "./constants/message";
import { copyToClipboard } from "@/services/peer.service";
import {
	setDeniedAll,
	setToggleCamera,
	setToggleMicro,
} from "@/store/slices/conference.slice";
import { setLocalPeer, setRemotePeersId } from "@/store/slices/app.slice";
import { generateNickname } from "@/store/actions/conference.action";

import Playlist from "@/components/playlist/playlist";
import MainStream from "@/components/main-stream/main-stream";
import Webcam, { ConntrolsLabel } from "@/components/webcam/webcam";
import ChatHeader from "@/components/conference/chat/chat-header";
import ChatBody from "@/components/conference/chat/chat-body";
import ChatFooter from "@/components/conference/chat/chat-footer";

const Stream = () => {
	const dispatch = useAppDispatch();
	const { camera, micro } = useAppSelector((state) => state.conference);
	const [stream, setStream] = useState<MediaStream>();
	const [label, setLabel] = useState<ConntrolsLabel>({ micro: "", camera: "" });

	const { localPeer, remotePeersId } = useAppSelector((state) => state.app);
	const { id, name, username, avatar } = localPeer;
	const [remoteId, setRemoteId] = useState("");
	const [peer, setPeer] = useState<Peer>();
	const [msg, setMsg] = useState("");
	const [isCopied, setIsCopied] = useState(false);
	const peerInstance = useRef<Peer>();
	const videoRef = useRef<HTMLVideoElement>(null);
	const videoRemoteRef = useRef<HTMLVideoElement>(null);

	const toggleCamera = () => {
		if (stream) {
			const videoTrack: MediaStreamTrack = stream.getVideoTracks()[0];
			videoTrack.enabled = !videoTrack.enabled;
			dispatch(setToggleCamera());
		}
	};
	const toggleMic = () => {
		if (stream) {
			const audioTrack: MediaStreamTrack = stream.getAudioTracks()[0];
			audioTrack.enabled = !audioTrack.enabled;
			dispatch(setToggleMicro());
		}
	};

	const createNewPeer = () => {
		const username = prompt("Your username") || "";
		const id = uuid();
		const name = generateNickname(username);
		console.log(id);
		const newPeer = new Peer(id);
		setPeer(newPeer);
		dispatch(
			setLocalPeer({
				username,
				id,
				name,
				avatar: "",
			})
		);

		peerInstance.current = newPeer;
	};

	const userMedia = async (videoSrc: HTMLVideoElement) => {
		try {
			// if granted stream, assign it to video source
			const mediaStream = await navigator.mediaDevices.getUserMedia({
				video: true,
				audio: true,
			});

			videoSrc.srcObject = mediaStream;
			return mediaStream;
		} catch (error: any) {
			dispatch(setDeniedAll());
			toast.warn(PERMISSION_DENIED);
			throw new Error(error);
		}
	};

	// when you call someone, you will...
	const handleCall = async (e: any) => {
		e.preventDefault();

		// check if they have been connected
		if (remotePeersId.includes(remoteId)) {
			toast.info(`${remoteId} is already connected`);
			return;
		}

		// if they are not connected, you will...
		dispatch(setRemotePeersId(remoteId));

		// be requested to grant video/audio
		const mediaStream = await userMedia(videoRef.current!);

		// next, make a call to the remote (as well, send own media stream), and waiting for their stream
		const remoteConnection = peer?.call(remoteId, mediaStream);

		// so now you has their stream
		remoteConnection?.on("stream", (remoteStream) => {
			if (videoRemoteRef.current) {
				videoRemoteRef.current.srcObject = remoteStream;
			}
		});
	};

	const handleAnswerCall = () => {
		// when you have a call from someone, you will...
		peerInstance.current?.on("call", async (mediaConnection) => {
			// be requested to grant video/audio
			const mediaStream = await userMedia(videoRef.current!);

			// answer the call
			mediaConnection.answer(mediaStream);

			// then, share your stream to them
			mediaConnection.on("stream", (remoteStream) => {
				if (videoRemoteRef.current) {
					videoRemoteRef.current.srcObject = remoteStream;
				}
			});
		});
	};

	const handleError = () => {
		// handle error
		peer?.on("error", (error) => {
			console.log(error.type);
		});
	};

	const onSubmitMsg = (e: any) => {
		e.preventDefault();
	};

	const onCopyPeerId = () => {
		if (!isCopied) {
			copyToClipboard(name);
			setIsCopied(true);
		}

		setTimeout(() => {
			setIsCopied(false);
		}, 2000);
	};

	// Create a new peer at the first render
	useEffect(() => {
		createNewPeer();
		handleAnswerCall();
		handleError();

		return () => peer?.destroy();
	}, []);

	return (
		<div className="flex justify-between">
			<div className="w-[680px] grid grid-rows-2 gap-5">
				<MainStream />
				<Playlist />
			</div>
			<div className="w-[488px]">
				<div className="grid grid-cols-2 gap-5">
					<Webcam
						src={videoRef}
						onToggleCamera={toggleCamera}
						onToggleMic={toggleMic}
						label={{ micro: label?.micro, camera: label?.camera }}
						className="host"
					/>
					<Webcam
						src={videoRemoteRef}
						onToggleCamera={toggleCamera}
						onToggleMic={toggleMic}
						label={{ micro: label?.micro, camera: label?.camera }}
						className="guest"
					/>
				</div>
				<div className="bg-gray border-solid-1 border-darkGray rounded-25 mt-5">
					<ChatHeader
						peerId={name}
						remoteIdValue={remoteId}
						onRemoteIdChange={setRemoteId}
						onCall={handleCall}
						onCopy={onCopyPeerId}
						isCopied={isCopied}
					/>
					<ChatBody {...localPeer} />
					<ChatFooter
						control={{ mic_label: label?.micro, cam_label: label?.camera }}
						form={{
							msg,
							onMsgChange: setMsg,
							onSubmitMsg,
						}}
					/>
				</div>
			</div>
		</div>
	);
};

export default Stream;
