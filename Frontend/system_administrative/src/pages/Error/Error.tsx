import { Container, Grid } from "@material-ui/core";
import ErrorLogo from '../../assets/images/error.svg'
import ErrorStyles from './styles/ErrorStyles'

const useStyles = ErrorStyles;

export const Error = () => {
    const classes = useStyles();
    return (
        <Container>
           <Grid item xs={6} className={classes.Error}>
             <img src={ErrorLogo} alt="error" />
            </Grid>
        </Container>

    );
}
