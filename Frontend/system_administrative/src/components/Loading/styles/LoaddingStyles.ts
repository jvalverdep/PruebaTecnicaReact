import { makeStyles } from "@material-ui/core/styles";
const LoaddingStyles = makeStyles((theme) => (
  {
    loadingDiv:{
     position: 'absolute',
     backgroundColor: '#000',
     opacity:'0.7',
     width:'100%',
     height:'100%',
     top:'0',
     bottom:'0',
     right:'0',
     left:'0',
     margin:'0'
    },
    loading:{
      position:'relative',
      height:'100%',
      display:'flex',
      justifyContent:'center',
      alignItems:'center'
    }
     
      
}));
export default LoaddingStyles;