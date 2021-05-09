import { makeStyles } from "@material-ui/core/styles";
import logoBackground from '../../../assets/images/tabolu.jpg'
const stylesForm = makeStyles((theme) => (
  {
    loadingDiv:{
      display: 'flex',
      justify: 'center'
     
    },
    loading:{
      display:'flex',
      margin:'50px 50px 50px 50px',
      width: '50%'
    },
      root: {
          height: '100vh',
        },
        image: {
          backgroundImage: "url(" + logoBackground + ")",
          backgroundRepeat: 'no-repeat',
          backgroundColor:
            theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        },
        paper: {
          margin: theme.spacing(8, 4),
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        },
        avatar: {
          margin: theme.spacing(1),
          backgroundColor: theme.palette.secondary.main,
        },
        form: {
          width: '100%', // Fix IE 11 issue.
          
        },
        submit: {
          margin: theme.spacing(3, 0, 2),
        },
      
}));
export default stylesForm;