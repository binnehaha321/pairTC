import cn from "@/utils/cn";
import type { TabsHeaderProps, TabsProps } from "@/models/tabs";
import Button from "@/app/ui/button/button";

const TabHeader: React.FC<TabsProps> = ({ tabs, activeTab, onTabClick }) => {
	return (
		<div className="flex">
			{tabs?.map(
				({ key, label, iconActive, iconInActive }: TabsHeaderProps) => (
					<Button
						key={key}
						leftIcon={key === activeTab ? iconActive : iconInActive}
						variant="outline"
						className={cn("border-1 border-transparent", {
							active: key === activeTab,
						})}
						onClick={onTabClick}
					>
						{label}
					</Button>
				)
			)}
		</div>
	);
};

export default TabHeader;
