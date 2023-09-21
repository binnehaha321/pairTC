"use client";
import { useEffect, useCallback } from "react";
import YouTube, { YouTubeEvent } from "react-youtube";

import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import { setPlayPause, setPlayTrack } from "@/store/slices/media.slice";

const MainStream = () => {
	const { playlist, playingTrack } = useAppSelector((state) => state.media);
	const dispatch = useAppDispatch();

	// const onPlayerReady = (e: any) => {
	// 	e.target.playVideo();
	// };

	const onPlayerPause = () => {
		dispatch(setPlayPause());
	};

	const onPlayerPlay = () => {
		if (playingTrack.pause) {
			dispatch(setPlayPause());
		}
	};

	const onFinishVideo = () => {};

	const handleChange = async (e: YouTubeEvent<number>) => {
		// -1 (unstarted)
		// 0 (ended)
		// 1 (playing)
		// 2 (paused)
		// 3 (buffering)
		// 5 (video cued).
		if (e.data === 1 && !playingTrack.pause) {
			await e.target.pauseVideo();
		} else {
			await e.target.playVideo();
		}
		console.log("track playing: ", playingTrack.pause);
		console.log("youtube plaing: ", e.data);
	};

	useEffect(() => {
		if (playlist.length === 1 && playingTrack.track_id !== playlist[0]?.id)
			dispatch(setPlayTrack(playlist[0]?.id));
	}, [playlist]);

	return (
		<YouTube
			opts={{
				height: "382",
				width: "680",
				playerVars: {
					autoplay: 1,
				},
			}}
			videoId={playingTrack.track_id || process.env.NEXT_PUBLIC_DEFAULT_VIDEO}
			onPause={onPlayerPause}
			onPlay={onPlayerPlay}
			onEnd={onFinishVideo}
			onStateChange={handleChange}
		/>
	);
};

export default MainStream;
