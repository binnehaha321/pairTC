import { ButtonIcon } from "@/app/ui/button";
import { CameraIcon, MicrophoneIcon, SendMsgIcon } from "@/components/svgs";

type ControlsProps = {
	mic_label: string;
	cam_label: string;
};

type FormProps = {
	msg: string;
	onMsgChange: (e: any) => void;
	onSubmitMsg: (e: React.SyntheticEvent) => void;
};

type ChatFooterProps = {
	control: ControlsProps;
	form: FormProps;
};

const ChatFooter: React.FC<ChatFooterProps> = ({ control, form }) => {
	return (
		<div className="py-2 px-6 bg-white rounded-bl-25 rounded-br-25 flex-between-center gap-4">
			<div className="controls flex gap-3">
				<ButtonIcon
					title={control.mic_label}
					className="p-2 rounded-25 bg-darkGray"
				>
					<MicrophoneIcon />
				</ButtonIcon>
				<ButtonIcon
					title={control.cam_label}
					className="p-2 rounded-25 bg-darkGray"
				>
					<CameraIcon />
				</ButtonIcon>
			</div>
			<form className="chat flex w-full" onSubmit={form.onSubmitMsg}>
				<input
					className="px-3 py-2"
					placeholder="Your message..."
					value={form.msg}
					onChange={(e) => form.onMsgChange(e.target.value)}
				/>
				<ButtonIcon title="Send message" className="p-2 rounded-25 bg-darkGray">
					<SendMsgIcon />
				</ButtonIcon>
			</form>
		</div>
	);
};

export default ChatFooter;
