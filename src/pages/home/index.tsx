import { useState } from "react";
import { Card, Menu } from "antd";
import { MenuItemType } from "antd/es/menu/interface";

import { User } from "./user";
import { Map } from "./map";

const menuItems: MenuItemType[] = [
	{ key: "User", label: "User" },
	{ key: "Map", label: "Map" },
];

export const Home = () => {
	const [menu, setMenu] = useState("User");

	return (
		<div className="full-height">
			<Card className="custom-margin-1-5">
				<Menu
					onClick={({ key }) => setMenu(key)}
					selectedKeys={[menu]}
					mode="horizontal"
					theme="light"
					items={menuItems}
				></Menu>
				{menu === "User" && <User />}
				{menu === "Map" && <Map />}
			</Card>
		</div>
	);
};
