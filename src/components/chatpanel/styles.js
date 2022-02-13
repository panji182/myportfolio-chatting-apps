import { makeStyles } from '@material-ui/core/styles';
import Leaf from 'assets/img/leaf.png';

const useStyles = makeStyles(() => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    wrapperPanel: {
      paddingLeft: "10px",
      paddingRight: "10px",
    },
    wrapper: {
      width: "800px",
      margin: "0 auto",
      boxShadow: "none",
      background: "transparent",
    },
    header: {
      fontSize: "3rem",
      textAlign: "center",
      marginTop: "2vh",
      marginBottom: "5vh",
      color: "#3A7D52",
    },
    innerWrapper: {
      position: "relative",
    },
    panel: {
      fontSize: "1.6rem",
      padding: "20px",
      background: "white",
      border: "2px solid #3A7D52",
      borderRadius: "8px",
      boxShadow: "0px 3px 3px -2px rgb(0 0 0 / 20%), 0px 3px 4px 0px rgb(0 0 0 / 14%), 0px 1px 8px 0px rgb(0 0 0 / 12%)",
    },
    chatPanel: {
      float: "left",
      position: "relative",
      width: "100%",
      maxWidth: "500px",
      cursor: "default",
      paddingTop: "35px",
      minHeight: "calc(100vh - 180px)",
      marginRight: "12px",
      zIndex: 5,
    },
    chatSubTitle: {
      position: "absolute",
      top: 0,
      right: "7%",
      borderRadius: "0 0 8px 8px",
      boxShadow: "0px 3px 3px -2px rgb(0 0 0 / 20%), 0px 3px 4px 0px rgb(0 0 0 / 14%), 0px 1px 8px 0px rgb(0 0 0 / 12%)",
      borderLeft: "2px solid #3A7D52",
      borderRight: "2px solid #3A7D52",
      borderBottom: "2px solid #3A7D52",
      overflow: "hidden",
    },
    roomPanel: {
      float: "left",
      position: "relative",
      width: "100%",
      maxWidth: "200px",
      minHeight: "20vh",
      zIndex: 5,
    },
    memberPanel: {
      float: "left",
      position: "relative",
      width: "100%",
      maxWidth: "200px",
      minHeight: "20vh",
      marginTop: "24px",
      zIndex: 5,
    },
    leafTop: {
      position: "absolute",
      top: "-43px",
      left: "-52px",
      width: "115px",
      height: "80px",
      backgroundImage: `url(${Leaf})`,
      backgroundSize: "cover",
      opacity: .6,
      zIndex: 10,
    },
    leafTopRight: {
      position: "absolute",
      top: "-43px",
      right: "-52px",
      width: "115px",
      height: "80px",
      backgroundImage: `url(${Leaf})`,
      backgroundSize: "cover",
      opacity: .6,
      transform: "scaleX(-1)",
      zIndex: 10,
    },
    leafBottom: {
      position: "absolute",
      bottom: "-43px",
      right: "-52px",
      width: "115px",
      height: "80px",
      backgroundImage: `url(${Leaf})`,
      backgroundSize: "cover",
      opacity: .6,
      transform: "scale(-1, -1)",
      zIndex: 10,
    },
    titlePanel: {
      position: "absolute",
      padding: "5px",
      textAlign: "center",
      fontWeight: "bold",
      cursor: "default",
      width: "100px",
      height: "25px",
      top: "-20px",
      left: 0,
      right: 0,
      marginLeft: "auto",
      marginRight: "auto",
      zIndex: 10,
    },
    activeList: {
      cursor: "default",
      maxWidth: "147px",
      backgroundColor: "#7CF4A7",
      color: "#3A7D52",
      padding: "5px 8px",
      whiteSpace: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis",
    },
  }));

  export default useStyles;