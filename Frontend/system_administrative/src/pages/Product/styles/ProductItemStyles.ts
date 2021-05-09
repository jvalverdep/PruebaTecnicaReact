import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
const ProductItemSytles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      boxShadow: "1px 1px 10px #313264",
      borderRadius: "5px",
      color: "#313264",
      background: "white",
      marginBottom: "50px",
      margin: "60px 60px 60px 60px",
    },
    media: {
      display: "flex",
      width: "20%",
      margin: "auto",
    },
    expand: {
      transform: "rotate(0deg)",
      marginLeft: "auto",
      transition: theme.transitions.create("transform", {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: "rotate(180deg)",
    },
    avatar: {
      backgroundColor: "red[500]",
    },
    title: {
      display: "flex",
      margin: "auto",
      alignItems: "center",
      justifyContent: "center",
    },
    cardHeader: {
      display: 'flex',
      alignItems: 'center'
    }
  })
);
export default ProductItemSytles;
