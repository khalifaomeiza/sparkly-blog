import DashboardHeaderStyle from './DashboardHeader.module.scss';

interface IDashboardHeader {
	handleToggleHamburger?: any;
}

const DashboardHeader = ({}: IDashboardHeader) => {
	return (
		<div className={DashboardHeaderStyle.dashboardHeader}>
			<div className={DashboardHeaderStyle.headerTitle}>
				<h1>Blogs</h1>
			</div>
		</div>
	);
};
export default DashboardHeader;
