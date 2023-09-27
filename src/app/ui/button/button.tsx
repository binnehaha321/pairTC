import { FC, ButtonHTMLAttributes } from "react";
import cn from "@/utils/cn";

interface Button extends ButtonHTMLAttributes<HTMLButtonElement> {
	leftIcon?: JSX.Element;
	rightIcon?: JSX.Element;
	variant?: "primary" | "outline";
}

const Button: FC<Button> = ({
	leftIcon,
	rightIcon,
	type,
	className,
	children,
	variant = "primary",
	...props
}) => {
	return (
		<button
			{...props}
			className={cn(
				"flex items-center gap-[6px]",
				{
					"!text-dark !bg-none": variant === "outline",
				},
				className
			)}
		>
			{leftIcon && <span>{leftIcon}</span>}
			{children}
			{rightIcon && <span>{rightIcon}</span>}
		</button>
	);
};

export default Button;
