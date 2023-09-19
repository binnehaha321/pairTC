"use client";
import { FormEvent, useState } from "react";
import { toast } from "react-toastify";

import Button from "@/app/ui/button/button";
import Tabs from "./tabs/tabs";
import { PlusIcon } from "../svgs";
import { getMediaId } from "@/app/utils/input";
import { setPlayTrack, setPlaylist } from "@/store/slices/media.slice";
import { useAppDispatch, useAppSelector } from "@/app/hooks/redux";
import { getMediaById } from "@/store/actions/media.action";
import { dupTrack } from "@/app/utils/track";
import { DUPLICATE_YOUTUBE_URL } from "@/app/stream/constants/message";

const Playlist = () => {
	const dispatch = useAppDispatch();
	const { playlist, playingTrack } = useAppSelector((state) => state.media);
	const [mediaUrl, setMediaUrl] = useState("");

	const handleAddMedia = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		try {
			// validate YouTube URL request
			const mediaId = getMediaId(mediaUrl);
			if (!mediaId) return;

			const { thumbnails, title, tags } = await getMediaById(mediaId);

			// prevent duplicate video
			const isDup = dupTrack(playlist, mediaId);
			if (isDup) throw new Error(DUPLICATE_YOUTUBE_URL);

			// send Media to store
			dispatch(
				setPlaylist({
					id: mediaId,
					thumbnail: thumbnails?.default?.url,
					title,
					tags,
					playing: !playlist.length ? true : false,
				})
			);

			!playingTrack && dispatch(setPlayTrack(mediaId));

			// reset input
			setMediaUrl("");
		} catch (error: any) {
			toast.error(error?.message);
		}
	};

	return (
		<div className="bg-gray border-darkGray border-1 border-solid rounded-25">
			<form
				name="YouTube URL"
				className="flex-between-center gap-4 py-4 px-9"
				onSubmit={handleAddMedia}
			>
				<input
					placeholder="YouTube URL..."
					className="p-3"
					value={mediaUrl}
					onChange={(e) => setMediaUrl(e.target.value)}
				/>
				<Button leftIcon={<PlusIcon />} className="px-3 py-2">
					Add
				</Button>
			</form>
			<hr className="text-darkGray" />
			<Tabs />
		</div>
	);
};

export default Playlist;
