"use client";
import YouTube from "react-youtube";
import { useAppSelector } from "@/hooks/redux";

const MainStream = () => {
	const { playingTrack } = useAppSelector((state) => state.media);

	const onFinishVideo = () => {};

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
			onEnd={onFinishVideo}
		/>
	);
};

export default MainStream;
