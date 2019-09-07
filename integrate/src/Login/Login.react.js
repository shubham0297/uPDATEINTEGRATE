import React from 'react';

import { Button, FormGroup, FormControl, FormLabel } from "react-bootstrap";

import './Login.css';




class Login extends React.Component {

    constructor(props) {

        super(props);

        this.state = {

            id: "",

            password: "",

            loaded:false

          };

    }

    validateForm() {

        return this.state.id.length > 0 && this.state.password.length > 0;

      }

    

      handleChange = event => {

        this.setState({

          [event.target.id]: event.target.value

        });

      }

    

      handleSubmit = event => {

        event.preventDefault();

        this.setState({loaded:true});

      }



    render() {
      if(!this.state.loaded)
      {

      

        return (

            <div className="Login">

                <header>

                    <h1>{this.props.name}</h1>

                </header>

        <form onSubmit={this.handleSubmit}>

          <FormGroup controlId="id">

            <FormLabel>Enter ID</FormLabel>

            <FormControl

              autoFocus

              type="id"

              value={this.state.id}

              onChange={this.handleChange}

            />

          </FormGroup>

          <FormGroup controlId="password" >

            <FormLabel>Password</FormLabel>
            <FormControl
          
               value={this.state.password}

              onChange={this.handleChange}

              type="password"

            />

          </FormGroup>

          <Button

            block

            bsSize="large"

            variant="dark"

            // disabled={!this.validateForm()}

            type="submit"

            >Sign in

          </Button>

        </form>

      </div>

        );
      }
      else{
              if(this.props.name==="Admin Login")   
              {
                return(
                  <div>s
                <h1>Hello Admin</h1>
                </div>);
              }
              else if(this.props.name==="Patient Login")
              {
                return(
                  <div>
                <h1>Hello Patient</h1>
                </div>);
              }
              else{
                return(
                  <div>
                <h1>Hello Donor</h1>
                </div>);
              }
      }

    }

}



export default Login;