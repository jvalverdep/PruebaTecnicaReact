import { makeStyles } from "@material-ui/core/styles";

const HomeStyles = makeStyles((theme) => (
    {
        title:{
            padding: '20px 0'
        },
        gridContainer:{
            marginTop: '10px'
        },
        divDasboard:{
            display: 'flex',
            padding:'10px',
            background:'red',
            width: '200px',
            Height:'20px',
            margin:'10px'
        },
        container: {
            boxShadow: '1px 1px 10px #313264',
            borderRadius: '5px',
            color: '#313264',
            background: 'white',
            marginBottom: '50px'
            
        },
        paper: {
            marginTop: theme.spacing(8),
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            borderRadius: "3px",
            padding: "0.9375rem 1.875rem",
            flex: "1 1 auto",
            width: '100%',
    
    
        },
        avatar: {
            margin: theme.spacing(1),
            backgroundColor: theme.palette.secondary.main,
        },
        form: {
            width: '100%',
            marginTop: theme.spacing(1),
        },
        submit: {
            margin: theme.spacing(3, 0, 2),
        },
        cardHeader: {
            borderRadius: "3px",
            padding: "1rem 15px",
            marginLeft: "15px",
            marginRight: "15px",
            marginTop: "-30px",
            border: "0",
            marginBottom: "0"
        },
        cardHeaderPlain: {
            marginLeft: "0px",
            marginRight: "0px"
        },
        button: {
            color: 'blue[900]',
            margin: 'center',
    
        },
        input: {
            display: "none"
        },
        gridList: {
            flexWrap: 'nowrap',
            transform: 'translateZ(0)',
        },
        imgBrands: {
            width: '100%',
            margin: '15px 15px 15px',
        },
        imgBrand: {
            width: '130%',
            margin: '5px 5px 5 px 5px #313264',
            borderRadius: '5px'
        }
    }

    
    ));
    export default HomeStyles;