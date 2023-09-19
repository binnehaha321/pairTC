import { ButtonIcon } from "@/app/ui/button";
import { PauseIcon, PlayIcon, TrashIcon } from "@/components/svgs";
import HeartFilledIcon from "@/components/svgs/HeartFilledIcon";
import HeartIcon from "@/components/svgs/HeartIcon";

type PlaylistButtonsProps = {
	onRemove: () => void;
	onFavorite: () => void;
	onPlay?: () => void;
	liked: boolean;
	isPlaying: boolean;
};

const PlaylistButtons: React.FC<PlaylistButtonsProps> = ({
	onRemove,
	onFavorite,
	onPlay,
	liked,
	isPlaying,
}) => {
	return (
		<div className="flex items-center gap-4">
			<ButtonIcon key="1" onClick={onRemove} title="Remove from playlist">
				<TrashIcon />
			</ButtonIcon>
			<ButtonIcon key="2" onClick={onFavorite} title="Add to favorites">
				{liked ? <HeartFilledIcon /> : <HeartIcon />}
			</ButtonIcon>
			<ButtonIcon key="3" onClick={onPlay} title="Play video">
				{isPlaying ? <PauseIcon /> : <PlayIcon />}
			</ButtonIcon>
		</div>
	);
};

export default PlaylistButtons;
