import { Media } from "@/store/slices/media.slice";

export const dupTrack = (playlist: Media[], track: Media | string): boolean => {
	if (playlist.length) {
		if (typeof track !== "string") {
			return playlist.some((item) => item.id === track.id);
		}
		return playlist.some((item) => item.id === track);
	}
	return false;
};
