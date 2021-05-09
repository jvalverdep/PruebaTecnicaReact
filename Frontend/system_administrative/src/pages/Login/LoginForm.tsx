import React, {useState, FormEvent, ChangeEvent,useContext} from 'react'
import {useHistory} from 'react-router-dom'
import {  toast } from 'react-toastify';
import {TextField, Grid, CssBaseline,Avatar,Typography,Button , Paper } from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import loginStyle  from './styles/loginStyle'
import * as LoginService from './LoginService'
import {User} from './User'

type InputChange = ChangeEvent<HTMLInputElement  >;
const useStyles = loginStyle;





const LoginForm = () => {
   /* const [isAuthenticated, userHasAuthenticated] = useState(false);
    const { isLogged } = useContext(useUserContext);
    
    const [userLoggen, setUserLoggen] = useLocalStorage('isLoggeds', false);
  
    const history = useHistory();*/
    const [user, setUser] = useState<User>({
        Username:"",
        Password:""
    } );
    const handleInputChange = (e:InputChange ) =>{
        setUser({...user, [e.target.name]: e.target.value});
       }
    const handleSubmit = async (e: FormEvent<HTMLFormElement>) =>{
        e.preventDefault();
        const usersLogin = await LoginService.loginToken(user.Username, user.Password);
       }
    const classes = useStyles();
    return (
    <>
         <Grid container component="main" className={classes.root}>
            <CssBaseline />
            <Grid item xs={false} sm={4} md={7} className={classes.image} />
            <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                <div className={classes.paper}>
                    <Avatar className={classes.avatar}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">   Sign in    </Typography>
                    <form className={classes.form} noValidate onSubmit={handleSubmit}>
 
                            <TextField variant="outlined"  margin="normal"  required   fullWidth label="Usuario"  name="Username"    type= "text"  autoFocus onChange={handleInputChange} />
                            <TextField variant="outlined"  margin="normal"  required   fullWidth label="Password"  name="Password"    type= "password"  autoFocus onChange={handleInputChange} />
                            <Button type="submit"  fullWidth  variant="contained"  color="primary"  className={classes.submit} > Ingresar  </Button>
                    </form>
                </div>
            </Grid>
        </Grid>
    </>
    )
}

export default LoginForm
