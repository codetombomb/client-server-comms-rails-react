const team = {
    "id": 1,
    "name": "Aprilia Racing",
    "country": "Italy",
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/5/54/Aprilialogo.png",
    "created_at": "2022-08-24T16:56:15.949Z",
    "updated_at": "2022-08-24T16:56:15.949Z",
    "riders": [
      {
        "id": 1,
        "first_name": "Maverick",
        "last_name": "Vinales",
        "number": 12,
        "nationality": "Spain",
        "team_id": 1,
        "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Maverick_Vinales_at_2019_Yamaha_MotoGP_team_launch.jpg/440px-Maverick_Vinales_at_2019_Yamaha_MotoGP_team_launch.jpg",
        "created_at": "2022-08-24T16:56:16.005Z",
        "updated_at": "2022-08-24T16:56:16.005Z"
      },
      {
        "id": 2,
        "first_name": "Aleix",
        "last_name": "Espargaro",
        "number": 41,
        "nationality": "Spain",
        "team_id": 1,
        "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Aleix_Espargaro_2015.jpg/440px-Aleix_Espargaro_2015.jpg",
        "created_at": "2022-08-24T16:56:16.009Z",
        "updated_at": "2022-08-24T16:56:16.009Z"
      }
    ]
  }

// Send PATCH to '/teams/:id'
const update = {
        // "id": 2,
        "first_name": "Alaish",
        // "last_name": "Espargaro",
        // "number": 41,
        // "nationality": "Spain",
        // "team_id": 1,
        // "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Aleix_Espargaro_2015.jpg/440px-Aleix_Espargaro_2015.jpg",
        // "created_at": "2022-08-24T16:56:16.009Z",
        // "updated_at": "2022-08-24T16:56:16.009Z"
      }
// Pass in a rider from the API response

function updatedRiders(updatedRider) {
    debugger
    // Create a deep copy of our original state
    const stateCopy = JSON.parse(JSON.stringify(team))

    const updateRiderArray = stateCopy.riders.map(rider => {
        if(rider.id === updatedRider.id){
            return updatedRider
        } else {
            return rider
        }
    })

    stateCopy.riders = updateRiderArray
    setTeams(stateCopy)
    // return stateCopy
}



updatedRiders(update)
