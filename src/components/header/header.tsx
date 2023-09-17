import { LinkButton, ButtonIcon } from "@/app/ui/button";
import { LogoIcon, MenuIcon } from "../svgs";

const Header = () => {
	return (
		<div className="bg-gray shadow-pairTC">
			<div className="container flex-between-center py-2">
				<div>
					<LogoIcon />
				</div>
				<div className="flex-between-center gap-16">
					<LinkButton href={"/"} className="anchor">
						Guide me
					</LinkButton>
					<ButtonIcon>
						<MenuIcon />
					</ButtonIcon>
				</div>
			</div>
		</div>
	);
};

export default Header;
