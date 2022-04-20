
import React from 'react';
export default function Card(props) {
    const userDetails = props.userDetails;
    return (
        <div className='m-auto' style={{width:'82%'}}>
            {userDetails && userDetails.map((item, index) => (
                <div className='row mb-4 bg-white py-2 border border-1 p-0 m-0 shadow-sm bg-body rounded' key={index}>
                    <div className='col-lg-3 col-md-3 col-sm-12'>
                        <div>
                            <img src={`https://avatars.dicebear.com/v2/avataaars/${item.name}.svg?options[mood][]=happy`} alt='Avatar' style={{width:'200px',height:'200px'}}/>
                        </div>
                    </div>
                    <div className='col-lg-9 col-md-9 col-sm-12'>
                        <h2>{item.name}</h2>
                        <div className='py-1'><span className='fw-bold '>Email:</span> {item.email} </div>
                        <div  className='py-1'><span className='fw-bold '>Phone:</span> {item.phone} </div>
                        <div  className='py-1'><span className='fw-bold '>Company:</span> {item.company.name} </div>
                        <div  className='py-1'><span className='fw-bold '>Website:</span> {item.website}</div>
                        <div  className='py-1'><span className='fw-bold '>Address:</span> {item.address.street}, {item.address.suite}, {item.address.city}, {item.address.zipcode},</div>
                    </div>
                </div>
            ))}
        </div>
    )
}
