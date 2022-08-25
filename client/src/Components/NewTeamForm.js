import {useState} from "react"

function NewTeamForm({}) {

  // const [name, setName] = useState("");  
  // const [country, setCountry] = useState("");  
  // const [image, setImage] = useState("");  
  const [formData, setFormData] = useState({
    name: "",
    country: "",
    image: ""
  });

  const handleInputChange = (e) => {

    const copy = 


    setFormData()
  }

  return (
    <div>
      <form>
        <label>Name</label>
        <input type="text" name="name" value={formData.name} onChange={handleInputChange}></input>
        <label>Country</label>
        <input type="text" name="country" value={formData.country} onChange={handleInputChange}></input>
        <label>Image URL</label>
        <input type="text" name="image" value={formData.image} onChange={handleInputChange}></input>
        <input type="submit"></input>

      </form>
    </div>
  )
}
export default NewTeamForm