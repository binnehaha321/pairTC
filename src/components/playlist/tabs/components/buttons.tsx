import { ButtonIcon } from "@/app/ui/button";
import { PlayIcon, TrashIcon } from "@/components/svgs";
import HeartIcon from "@/components/svgs/HeartIcon";

const PlaylistButtons = () => {
	return (
		<div className="flex items-center gap-4">
			<ButtonIcon key="1">
				<TrashIcon />
			</ButtonIcon>
			<ButtonIcon key="2">
				<HeartIcon />
			</ButtonIcon>
			<ButtonIcon key="3">
				<PlayIcon />
			</ButtonIcon>
		</div>
	);
};

export default PlaylistButtons;
