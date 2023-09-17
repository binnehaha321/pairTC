import NextLink, { LinkProps } from "next/link";
import { HTMLProps, FC } from "react";

const LinkButton: FC<LinkProps & HTMLProps<HTMLAnchorElement>> = ({
	as,
	children,
	href,
	replace,
	scroll,
	shallow,
	passHref,
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
		<a {...rest}>{children}</a>
	</NextLink>
);

export default LinkButton;
