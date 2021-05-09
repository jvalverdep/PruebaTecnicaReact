import { makeStyles } from "@material-ui/core/styles";
const ListProductStyles = makeStyles((theme) => ({
  buttonCreateProducts: {
    marginBottom: "20px",
    background: "#3f51b5",
    color: "white",
  },
  title:{
    padding: '20px 0'
  },
  buttonDeleteProducts: {
    margin: "20px",
    background: "rgb(220, 0, 78)",
    color: "white",
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  container: {
    marginTop: "50px",
    width: "100%",
    height: "650px",
    background: "white",
  },
  containerButton: {
    margin: "70px",
    alignItems: "left",
  },
  gridTable: {
    marginBottom: '50px'
  }
}));
export default ListProductStyles;
