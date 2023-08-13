import React, { useState } from 'react';

const Card = (props) => {
    const [selectedDay, setSelectedDay] = useState(1); // Initialize with a default value

    const handleroutine = async (exname) => {
        // Use the selectedDay in your fetch or any other logic
        console.log('Selected Day:', selectedDay);
        console.log(localStorage.getItem("loggedinemail"))
        const response = await fetch("http://localhost:5000/api/Addroutine", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email: localStorage.getItem("loggedinemail"), ename: exname, day: selectedDay})

        })
        const json = await response.json();
        console.log(json)
        if (!json.success) {
            alert(json.errors)
        }

        return;


        // Rest of your code
    };

    const handleSelectChange = (event) => {
        setSelectedDay(event.target.value);
    };

    return (
        <div className="" style={{ display: "inline-block" }}>
            <div className="card m-3 mt-5" style={{ width: "18rem", maxHeight: "360px", borderRadius: "10%" }}>
                <img src={props.eximg} className="card-img-top" style={{ maxHeight: "150px", borderRadius: "10%" }} alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{props.exname}</h5>
                    <p className="card-text fs-6" style={{ height: "80px", objectFit: "fill" }}>
                        {props.exdes}
                    </p>
                    <div className="container w-100" >
                        <select className="m-2 h-100 bg-primary rounded" value={selectedDay} onChange={handleSelectChange}>
                            <option key={1} value={1}>Mon</option>
                            <option key={2} value={2}>Tue</option>
                            <option key={3} value={3}>Wed</option>
                            <option key={4} value={4}>Thu</option>
                            <option key={5} value={5}>Fri</option>
                            <option key={6} value={6}>Sat</option>
                            <option key={7} value={7}>Sun</option>
                        </select>
                        
                        <button className="btn btn-primary" onClick={() => handleroutine(props.exname)}>
                            Add to routine
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;
