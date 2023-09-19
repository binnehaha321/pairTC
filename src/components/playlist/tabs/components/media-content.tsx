import React, { Fragment } from "react";
import { MediaContentProps } from "@/app/models/tabs";

const MediaContent: React.FC<MediaContentProps> = ({ title, tags }) => {
	return (
		<Fragment>
			<p className="truncate max-w-[333px] text-sm" title={title}>
				{title}
			</p>
			<div className="flex gap-3 cursor-pointer">
				{tags?.map((tag: string) => (
					<span
						key={tag}
						className="border-1 border-solid border-dark rounded-5 px-3 py-1 bg-gray w-fit max-w-[150px] text-xs truncate"
						title={tag}
					>
						{tag}
					</span>
				))}
			</div>
		</Fragment>
	);
};

export default MediaContent;
