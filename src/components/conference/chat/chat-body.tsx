import cn from "@/utils/cn";
import { Profile } from "@/models/peer";

const ChatBody: React.FC<Profile> = ({ avatar, name, username }) => {
	return (
		<div className="py-6 px-6">
			<div className={cn("flex gap-2")}>
				<div className="mt-1">{avatar}</div>
				<div className="flex flex-col gap-[6px]">
					<p className="text-xs">
						<b className="text-sm">{username}</b> ({name})
					</p>
					<p className="bg-white p-2 text-sm rounded-5 max-w-[282px]">
						Welcome you guys to PairTC, we can watch videos together and sharing
						thoughts through the chat box below.
					</p>
				</div>
			</div>
		</div>
	);
};

export default ChatBody;
