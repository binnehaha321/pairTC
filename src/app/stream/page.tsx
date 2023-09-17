import MainStream from "@/components/main-stream/main-stream";
import Playlist from "@/components/playlist/playlist";

const Stream = () => {
	return (
		<div>
			<div className="w-[680px] grid grid-rows-2 gap-5">
				<MainStream />
				<Playlist />
			</div>
			<div className="w-[488px]">{/* Profile */}</div>
		</div>
	);
};

export default Stream;
