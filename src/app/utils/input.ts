import { INVALID_YOUTUBE_URL } from "../stream/constants/message";

const hasValue = (val: string) => {
	if (val.trim() === "") return;
	return val;
};

const validateRequest = (val: string) => {
	const regex = /https:\/\/www\.youtube\.com/;
	const result = regex.test(val);
	if (!result) throw new Error(INVALID_YOUTUBE_URL);
	return result;
};

export const getMediaId = (url: string) => {
	if (hasValue(url) && validateRequest(url)) {
		const video_urls = url.split("watch?v=");
		const shorts_url = url.split("shorts/");

		if (url.includes("watch?v=")) {
			return video_urls[1].slice(0, 11);
		} else if (url.includes("shorts/")) {
			return shorts_url[1].slice(0, 11);
		} else {
			throw new Error(INVALID_YOUTUBE_URL);
		}
	}
	return;
};
