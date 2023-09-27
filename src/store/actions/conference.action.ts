import slugify from "slugify";

export const generateNickname = (username: string) => {
	const randomId = ~~(Math.random() * 99999);
	return `${slugify(username)}-${randomId}`;
};
