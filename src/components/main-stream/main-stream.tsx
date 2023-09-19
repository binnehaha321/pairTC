"use client";
import { useEffect } from "react";
import YouTube from "react-youtube";

import { useAppDispatch, useAppSelector } from "@/app/hooks/redux";
import { setPlayTrack } from "@/store/slices/media.slice";

const MainStream = () => {
	const { playlist, playingTrack } = useAppSelector((state) => state.media);
	const dispatch = useAppDispatch();

	const onPlayerReady = (event: any) => {
		event.target.playVideo();
	};

	useEffect(() => {
		if (playlist.length === 1 && playingTrack !== playlist[0]?.id)
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
			videoId={playingTrack || process.env.NEXT_PUBLIC_DEFAULT_VIDEO}
			onReady={onPlayerReady}
		/>
	);
};

export default MainStream;
