import { ButtonIcon } from "@/app/ui/button";
import { RefObject, memo } from "react";
import WebcamIcon from "../svgs/WebcamIcon";
import MicroIcon from "../svgs/MicroIcon";
import { useAppSelector } from "@/hooks/redux";
import cn from "@/utils/cn";

export type ConntrolsLabel = {
	camera: string;
	micro: string;
};

type WebcamProps = {
	onToggleCamera: () => void;
	onToggleMic: () => void;
	src: RefObject<HTMLVideoElement>;
	username?: string;
	label?: ConntrolsLabel;
	className?: string;
};

const Webcam: React.FC<WebcamProps> = ({
	onToggleCamera,
	onToggleMic,
	src,
	username = "Anonymous",
	label = { micro: "", camera: "" },
	className = "",
}) => {
	const { camera } = useAppSelector((state) => state.conference);

	return (
		<div className="h-full w-full bg-gray rounded-25 border-solid-1 border-darkGray">
			<div className="aspect-video">
				{camera.isOn ? (
					<video
						className={cn("rounded-t-25 scale-x-[-1]", className)}
						autoPlay
						playsInline
						ref={src}
					/>
				) : (
					<div className="flex flex-col h-full bg-darkGray rounded-t-25 flex-center-all">
						<p>{username}</p>
					</div>
				)}
			</div>
			<div className="flex justify-center gap-2 p-2">
				<ButtonIcon
					onClick={onToggleCamera}
					className="bg-darkGray rounded-full p-2"
					title={label?.camera}
				>
					<WebcamIcon />
				</ButtonIcon>
				<ButtonIcon
					onClick={onToggleMic}
					className="bg-darkGray rounded-full p-2"
					title={label?.micro}
				>
					<MicroIcon />
				</ButtonIcon>
			</div>
		</div>
	);
};

export default memo(Webcam);
