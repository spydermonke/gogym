import React, { useEffect, useState } from 'react'
import Navbar from "./Navbar"
import Card from './Card';
import Slide from './Slide';
import Footer from './Footer'
//const mongoDB = require('/home/sunny/Desktop/React Learn/gogym/Backend/db');
// const dataStore = require('home/sunny/Desktop/React Learn/gogym/Backend/dataStore');

const Home = () => {
    const [cat,setcat] = useState([]);
    const [exe,setexe] = useState([]);
    const loaddata = async()=>{
       let response = await fetch('http://localhost:5000/api/exercise',{
        method: "POST",
        headers: {
            'Content-Type' : 'application/json'
        }
       });
       response= await response.json();
       setexe(response[0]);
       setcat(response[1]);
      // console.log(response[0],response[1]);
    }
    useEffect(()=>{
        loaddata()
    },[])
    return (
        <div>
            <Navbar></Navbar>
            <Slide></Slide>
            <div className=" container fs-3 float-left">
                {
                    cat !== []
                    ?
                    cat.map((fetched_data)=>{
                        return( <div className=" row mb-3">
                            <div key = {fetched_data._id} className = "d-flex float-left" >
                            {fetched_data.CategoryName}
                            </div>
                            <hr/>
                            {exe  !==[]? 
                            exe.filter((category_data)=>category_data.CategoryName===fetched_data.CategoryName)
                            .map(filtercat=>{
                                return(
                                    <div key={filtercat._id} className = "d-flex col-12 col-md-3 col lg-2 ">
                                        <Card exname ={filtercat.name}
                                        exdes = {filtercat.description}
                                        eximg = {filtercat.img}></Card>
                                        </div>
                                )
                            })
                            : <div> No such data found</div>}
                            </div>
                        )
                    })
                    : ""
                }
               
            </div>
            <Footer></Footer>
        </div>
    )
}

export default Home