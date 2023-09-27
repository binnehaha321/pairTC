import { FC, ButtonHTMLAttributes } from "react";

const ButtonIcon: FC<ButtonHTMLAttributes<HTMLButtonElement>> = ({
	type = "button",
	children,
	...props
}) => {
	return (
		<button type={type} data-attribute="button-icon" {...props}>
			{children}
		</button>
	);
};

export default ButtonIcon;
