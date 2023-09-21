import { Media, PlayingTrack } from "../slices/media.slice";

export const getMediaById = async (mediaId: string) => {
	try {
		const res = await fetch(
			`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${mediaId}&key=${process.env.NEXT_PUBLIC_API_KEY}`
		);
		const { items } = await res.json();
		return items[0]?.snippet;
	} catch (error: any) {
		throw new Error(error);
	}
};

export const handlePlayNext = (list: Media[]): string => {
	if (!list.length) return "";
	return list[0].id;
};

export const handlePlay = (playing: PlayingTrack) => {
	if (playing.pause) playing.pause = false;
	return;
};

export const handlePause = (playing: PlayingTrack) => {
	if (playing.pause) return;
	playing.pause = true;
};
