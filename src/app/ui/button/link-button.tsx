import NextLink, { LinkProps } from "next/link";
import { FC, AnchorHTMLAttributes } from "react";

const LinkButton: FC<LinkProps & AnchorHTMLAttributes<HTMLAnchorElement>> = ({
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
