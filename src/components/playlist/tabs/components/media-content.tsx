import React from "react";

const MediaContent = ({ tag }: { tag: string }) => {
	return (
		<>
			<p className="truncate max-w-[333px] text-sm">
				Làm Sao Để Giỏi Hơn 99% Những Người Còn Lại nha hahaha
			</p>
			<span className="border-1 border-solid border-dark rounded-5 px-6 py-1 bg-gray w-fit text-xs">
				{tag}
			</span>
		</>
	);
};

export default MediaContent;
