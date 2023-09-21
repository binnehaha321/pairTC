"use client";
import { memo } from "react";

import { HeartIcon, List } from "@/components/svgs";
import TabHeader from "./components/tab-header";
import TabItems from "./components/tab-items";
import type { TabsHeaderProps } from "@/models/tabs";
import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import { setTab } from "@/store/slices/media.slice";

const tabs: TabsHeaderProps[] = [
	{
		key: "list",
		label: "Our list",
		iconActive: <List fill="#FF8300" />,
		iconInActive: <List fill="#002233" />,
	},
	{
		key: "love",
		label: "Favorites",
		iconActive: <HeartIcon fill="#FF8300" />,
		iconInActive: <HeartIcon fill="#002233" />,
	},
];

const Tabs = () => {
	const { playlist, favorites, tab } = useAppSelector((state) => state.media);
	const dispatch = useAppDispatch();

	return (
		<div className="px-9 py-2">
			<TabHeader
				tabs={tabs}
				activeTab={tab}
				onTabClick={() => dispatch(setTab(tab === "list" ? "love" : "list"))}
			/>
			<TabItems items={tab === "list" ? playlist : favorites} />
		</div>
	);
};

export default memo(Tabs);
