export const hasValue = (val: string) => {
	if (val.trim() === "") return;
	return val;
};

export const getMediaId = (url: string) => {
	const urls = url.split("watch?v=");
	return urls[1];
};
