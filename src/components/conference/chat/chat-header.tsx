import { ButtonIcon } from "@/app/ui/button";
import { TickIcon, CopyIcon, InviteIcon } from "@/components/svgs";

type ChatProps = {
	peerId: string;
	remoteIdValue?: string;
	onRemoteIdChange: (e: any) => void;
	onCall: (e: any) => void;
	onCopy: () => void;
	isCopied: boolean;
};

const ChatHeader: React.FC<ChatProps> = ({
	peerId,
	remoteIdValue,
	onRemoteIdChange,
	onCall,
	onCopy,
	isCopied,
}) => {
	return (
		<div className="flex-between-center py-3 px-6 border-b-1 border-darkGray">
			<div className="flex items-center gap-1" title="Copy ID" onClick={onCopy}>
				<p className="rounded-5 bg-white border-solid-1 border-primary px-2 py-1 text-xs cursor-pointer">
					{peerId}
				</p>
				{isCopied ? (
					<ButtonIcon title="Copied!">
						<TickIcon />
					</ButtonIcon>
				) : (
					<ButtonIcon title="Click to copy">
						<CopyIcon />
					</ButtonIcon>
				)}
			</div>
			<form className="flex items-center gap-1" onSubmit={onCall}>
				<input
					className="px-3 py-2 max-w-[160px]"
					placeholder="Your friend ID"
					value={remoteIdValue}
					onChange={(e: any) =>
						onRemoteIdChange(e.target.value.trim() as string)
					}
				/>
				<ButtonIcon
					className="rounded-25 p-[3px] bg-white border-solid-1 border-primary"
					title="Invite a friend"
					type="submit"
				>
					<InviteIcon />
				</ButtonIcon>
			</form>
		</div>
	);
};

export default ChatHeader;
