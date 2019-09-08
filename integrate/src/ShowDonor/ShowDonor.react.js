import React from 'react';

import './ShowDonor.css';
import DataGrid from '../DataGrid/DataGrid.react';

const ShowDonor = (props) => {
    console.log( props.donorList)
    return(
        <div>
            <table className='table table-striped'>
                <thead>
                    <tr>
                        <th>Donor Name</th>
                        <th>Phone Number</th>
                        <th>Blood Group</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        props.donorList.map((eachDonor, index)=>{
                            return <tr key={index}>
                                    <td>{eachDonor.donor_name}</td>
                                    <td>{eachDonor.phone_number}</td>
                                    <td>{eachDonor.bloodGroup}</td>
                                    <td>{eachDonor.email}</td>
                                </tr>
                        })
                    }        
                </tbody>
            </table>    
        </div>
    );
}

export default ShowDonor;