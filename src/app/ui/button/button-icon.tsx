import { HTMLProps, FC } from "react";

const ButtonIcon: FC<HTMLProps<HTMLButtonElement>> = ({
	type,
	children,
	...props
}) => {
	return (
		<button type="button" {...props}>
			{children}
		</button>
	);
};

export default ButtonIcon;
