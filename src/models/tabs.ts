import { LIST, LOVE, OUR_LIST, FAVORITES } from "@/app/stream/constants/tab";

export type TabsProps = {
	tabs: TabsHeaderProps[];
	activeTab: string;
	onTabClick: () => void;
};

export type HeaderKeyProps = typeof LIST | typeof LOVE;

export type TabsHeaderProps = {
	key: HeaderKeyProps;
	label: typeof OUR_LIST | typeof FAVORITES;
	iconActive: JSX.Element;
	iconInActive: JSX.Element;
};

export type MediaContentProps = {
	title: string;
	tags: string[];
};
