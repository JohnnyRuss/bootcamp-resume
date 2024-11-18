import { Text, View, Image } from "@react-pdf/renderer";

import emailIcon from "./icons/at.png";
import phoneIcon from "./icons/phone.png";

import { styles } from "./styles/pdfStyles";

import { PersonalInfoT } from "../../../store/resume.types";

type PersonalDetailsT = {
  resume: PersonalInfoT;
};

const PersonalDetails: React.FC<PersonalDetailsT> = ({ resume }) => {
  const countryCode = resume.phone_number.slice(0, 4);
  const phoneIndex = resume.phone_number.slice(4, 7);
  const partOne = resume.phone_number.slice(7, 10);
  const partTwo = resume.phone_number.slice(10, 13);

  const phoneNum = `${countryCode} ${phoneIndex} ${partOne} ${partTwo}`;

  return (
    <View style={styles.personalDetails}>
      <View style={styles.userPersonalDetails}>
        <Text style={styles.userName}>
          {resume.name} {resume.surname}
        </Text>

        <View style={styles.emailPhoneContainer}>
          {resume.email && (
            <View style={styles.email}>
              <View style={styles.iconFig}>
                <Image src={emailIcon} style={styles.icon} />
              </View>
              <Text>{resume.email}</Text>
            </View>
          )}

          {resume.phone_number && (
            <View style={styles.mobile}>
              <View style={styles.iconFig}>
                <Image src={phoneIcon} style={styles.icon} />
              </View>
              <Text>{phoneNum}</Text>
            </View>
          )}
        </View>

        {resume.about_me && (
          <>
            <Text style={{ ...styles.sectionHead, ...styles.aboutMe }}>
              ჩემს შესახებ
            </Text>
            <Text style={styles.sectionDescription}>{resume.about_me}</Text>
          </>
        )}
      </View>

      {resume.image && (
        <View style={styles.userFig}>
          <Image cache={false} src={resume.image} style={styles.userFigImage} />
        </View>
      )}
    </View>
  );
};

export default PersonalDetails;
