import { Media } from "../slices/media.slice";

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

// play the added track if there's no track in the playlist
export const handlePlayNext = (list: Media[]): string => {
	if (!list.length) return "";
	return list[0].id;
};
