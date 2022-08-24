import React, { useEffect, useState } from "react";
import "./App.css";
import RiderCard from "./Components/RiderCard";
import TeamContainer from "./Components/TeamContainer";
import NewTeamForm from "./Components/NewTeamForm";
// import { Routes, Route } from "react-router-dom";

function App() {
  const [riders, setRiders] = useState([]);
  const [teams, setTeams] = useState([]);
  useEffect(() => {
    fetch("/teams")
      .then((resp) => {
        console.log(resp);
        return resp.json();
      })
      .then((data) => {
        console.log(data);
        setTeams([...data]);
      });
  }, []);

  return (
    <div className="App">
      <NewTeamForm />
      {/* <Routes>
        <Route path="/riders" element={<RiderCard riders={riders} />} />
        <Route path="/teams" element={<TeamContainer teams={teams} />} /> 
        <Route path="/new-team" element={<NewTeamForm />} /> 
      </Routes> */}
    </div>
  );
}

export default App;
