"use client";
import { useState } from "react";
import { HeartIcon, List } from "@/components/svgs";
import TabHeader from "./components/tab-header";
import TabItems from "./components/tab-items";
import type { ItemProps, TabsHeaderProps } from "@/app/models/tabs";

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
	const [items, setItems] = useState<ItemProps[]>([]);
	// const [items, setItems] = useState<ItemProps[]>([
	// 	{
	// 		image: {
	// 			src: "",
	// 			width: 100,
	// 			height: 56,
	// 			alt: "pairTC overview",
	// 		},
	// 		tag: "0:26",
	// 	},
	// ]);

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

export default Tabs;
