import { StyleSheet } from "@react-pdf/renderer";

export const styles = StyleSheet.create({
  noto: {
    fontFamily: "NotoSans",
    fontWeight: "light",
  },

  viewer: {
    width: "100%",
    height: "auto",
    minHeight: window?.innerHeight,
    border: "none",
  },

  page: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    padding: "45px",
    border: "none",
  },

  personalDetails: {
    borderBottom: "1px solid gray",
    paddingBottom: "32px",
    display: "flex",
    flexDirection: "row",
  },

  userFig: {
    backgroundColor: "gray",
    width: "250px",
    minWidth: "250px",
    height: "250px",
    borderRadius: "100%",
    overflow: "hidden",
    margin: "5px",
  },

  userFigImage: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    objectPosition: "center",
  },

  userPersonalDetails: {
    width: "100%",
  },

  userName: {
    fontFamily: "NotoSans",
    fontWeight: "bold",
    color: "#F93B1D",
    fontSize: "24px",
  },

  emailPhoneContainer: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    marginTop: "15px",
    fontSize: "14px",
  },

  email: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    gap: "10px",
  },

  mobile: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    gap: "10px",
  },

  iconFig: {
    width: "15px",
    height: "15px",
  },

  icon: {
    width: "100%",
    height: "100%",
    objectFit: "contain",
  },

  sectionHead: {
    fontFamily: "NotoSans",
    fontWeight: 700,
    fontSize: "17px",
    color: "#F93B1D",
  },

  aboutMe: {
    display: "flex",
    margin: "30px 0 15px 0",
  },

  sectionDescription: {
    fontFamily: "NotoSans",
    fontWeight: "light",
    fontSize: "14px",
  },

  userInfoSection: {
    borderBottom: "1px solid gray",
    paddingBottom: "32px",
    marginTop: "25px",
    display: "flex",
    flexDirection: "column",
    gap: "15px",
  },

  userExperience: {},

  userEducation: {},

  labelDateContainer: {
    display: "flex",
    flexDirection: "column",
    gap: "5px",
  },

  sectionMainLabel: {
    fontFamily: "NotoSans",
    fontWeight: 700,
    fontSize: "15px",
  },

  sectionDatePeriod: {
    color: "gray",
    fontStyle: "italic",
    fontSize: "14px",
  },

  logo: {
    width: "40px",
    marginTop: "auto",
  },
});
