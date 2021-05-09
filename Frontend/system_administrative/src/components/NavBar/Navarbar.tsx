import React from 'react';
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import { Menu, MenuItem, AppBar, Typography, Toolbar, IconButton, Container } from '@material-ui/core/';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Fade from '@material-ui/core/Fade';
import logo from '../../assets/images/logo.svg'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  main: {
    background: 'radial-gradient(circle at 50% 14em, #313264 0%, #00023b 60%, #00023b 100%)',
  },
  menuButton: {
    
  },
  title: {
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    textDecoration: 'none',
    color: '#fff'
  },
  logoImg: {
    width: '50px'
  },
  button: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    borderRadius: 3,
    border: 0,
    color: 'white',
    height: 48,
    padding: '0 30px',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  },
  iconProfile:
  {
    color: 'white'
  },
  buttonMenu:
  {

    color: 'white',
    padding: '14px 25px',
    textAlign: 'center',
    textDecoration: 'none'
  }

}));
export const Navarbar = () => {

  const isLogged = window.localStorage.getItem("isLogged");
  const username = window.localStorage.getItem("username");
  console.log(username)
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handlerClose = () => {
    window.localStorage.setItem("isLogged", "false");
    window.localStorage.setItem("username", "username")
    window.localStorage.setItem("token", "");
    window.location.href = '/login';
  }
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  console.log(isLogged + "valor");
  return (
    <>
      <AppBar position="static" className={classes.main}>
        <Container>
          <Toolbar >
            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            </IconButton>
            <Link to="/" className={classes.title}>
              <img src={logo} alt='Logo de Tabolu' className={classes.logoImg}></img>
              <Typography variant="h6" >
                Tabolu
              </Typography>
            </Link>
            {
              isLogged === 'true' ?
                <>
                  <Link className={classes.buttonMenu} to="/products"> Productos</Link>  
                  <Link className={classes.buttonMenu} to="/brands"> Marcas</Link>
                  <IconButton className={classes.iconProfile}
                    aria-label="account of current user"
                    aria-controls="primary-search-account-menu"
                    aria-haspopup="true" onClick={handleClick}
                    size="small"
                  >
                    {username}
                    <AccountCircle />
                  </IconButton>
                  <Menu
                    id="fade-menu"
                    anchorEl={anchorEl}
                    keepMounted
                    open={open}
                    onClose={handleClose}
                    TransitionComponent={Fade}
                    className={classes.buttonMenu}
                  >
                    <MenuItem onClick={handlerClose}>Cerrar</MenuItem>

                  </Menu>


                </>
                :
                <Link className={classes.buttonMenu} to="/login"> Login</Link>
            }



          </Toolbar>
        </Container>
      </AppBar>

    </>
  )
}
