import BenefitsSection from "./BenefitsSection";
import styles from "./CurriculumVitae.module.scss";
import CVTemplates from "./CVTemplates";
import UploadCVPage from "./UploadCVPage";
const CurriculumVitae = () => {
  return (
    <div className={styles.CurriculumVitae_container}>
      <div className={styles.upload_cv}>
        <UploadCVPage />
      </div>
      <div className={styles.CurriculumVitae_content}>
        <BenefitsSection />
        <CVTemplates />
      </div>
    </div>
  );
};
export default CurriculumVitae;
