"use client";
import { FormEvent, useState } from "react";
import Button from "@/app/ui/button/button";
import { PlusIcon } from "../svgs";
import Tabs from "./tabs/tabs";
import { getMediaId, hasValue } from "@/app/utils/input";
import { setMediaId } from "@/store/slices/media.slice";
import { useAppDispatch } from "@/app/hooks/redux";

const Playlist = () => {
	const dispatch = useAppDispatch();
	const [mediaUrl, setMediaUrl] = useState("");

	const handleAddMedia = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const url = hasValue(mediaUrl);

		if (!url) return;
		const mediaId = getMediaId(url);
		dispatch(setMediaId(mediaId));
		setMediaUrl("");
	};

	return (
		<div className="bg-gray border-darkGray border-1 border-solid rounded-25">
			<form
				className="flex-between-center gap-4 py-4 px-9"
				onSubmit={handleAddMedia}
			>
				<input
					placeholder="YouTube URL..."
					className="p-3"
					value={mediaUrl}
					onChange={(e) => setMediaUrl(e.target.value)}
				/>
				<Button leftIcon={<PlusIcon />} className="px-3 py-2">
					Add
				</Button>
			</form>
			<hr className="text-darkGray" />
			<Tabs />
		</div>
	);
};

export default Playlist;
