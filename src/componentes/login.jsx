import React,{Component} from 'react' ;
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';
import * as ROUTES from '../router';

import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import InputAdornment from '@material-ui/core/InputAdornment';
import AccountCircle from '@material-ui/icons/AccountCircle';

import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
/* import './login.css'; */



const SignUpPage = () => (
  <div>
    <LoginComponent />
  </div>
);

const INITIAL_STATE = {
    email: '',
    password: '',
    error: null,
  };

 class Login extends Component {
    constructor(props) {
      super(props);
      this.state = {
        ...INITIAL_STATE
        };
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {

      const {name,value}=event.target
      this.setState({[name] : value});
    }
  
    handleSubmit(event) { 

        const { email, password } = this.state;
        if(email)
      event.preventDefault();
    }
  
    render() {
        const { email, password, error } = this.state;
        const isInvalid = password === '' || email === '';
      return (
        
      <Container className='wrap-login' component="main" maxWidth="xs">
      <CssBaseline />
      <div className = "login">
        
        {/* <Avatar >
          <LockOutlinedIcon />
        </Avatar> */}
        <Typography component="h1" variant="h5">
          Inicia Sesion
        </Typography>
        <form  onSubmit={this.handleSubmit} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Correo Electronico"
            name="email"
            autoComplete="email"
            autoFocus
            value={email} 
            onChange={this.handleChange}
            InputProps={{
              endAdornment:(
                <InputAdornment position="end" > <AccountCircle /> </InputAdornment>
              )
            }}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Contraseña"
            type="password"
            id="password"
            autoComplete="off"
            value={password} 
            onChange={this.handleChange}
            InputProps={{
              endAdornment:(
                <InputAdornment position="end" > <LockOpenIcon /> </InputAdornment>
              )
            }}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            disabled={isInvalid}
          >
            Iniciar Sesion
          </Button>
          <div className='link-bottom'>
          <Grid container alignItems='center' justify='center' spacing={3} >
            <Grid item xs={12}>
            {error && <p>{error.message}</p>}
          <Link to={ROUTES.PASSWORD_FORGET}  variant="body2">
                Olvidaste tu contraseña?
              </Link> 
            </Grid>
            <Grid item xs={12}>
              <Link to={ROUTES.SIGN_UP} variant="body2">
                {"No Tienes cuenta? Registrate"}
              </Link>
            </Grid>
          </Grid>
          </div>
        </form>
      </div>
      <Box mt={8}>
      </Box>
    </Container>
       
      );
    }
  }

  const LoginComponent = withRouter(Login); 
  export default SignUpPage
  export { LoginComponent };