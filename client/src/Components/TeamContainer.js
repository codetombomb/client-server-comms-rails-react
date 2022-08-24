import React from 'react'
import RiderCard from './RiderCard'

const teamStyles = {
    border: "1px solid black",
    padding: "20px",
    margin: "20px 0 20px 0",
    width: "90vw"
}

function TeamContainer({ teams }) {
    return (
        <div>
            {teams.map((team) => {
                return (
                    <div key={team.id} style={teamStyles}>
                        <img src={team.image_url} alt={`${team.name}-image`}></img>
                       <h1>{team.name}</h1>
                       <p>{team.country}</p>
                       <h2>Riders</h2>
                       {team.riders.map(rider => {
                        return <RiderCard rider={rider}/>
                       })}
                    </div>
                )
            })}
        </div>
    )
}

export default TeamContainer