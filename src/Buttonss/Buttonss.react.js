import React from 'react'
import {Button,ButtonToolbar,Navbar,Nav} from 'react-bootstrap'
import Login from '../Login/Login.react'


export default class Buttonss extends React.Component{
    constructor(props){
        super(props);
        this.state={
            addModalShow : true,
            addRegisterModal:false,
         
        }
    }
    render(){
        let addModalClose = () =>
        this.setState({addModalShow:false},

            );
        let addModalClose1 = () =>
        this.setState({addRegisterModal:false});
        return(
           
              
                     <div> &nbsp;&nbsp;  
                               
                        <ButtonToolbar >
                           
                        <Button
                        
                            variant = 'primary'
                            onClick={()=> this.setState({addModalShow  :true})} 
                        >Login</Button>
                        <Login
                            show={this.state.addModalShow}
                            onHide={addModalClose}
                        />
         
                       
                        {/* <Button
                            variant = 'primary'
                            onClick={()=> this.setState({addRegisterModal  :true})} 
                        >Register</Button>
                        <Register
                            show={this.state.addRegisterModal}
                            onHide={addModalClose1}
                        /> */}
                         </ButtonToolbar>
                    </div>
                  
              

        )
    }
}