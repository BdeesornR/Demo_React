export const Sidebar = ({ isCollapsed }: { isCollapsed: boolean }) => {
	return (
		<div className="custom-sidebar-header">
			<h1>{isCollapsed ? "S" : "Sidebar"}</h1>
		</div>
	);
};
