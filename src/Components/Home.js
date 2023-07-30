import React from 'react'
import Navbar from "./Navbar"
import Card from './Card';
import Slide from './Slide';
import Footer from './Footer'

const Home = () => {
    const workout = [
        {
            id: 1,
            exercise: "Bench Press",
            imgs: "https://homegymreview.co.uk/wp-content/uploads/2020/12/00251101-Barbell-Bench-Press-Chest-Guide-1024x507.jpg",
            description: "Bench presses can be an effective exercise for building up chest."
        },
        {
            id: 2,
            exercise: "Incline Bench Press",
            imgs: "https://image.myupchar.com/9694/webp/incline-bench-press-benefits-types-technique.webp",
            description: "hello Suyash"
        },
        {
            id: 3,
            exercise: "Decline Bench Press",
            imgs: "https://www.inspireusafoundation.org/wp-content/uploads/2021/10/decline-bench-press-1024x566.png",
            description: "hello Suyash"
        },
    ]
    return (
        <div>
            <Navbar></Navbar>
            <Slide></Slide>
            <div className="d-flex align-content-center justify-content-center flex-wrap">
                {workout.map(person =>
                    <div key={person.id} >
                        <Card exercise={person.exercise} imgs={person.imgs} description={person.description}></Card>
                    </div>)
                }
            </div>
            <Footer></Footer>
        </div>
    )
}

export default Home