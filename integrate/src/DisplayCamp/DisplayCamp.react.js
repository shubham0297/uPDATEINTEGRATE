import React from 'react'
import axios from 'axios'


export default class DisplayCamp extends React.Component {

    constructor() {
        super()
        this.state=
        {
            bloodDonors : [],
            "click" : false,
            "btntxt" : "Get Camp"
         
        }
    }



    componentDidMount(){

        axios.get("http://localhost:3000/donorCamp")
        .then(res => {
         console.log(res);          let bloodDonors= res.data
         this.setState({ bloodDonors });
})
    }
    
    


//     handleSubmit=(event)=>{
     
//         event.preventDefault()
//         this.state.click=!this.state.click
//         this.state.btntxt="hide camp"
        
//         axios.get("http://localhost:3000/bloodCamp")
//         .then(res => {
//             console.log(res);          let bloodDonors= res.data;
//           this.setState({ bloodDonors });
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
           
//            { this.state.bloodDonors.map(bloodDonors => <h3>{bloodDonors.details}</h3>)}
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
           
//            { this.state.bloodDonors.map(bloodDonors => <h3>{bloodDonors.details}</h3>)}
//            </div>
//         )
//     }
// }

render(){


return(
    <div>
          { this.state.bloodDonors.map(bloodDonors => <h6>{bloodDonors.text}</h6>)}
    </div>
)
}

}