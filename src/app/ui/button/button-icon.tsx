import { HTMLProps, FC } from "react";

const ButtonIcon: FC<HTMLProps<HTMLButtonElement>> = ({
	type,
	children,
	...props
}) => {
	return (
		<button type="button" data-attribute="button-icon" {...props}>
			{children}
		</button>
	);
};

export default ButtonIcon;
