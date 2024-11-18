import { Text, View } from "@react-pdf/renderer";
import { styles } from "./styles/pdfStyles";

import { ExperienceT } from "../../../store/resume.types";

interface ResumeExperienceType {
  experience: ExperienceT;
}

const ResumeExperience: React.FC<ResumeExperienceType> = ({ experience }) => {
  return (
    <>
      <View style={styles.labelDateContainer}>
        {(experience.position || experience.employer) && (
          <Text style={styles.sectionMainLabel}>
            <>
              {experience.position}
              {experience.position && experience.employer ? ", " : ""}
              {experience.employer}
            </>
          </Text>
        )}
        {(experience.start_date || experience.due_date) && (
          <Text style={styles.sectionDatePeriod}>
            <>
              {experience.start_date}{" "}
              {experience.due_date ? `- ${experience.due_date}` : ""}
            </>
          </Text>
        )}
      </View>
      {experience.description && (
        <Text style={styles.sectionDescription}>{experience.description}</Text>
      )}
    </>
  );
};

export default ResumeExperience;
