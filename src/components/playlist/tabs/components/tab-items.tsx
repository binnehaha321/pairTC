import Image from "next/image";
import { toast } from "react-toastify";

import PlaylistButtons from "./buttons";
import MediaContent from "./media-content";
import { useAppDispatch, useAppSelector } from "@/app/hooks/redux";
import {
	Media,
	removeFavById,
	removeMediaById,
	setFavorite,
	setPlayTrack,
	setPlaylist,
} from "@/store/slices/media.slice";
import { dupTrack } from "@/app/utils/track";
import {
	ADD_VIDEO_TO_FAVORITES,
	REMOVE_VIDEO_FROM_FAVORITES,
	REMOVE_VIDEO_FROM_PLAYLIST,
} from "@/app/stream/constants/message";

const TabItems = ({ items = [] }: { items: Media[] }) => {
	const dispatch = useAppDispatch();
	const { playlist, favorites, playingTrack } = useAppSelector(
		(state) => state.media
	);

	const handleRemove = (index: number) => {
		dispatch(removeMediaById(playlist[index].id));
		toast.success(REMOVE_VIDEO_FROM_PLAYLIST);
	};

	const handleFavTrack = (track: Media) => {
		if (dupTrack(favorites, track)) {
			// remove track from favorites
			dispatch(removeFavById(track.id));
			toast.success(REMOVE_VIDEO_FROM_FAVORITES);
		} else {
			// send track to fav list
			dispatch(setFavorite(track));
			toast.success(ADD_VIDEO_TO_FAVORITES);
		}
	};

	const handlePlayTrack = (trackId: string) => {
		const selectedTrack = playlist.find((item: Media) => item.id === trackId);

		if (trackId === playingTrack) {
			// set stop
			return;
			// dispatch(
			// 	setPlaylist({
			// 		...media,
			// 		playing: !media?.playing,
			// 	} as Media)
			// );
		} else {
			// set play
			dispatch(setPlayTrack(trackId));
		}
	};

	return (
		<div className="mt-9 max-h-[190px] overflow-y-auto will-change-scroll">
			<div className="flex flex-col gap-6 pr-4">
				{!playlist.length ? (
					<i className="text-sm">There is no any media to play...</i>
				) : (
					items?.map(({ tags, thumbnail, title, id }: Media, index: number) => (
						<div key={id} className="flex-between-center">
							<div className="tag flex gap-3 max-h-[56px]">
								<Image
									src={thumbnail}
									alt={title}
									width={100}
									height={56}
									className="cursor-pointer"
								/>
								<div className="flex flex-col justify-between max-w-[333px]">
									<MediaContent title={title} tags={tags?.slice(0, 3)} />
								</div>
							</div>
							<PlaylistButtons
								liked={favorites?.some(
									(track) => track?.id === playlist[index]?.id
								)}
								isPlaying={playlist[index]?.playing || false}
								onPlay={() => handlePlayTrack(playlist[index].id)}
								onFavorite={() => handleFavTrack(playlist[index])}
								onRemove={() => handleRemove(index)}
							/>
						</div>
					))
				)}
			</div>
		</div>
	);
};

export default TabItems;
