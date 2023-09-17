"use client";
import YouTube, { YouTubeProps } from "react-youtube";
import { useAppSelector } from "@/app/hooks/redux";

const MainStream = () => {
	const { mediaId } = useAppSelector((state) => state.media);
	const onPlayerReady: YouTubeProps["onReady"] = (event) => {
		// access to player in all event handlers via event.target
		event.target.pauseVideo();
	};
	return (
		<YouTube
			opts={{
				height: "382",
				width: "680",
				playerVars: {
					// autoplay: 1,
				},
			}}
			videoId={mediaId}
			onReady={onPlayerReady}
		/>
	);
};

export default MainStream;
