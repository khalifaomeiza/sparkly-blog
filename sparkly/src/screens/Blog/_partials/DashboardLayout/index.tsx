import DashboardLayoutStyles from './DashboardLayout.module.scss';

const DashboardLayout = () => {


  return (
   
    <div className={DashboardLayoutStyles.dashboardLayout}>
      <div className={DashboardLayoutStyles.dashboardHeader}>
        <h1>Blogs</h1>
      </div>
      <div className={DashboardLayoutStyles.dashboardContent}>
        {/* Add your content here */}
      </div>
    </div>
  );
};

export default DashboardLayout;
