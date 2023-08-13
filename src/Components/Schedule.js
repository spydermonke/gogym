import React, { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom'
import Navbar from './Navbar';
import Card from './Card';
import Footer from './Footer';

const Home = () => {
  let navigate = useNavigate()
  const handleroutine = async (exname, selectedDay) => {
    // Use the selectedDay in your fetch or any other logic
   
    console.log(localStorage.getItem("loggedinemail"))
    const response = await fetch("http://localhost:5000/api/removeroutine", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email: localStorage.getItem("loggedinemail"), ename: exname, day: selectedDay})

    })
    const json = await response.json();
   // console.log(json)
   
  window.location.reload(true)
  
    if (!json.success) {
        alert(json.errors)
    }

    return;


    // Rest of your code
};
  
  const [mon, setmon] = useState([]);
  const [tue, settue] = useState([]);
  const [wed, setwed] = useState([]);
  const [thu, setthu] = useState([]);
  const [fri, setfri] = useState([]);
  const [sat, setsat] = useState([]);
  const [sun, setsun] = useState([]);
  const [day, setday] = useState([]);
  const loaddata = async () => {
    let response = await fetch('http://localhost:5000/api/displayroutine', {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email: localStorage.getItem("loggedinemail")})
    });
    response = await response.json();
    setmon(response[0]);
    settue(response[1]);
    setwed(response[2]);
    setthu(response[3]);
    setfri(response[4]);
    setsat(response[5]);
    setsun(response[6]);
    setday(response[7]);
    // console.log(response[0],response[1]);
  }
  useEffect(() => {
    loaddata()
  }, [])

  return (
    <div>
      <Navbar />
      <div className="container fs-3 float-left">
      <h1 key={1} value={1}>Monday</h1>
      <hr></hr>
        {
          mon!== []
            ?
            mon.map((mon) => {
              return (<div className=" row mb-3">
                <div className="d-flex float-left " style={{"justify-content": "space-between"}} >
                  {mon}
                  <button class="btn btn-danger" onClick={() => handleroutine(mon,1)}>Remove</button>
                </div>
              </div>
              )
            })
            : "Rest"
        }
         <h1 key={2} value={2}>Tuesday</h1>
         <hr></hr>
        {
          tue!== []
            ?
            tue.map((mon) => {
              return (<div className=" row mb-3">
                <div className="d-flex float-left" style={{"justify-content": "space-between"}}>
                  {mon}
                  <button class="btn btn-danger" onClick={() => handleroutine(mon,2)}>Remove</button>
                </div>
              </div>
              )
            })
            : "Rest"
        }
         <h1 key={3} value={3}>Wednesday</h1>
         <hr></hr>
        {
          wed!== []
            ?
            wed.map((mon) => {
              return (<div className=" row mb-3">
                <div className="d-flex float-left" style={{"justify-content": "space-between"}}>
                  {mon}
                  <button class="btn btn-danger" onClick={() => handleroutine(mon,3)}>Remove</button>
                </div>
              </div>
              )
            })
            : ""
            
        }
         <h1 key={4} value={4}>Thursday</h1>
         <hr></hr>
        {
          thu!== []
            ?
            thu.map((mon) => {
              return (<div className=" row mb-3">
                <div className="d-flex float-left" style={{"justify-content": "space-between"}} >
                  {mon} <button class="btn btn-danger" onClick={() => handleroutine(mon,4)}>Remove</button>
                </div>
  
              </div>
              )
            })
            : "Rest"
        }
         <h1 key={5} value={5}>Friday</h1>
         <hr></hr>
        {
          fri!== []
            ?
            fri.map((mon) => {
              return (<div className=" row mb-3">
                <div className="d-flex float-left" style={{"justify-content": "space-between"}} >
                  {mon} <button class="btn btn-danger" onClick={() => handleroutine(mon,5)}>Remove</button>
                </div>
              
              </div>
              )
            })
            : "Rest"
        }
         <h1 key={6} value={6}>Saturday</h1>
         <hr></hr>
        {
          sat!== []
            ?
            sat.map((mon) => {
              return (<div className=" row mb-3">
                <div className="d-flex float-left" style={{"justify-content": "space-between"}}>
                  {mon}
                  <button class="btn btn-danger" onClick={() => handleroutine(mon,6)}>Remove</button>
                </div>
    
              </div>
              )
            })
            : "Rest"
        }
         <h1 key={7} value={7}>Sunday</h1>
         <hr></hr>
        {
          sun!== []
            ?
            sun.map((mon) => {
              return (<div className=" row mb-3">
                <div className="d-flex float-left" style={{"justify-content": "space-between"}} >
                  {mon} <button class="btn btn-danger" onClick={() => handleroutine(mon,7)}>Remove</button>
                </div>
               
              </div>
              )
            })
            : "Rest"
        }
      </div>
      <Footer />
    </div >
  );
};

export default Home;
