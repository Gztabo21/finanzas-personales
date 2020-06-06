import React,{Component} from 'react' ;
import { Link } from 'react-router-dom';
import * as ROUTES from '../router.js';

import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import FormControlLabel from '@material-ui/core/FormControlLabel';
/* import './register.css' */

const INITIAL_STATE = {
            password:'',
            passwordTwo:'',
            email:'',
            message: null,
};

class RegisterUser extends Component {
    constructor(props) {
      super(props);
      this.state = {
        ...INITIAL_STATE
            };
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
handleChange(event) {
   const {name,value}= event.target;
   this.setState({[name]:value})
}

handleSubmit(event) {
  const {email,password } = this.state;
  
  event.preventDefault();
}

render() {

  const { email,password,passwordTwo,error } = this.state;
  const isInvalid =  email === '' || password ==='' || passwordTwo !== password;

  return (
    <Container component="main" maxWidth="xs">

           <CssBaseline />
      <form onSubmit={this.handleSubmit}>
     
      <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Correo Electronico"
            type="email"
            name="email"
            autoComplete="admin@admin.com"
            value={email} 
            onChange={this.handleChange}
          />

      <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="password"
            type="password"
            label="Contraseña"
            name="password"
            autoComplete="off"
            value={password} 
            onChange={this.handleChange}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="password"
            type="password"
            label=" Repite Contraseña"
            name="passwordTwo"
            autoComplete="off"
            value={passwordTwo} 
            onChange={this.handleChange}
          />

      
 <div className="btn-save">
    {error && <p>{error.message}</p>}
   <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            disabled={isInvalid}
          >
            Registrar
          </Button>
          <Link to={ROUTES.LANDING} variant="body2">
          <Button
            type="button"
            fullWidth
            variant="contained"
            color="primary"
          >
              
                  Login
              
            
          </Button>
          </Link>

 </div>
      
     
      
    </form>
    </Container> 
  );
}
}
const RegisterComponent = () => (
  <div className="Header">
          <AppBar >
                    <Toolbar>

                        <Typography variant="h6" >
                        REGISTRAR
                        </Typography>
                       
                        
                    </Toolbar>
            </AppBar>
     <Typography component="h1" variant="h5">
     REGISTRAR
        </Typography>
    <RegisterUserComponent />
  </div>
);
const RegisterUserComponent =  withRouter(RegisterUser); 
export default RegisterComponent