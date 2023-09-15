import NextLink, { LinkProps } from "next/link";
import { HTMLProps, FC } from "react";
import cn from "@/app/utils/cn";

const LinkButton: FC<LinkProps & HTMLProps<HTMLAnchorElement>> = ({
	as,
	children,
	href,
	replace,
	scroll,
	shallow,
	passHref,
	className,
	...rest
}) => (
	<NextLink
		as={as}
		href={href}
		passHref={passHref}
		replace={replace}
		scroll={scroll}
		shallow={shallow}
		legacyBehavior
	>
		<a
			{...rest}
			className={cn(
				"text-lg font-bold px-9 py-3 pairTC-gradient rounded-25 hover:opacity-90 transition-all duration-200 ease-linear",
				className
			)}
		>
			{children}
		</a>
	</NextLink>
);

export default LinkButton;
