import DashboardHeaderStyle from './DashboardHeader.module.scss';
// import ArrowLeft from '../../../../assets/svg_components/ArrowLeft';
// import ChevronDown from '../../../../assets/svg_components/ChevronDown';

interface IDashboardHeader {
	handleToggleHamburger?: any;
}

const DashboardHeader = ({}: IDashboardHeader) => {
	return (
		<div className={DashboardHeaderStyle.dashboardHeader}>
			<h1 style={{ color: 'red', fontFamily: 'Satoshi-Bold' }}>
				This is the Dashboard header
			</h1>
			{/* Additional content can be added here */}
		</div>
	);
};

export default DashboardHeader;
