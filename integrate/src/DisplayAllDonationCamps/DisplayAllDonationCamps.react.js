import React from 'react';

import './DisplayAllDonationCamps.css';

const DisplayAllDonationCamps = (props) => {
    // console.log("Display All Donation Camps called");
    return (
        <div>
            <table className='table table-striped'>
                <thead>
                    <tr>
                        <th>Camp Name</th>
                        <th>From Date</th>
                        <th>To Date</th>
                        <th>Star Timing(in 24 hr format)</th>
                        <th>Star Timing(in 24 hr format)</th>
                        <th>Venue</th>
                        <th>city</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        props.donationCamps.map((eachDonor, index)=>{
                            return <tr key={index}>
                                    <td>{eachDonor.name}</td>
                                    <td>{eachDonor.fromDate}</td>
                                    <td>{eachDonor.toDate}</td>
                                    <td>{eachDonor.fromTime}</td>
                                    <td>{eachDonor.toTime}</td>
                                    <td>{eachDonor.venue}</td>
                                    <td>{eachDonor.city}</td>
                                    <td> <Link className="dropdown-item" to='/adminLogin'>Admin</Link></td>
                                </tr>
                        })
                    }        
                </tbody>
            </table>    
        </div>
        // <div className='displayalldonationcamps_wrapper'>
        //     {/* the bootstrap grid */}
        //     <div className="row text-center">
        //         {
        //             // create a map of campList and iterate on that using index
        //             props.donationCamps.map((eachCamp,index)=>{
        //                 return(
        //                     <div className="col-sm-3" key={index}>
        //                         {/* each card */}
        //                         <div className="thumbnail">
        //                             <p><b>{eachCamp.name}</b></p>
                                    
        //                             <p>{eachCamp.venue}</p>
        //                             <p>{eachCamp.endDate}</p>
        //                             {/* <p>{eachCamp.phone_number}</p> */}
        //                             <p>{eachCamp.address}</p>
        //                         </div>
        //                     </div>
        //                 )
        //             }
        //             )
        //         }
        //     </div>
        // </div>
    );

}

export default DisplayAllDonationCamps;