"use client";
import { memo, useEffect, useState } from "react";
import { HeartIcon, List } from "@/components/svgs";
import TabHeader from "./components/tab-header";
import TabItems from "./components/tab-items";
import type { TabsHeaderProps } from "@/app/models/tabs";
import { useAppSelector } from "@/app/hooks/redux";
import { Media } from "@/store/slices/media.slice";

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
	const [activeKey, setActiveKey] = useState<"list" | "love">("list");
	const [items, setItems] = useState<Media[]>([]);
	const { playlist } = useAppSelector((state) => state.media);

	useEffect(() => {
		setItems(playlist);
	}, [playlist]);
	return (
		<div className="px-9 py-2">
			<TabHeader
				tabs={tabs}
				activeTab={activeKey}
				onTabClick={() => setActiveKey(activeKey === "list" ? "love" : "list")}
			/>
			<TabItems items={items} />
		</div>
	);
};

export default memo(Tabs);
