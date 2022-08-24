import React from 'react'

function RiderCard({rider}) {
    return (
        <div key={rider.id}>
            <h1>{rider.first_name} {rider.last_name}</h1>
            <p>number: {rider.number}</p>
            <p>nationality: {rider.nationality}</p>
            <img src={rider.image_url} alt={`${rider.first_name}-image`}></img>
        </div>
    )
}

export default RiderCard