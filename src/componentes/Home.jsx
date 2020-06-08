import React,{Component} from 'react' ;
import { Link } from 'react-router-dom';

import Button from '@material-ui/core/Button';
import NavBar from './navigation.jsx';
import Grid from '@material-ui/core/Grid';
/* icon */

import * as ROUTES from '../router.js';


//componentes

const initialState ={
    email : '',
    role :''
}

export default class HomePage extends Component {
    constructor(props) {
      super(props);
      this.state = {
        ...initialState,
               };
               this.handleClick = this.handleClick.bind(this);
    }
    componentDidMount() { 
       let user = localStorage.getItem('User');
           
       console.log(user);
    }

    handleClick(){
    
    }

      
    render() {
      
      return (
        <div>
           <NavBar />
           <h1>hola</h1> 

        </div>
      );
    }
  }
 


 