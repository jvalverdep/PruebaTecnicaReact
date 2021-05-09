import { makeStyles } from "@material-ui/core/styles";
const listBrandsStyles = makeStyles((theme) => ({
  buttonCreateBrands: {
    marginBottom: '20px',
    background: "#3f51b5",
    color: "white",
  },
  buttonDeleteBrands: {
    margin: "20px",
    background: "rgb(220, 0, 78)",
    color: "white",
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title:{
    padding: '20px 0'
  },
  pos: {
    marginBottom: 12,
  },
  grid: {
    width: "70%",
    display: "flex",
  },
  container: {
    marginTop: "50px",
    width: "100%",
    height: '700px',
    background: "white",
    marginBottom: '50px'
  },
  containerButton: {
    margin: "70px",
    alignItems: "left",
  },
  gridContainer: {
    
  }
}));
export default listBrandsStyles;
