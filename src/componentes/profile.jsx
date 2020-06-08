import React,{Component} from 'react' ;
import { Link } from 'react-router-dom';
import * as ROUTES from '../router.js';

import { withRouter } from 'react-router-dom';


import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import PrimarySearchAppBar from './navigation';


const INITIAL_STATE = {
            nombre: '',
            apellido: '',
            cedula:'',
            email:'',
            message: null,
};

class Profile extends Component {
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
  const { nombre, apellido,cedula,email } = this.state;

  
  event.preventDefault();
}

render() {

  const { nombre,apellido, cedula, email, message } = this.state;
  const isInvalid = nombre === ''|| apellido === '' ||cedula === '' || email === '';

  return (
    <Container component="main" maxWidth="xs">
           <CssBaseline />
      <form onSubmit={this.handleSubmit}>
      
      <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="nombre"
            label="nombre"
            name="nombre"
            autoComplete="nombre"
            value={nombre} 
            onChange={this.handleChange}
          />
      <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="apellido"
            label="apellido"
            name="apellido"
            autoComplete="apellido"
            value={apellido} 
            onChange={this.handleChange}
          />
      <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="cedula"
            label="cedula"
            name="cedula"
            autoComplete="cedula"
            value={cedula} 
            onChange={this.handleChange}
          />
      <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            value={email} 
            onChange={this.handleChange}
          />
 <div className="btn-save">
   <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            disabled={isInvalid}
          >
            Guardar
          </Button>
          <Link to={ROUTES.HOME}>
          <Button
            fullWidth
            variant="contained"
            color="primary"
          >
           Regresar
          </Button></ Link>
 </div>
      
     
      
    </form>
    </Container> 
  );
}
}
const Profilecomponent = () => (
  <div>

     <Typography component="h1" variant="h5">
          Profile
        </Typography>
    <ProfilesComponent />
  </div>
);
const ProfilesComponent = withRouter(Profile); 

export default Profilecomponent