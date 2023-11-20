import { useEffect, useState } from "react";
import "./index.css";

import Status from "./components/Status";
import Priority from "./components/Priority";
import Users from "./components/Users";
import Temp from "./components/Temp";

function App() {
  let [data1,setdata1]=useState([]);
  let [data2,setdata2]=useState([]);
  const fetchApi = async () => {
    const response = await fetch(
      "https://api.quicksell.co/v1/internal/frontend-assignment"
    );
    let data= await response.json();
    // data1=await data.tickets;
    // data2=await data.users;
    setdata1(data.tickets);
    setdata2(data.users);
    // console.log(data);
  };
  

  useEffect(() => {
    fetchApi();
  }, []);
  let [value, setvalue] = useState("none");
  const setfunction = (e) => {
    setvalue(e.target.value);
  };

  return (
    <div className="App">
      <div className="main">
        <div className="navbar">
          <label style={{display:'flex', justifyContent:'space-between', width:"13vw"}}>
            <p style={{margin:0, padding:0}}>choose option: </p>
            <select onChange={setfunction}>
              <option value="none" selected disabled hidden>
                Select an Option
              </option>
              <option value="priority">priority</option>
              <option value="user">user</option>
              <option value="status">status</option>
            </select>
          </label>
        </div>
        <div className="inbody">
          {(() => {
            if (value === "none") {
              return <p className="Options" style={{display:"flex",justifyContent:'center',alignItems:'center',height:'50vh', fontSize:'40px'}}>Please select an Option! </p>;
            } else if (value === "priority") {
              return <Priority data={data1}/>;
            } else if (value === "user") {
              return  <Users data={{d1:{data1},d2:{data2}}}/>;
            } else {
              return <Status data={data1}/>;
            }
          })()}
        </div>
      </div>
    </div>
  );
}

export default App;
