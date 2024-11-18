import {
  Document,
  Page,
  Text,
  Font,
  View,
  Image,
  BlobProvider,
} from "@react-pdf/renderer";
import { ResumeT } from "../../../store/resume.types";

import NotoSansFont from "./fonts/noto-sans.ttf";
import NotoSansFontLight from "./fonts/NotoSansGeorgian-Light.ttf";
import NotoSansFontRegular from "./fonts/NotoSansGeorgian-Regular.ttf";
import NotoSansFontMedium from "./fonts/NotoSansGeorgian-Medium.ttf";
import NotoSansFontBold from "./fonts/NotoSansGeorgian-Bold.ttf";

import "./styles/pdf.css";
import logo from "./icons/logo-small.png";

import { styles } from "./styles/pdfStyles";
import PersonalDetails from "./PersonalDetails";
import ResumeExperience from "./ResumeExperience";
import ResumeEducation from "./ResumeEducation";

Font.register({
  family: "NotoSans",
  src: NotoSansFont,
  fonts: [
    {
      fontWeight: "light",
      src: NotoSansFontLight,
    },
    {
      fontWeight: "normal",
      src: NotoSansFontRegular,
    },
    {
      fontWeight: "semibold",
      src: NotoSansFontMedium,
    },
    {
      fontWeight: "bold",
      src: NotoSansFontBold,
    },
  ],
});

type PDFT = {
  resume: ResumeT;
};

const PDF: React.FC<PDFT> = ({ resume }) => {
  return (
    <BlobProvider
      document={
        <Document>
          <Page size="A4" style={styles.page}>
            <PersonalDetails resume={resume.personalInfo} />

            <View
              style={{ ...styles.userInfoSection, ...styles.userExperience }}
            >
              <Text style={styles.sectionHead}>გამოცდილება</Text>

              {resume.experience.map((exp, i) => (
                <ResumeExperience
                  experience={exp}
                  key={`user-resume-experience--${i}`}
                />
              ))}
            </View>

            <View
              style={{ ...styles.userInfoSection, ...styles.userEducation }}
            >
              <Text style={styles.sectionHead}>განათლება</Text>

              {resume.education.map((edu, i) => (
                <ResumeEducation
                  education={edu}
                  key={`user-education--resume__${i}`}
                />
              ))}
            </View>

            <View style={styles.logo}>
              <Image src={logo} />
            </View>
          </Page>
        </Document>
      }
    >
      {({ url }) => (
        <a
          href={url || ""}
          download={`${resume.personalInfo.name}-${resume.personalInfo.surname}-resume.pdf`}
          className="download-pdf--btn"
        >
          Download As PDF
        </a>
      )}
    </BlobProvider>
  );
};

export default PDF;
