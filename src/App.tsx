import { useState } from "react";
import { Layout } from "antd";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
	faFileLines,
	faFloppyDisk,
	faUser,
} from "@fortawesome/free-solid-svg-icons";

import { Home } from "./pages/home";
import { Sidebar } from "./pages/sidebar";

import "./App.css";
import { StatusMessage } from "./pages/global";

library.add(faUser, faFileLines, faFloppyDisk);

const App = () => {
	const [isCollapsed, setIsCollapsed] = useState(false);

	return (
		<Layout className="full-width full-height">
			<Layout.Sider
				className="custom-sidebar"
				width="20%"
				collapsible={true}
				collapsed={isCollapsed}
				onCollapse={() => setIsCollapsed(!isCollapsed)}
			>
				<Sidebar isCollapsed={isCollapsed} />
			</Layout.Sider>
			<Layout>
				<Home />
				<StatusMessage timeout={300000} />
			</Layout>
		</Layout>
	);
};

export default App;
