import styles from "./Job.module.scss";
import JobSearchForm from "./JobSearchForm";
import { Breadcrumb } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { jobCategoriesColumns } from "../../../Service/Data/jobCategoriesData";
import { locationColumns } from "../../../Service/Data/locationGridData";
import DataGrid from "../../../Components/DataGrid/DataGrid";
import ExpandableContent from "./ExpandableContent";
import JobDescription from "./JobDescription";
const Job = () => {
  return (
    <div className={styles.job_container}>
      <div className={styles.header_job}>
        <JobSearchForm />
      </div>
      <div className={styles.job_content}>
        <div className={styles.intro_text}>
          <Breadcrumb className="quiz-detail-new-header">
            <Breadcrumb.Item linkAs={NavLink} linkProps={{ to: "/" }}>
              JobSGo
            </Breadcrumb.Item>
            <Breadcrumb.Item active>Việc làm</Breadcrumb.Item>
          </Breadcrumb>
        </div>
        <div className={styles.job_categories_section}>
          {/* 2. Grid Việc làm theo ngành nghề (Layout 3+1) */}
          <DataGrid
            mainTitle="Tìm kiếm việc làm nhanh theo ngành nghề"
            columns={jobCategoriesColumns}
          />

          {/* 3. Grid Việc làm theo địa điểm (Layout 4 cột) */}
          <DataGrid
            mainTitle="Tìm kiếm việc làm nhanh theo địa điểm"
            columns={locationColumns}
          />
          {/* 4. Khối nội dung có thể mở rộng */}
          <ExpandableContent initialHeight={500}>
            <JobDescription />
          </ExpandableContent>
        </div>
      </div>
    </div>
  );
};
export default Job;
