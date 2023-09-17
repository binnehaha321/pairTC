import { Fragment } from "react";
import Image from "next/image";
import PlaylistButtons from "./buttons";
import MediaContent from "./media-content";
import type { ItemProps, TabItemsProps } from "@/app/models/tabs";

const TabItems: React.FC<TabItemsProps> = ({ items = [] }) => {
	return (
		<div className="flex-between-center mt-9 max-h-[382px] overflow-y-auto">
			{items.length === 0 ? (
				<i className="text-sm">There is no any media to play...</i>
			) : (
				items?.map(({ image, tag }: ItemProps, index) => (
					<Fragment key={index}>
						<div className="flex gap-3">
							<Image {...image} alt={image.alt} />
							<div className="flex flex-col justify-between">
								<MediaContent tag={tag} />
							</div>
						</div>
						<PlaylistButtons />
					</Fragment>
				))
			)}
		</div>
	);
};

export default TabItems;
