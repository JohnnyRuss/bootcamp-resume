import { Text, View } from "@react-pdf/renderer";
import { styles } from "./styles/pdfStyles";

import { EducationT } from "../../../store/resume.types";
interface ResumeEducationType {
  education: EducationT;
}

const ResumeEducation: React.FC<ResumeEducationType> = ({ education }) => {
  return (
    <>
      <View style={styles.labelDateContainer}>
        {(education.institute || education.degree.label) && (
          <Text style={styles.sectionMainLabel}>
            <>
              {education.institute}{" "}
              {education.institute && education.degree.label ? ", " : ""}
              {education.degree.label}
            </>
          </Text>
        )}
        {education.due_date && (
          <Text style={styles.sectionDatePeriod}>
            <>{education.due_date}</>
          </Text>
        )}
      </View>

      {education.description && (
        <Text style={styles.sectionDescription}>{education.description}</Text>
      )}
    </>
  );
};

export default ResumeEducation;
