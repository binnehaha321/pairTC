import { ImageProps } from "next/image";

export type TabsProps = {
	tabs: TabsHeaderProps[];
	activeTab: string;
	onTabClick: () => void;
};

export type TabsHeaderProps = {
	key: string;
	label: string;
	iconActive: JSX.Element;
	iconInActive: JSX.Element;
};

export type ItemProps = {
	image: ImageProps;
	tag: string;
};

export type TabItemsProps = {
	items: ItemProps[];
};
