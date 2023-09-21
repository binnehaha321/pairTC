import { useCallback } from "react";
import Image from "next/image";
import { toast } from "react-toastify";

import PlaylistButtons from "./buttons";
import MediaContent from "./media-content";
import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import {
	Media,
	removeFavById,
	removeMediaById,
	setFavorite,
	setPlayPause,
	setPlayTrack,
} from "@/store/slices/media.slice";
import { dupTrack } from "@/utils/track";
import {
	ADD_VIDEO_TO_FAVORITES,
	REMOVE_VIDEO_FROM_FAVORITES,
	REMOVE_VIDEO_FROM_PLAYLIST,
} from "@/app/stream/constants/message";

const TabItems = ({ items = [] }: { items: Media[] }) => {
	const dispatch = useAppDispatch();
	const { playlist, favorites, playingTrack, tab } = useAppSelector(
		(state) => state.media
	);

	const handleRemove = useCallback(
		(id: string) => {
			if (tab === "list") {
				dispatch(removeMediaById(id));
				toast.success(REMOVE_VIDEO_FROM_PLAYLIST);
			} else {
				dispatch(removeFavById(id));
				toast.success(REMOVE_VIDEO_FROM_FAVORITES);
			}
		},
		[tab]
	);

	const handleFavTrack = useCallback(
		(track: Media) => {
			if (tab === "love") return;
			if (dupTrack(favorites, track)) {
				// remove track from favorites
				dispatch(removeFavById(track.id));
				toast.success(REMOVE_VIDEO_FROM_FAVORITES);
			} else {
				// send track to fav list
				dispatch(setFavorite(track));
				toast.success(ADD_VIDEO_TO_FAVORITES);
			}
		},
		[tab]
	);

	const handlePlayTrack = useCallback((trackId: string) => {
		// if pausing the playingTrack
		if (playingTrack.track_id === trackId) {
			// continue playing
			if (playingTrack.pause) {
				console.log("video tam dung");
			}
			// set stop
			return;
		}
		dispatch(setPlayPause());
		// else {
		// 	// set play
		// 	dispatch(setPlayTrack(trackId));
		// }
	}, []);

	return (
		<div className="mt-9 max-h-[190px] overflow-y-auto will-change-scroll">
			<div className="flex flex-col gap-6 pr-4">
				{!playlist.length && !favorites.length ? (
					<i className="text-sm">There is no any media to play...</i>
				) : (
					items?.map(
						({ tags, thumbnail, title, id, loved }: Media, index: number) => (
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
									loved={loved}
									isPlaying={
										id === playingTrack.track_id && !playingTrack.pause
									}
									onPlay={() => handlePlayTrack(id)}
									onFavorite={() => handleFavTrack(playlist[index])}
									onRemove={() => handleRemove(id)}
								/>
							</div>
						)
					)
				)}
			</div>
		</div>
	);
};

export default TabItems;
