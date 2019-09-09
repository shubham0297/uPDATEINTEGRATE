import React from 'react'
import axios from 'axios'
// import DisplayAllBl
import DisplayAllDonationCamps from '../DisplayAllDonationCamps/DisplayAllDonationCamps.react'

export default class DisplayCamp extends React.Component {

    constructor() {
        super()
        this.state={
            donationCamps: [],
            click : false,
            btntxt : "Get Camp"
        }
    }



    componentDidMount(){

        axios.get("http://localhost:1014/getAll",{
      
        })
        .then(res => {
         console.log(res);          let donationCamps= res.data
         this.setState({ donationCamps });
})
    }
    
    


//     handleSubmit=(event)=>{
     
//         event.preventDefault()
//         this.state.click=!this.state.click
//         this.state.btntxt="hide camp"
        
//         axios.get("http://localhost:3000/bloodCamp")
//         .then(res => {
//             console.log(res);          let donationCamps= res.data;
//           this.setState({ donationCamps });
//         })
//     }


//     nothandleSubmit=(event)=>{
//         event.preventDefault()
//         this.state.click=!this.state.click
//         this.state.btntxt="hide camp"
//         this.setState({})
        
//     }




//     render(){
//         if(!this.state.click)
//         {
//         return(
            
//             <div>
//            <p>Search inside home</p>
//            <form onSubmit={this.handleSubmit}>
//            <button type="submit">{this.state.btntxt}</button>
//            </form>
           
//            { this.state.donationCamps.map(donationCamps => <h3>{donationCamps.details}</h3>)}
//            </div>
//         )
//         }
//         else if(this.state.click)
//         {
//         return(
            
//             <div>
//            <p>Search inside home</p>
//            <form onSubmit={this.notHandleSubmit}>
//            <button type="submit">{this.state.btntxt}</button>
//            </form>
           
//            { this.state.donationCamps.map(donationCamps => <h3>{donationCamps.details}</h3>)}
//            </div>
//         )
//     }
// }

render(){


return(
    <div>
        <DisplayAllDonationCamps donationCamps= {this.state.donationCamps}></DisplayAllDonationCamps>
            {/* <DisplayAllDonationCamps ></DisplayAllDonationCamps> */}
          {/* { this.state.donationCamps.map(donationCamps => <h6>{donationCamps.text}</h6>)} */}
    {/* {this.state.donationCamps} */}
    </div>
)
}

}