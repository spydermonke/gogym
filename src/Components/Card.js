import React from 'react'

const Card = ({ exercise = "Bench Press", imgs = "https://homegymreview.co.uk/wp-content/uploads/2020/12/00251101-Barbell-Bench-Press-Chest-Guide-1024x507.jpg", description = "ji dost" }) => {
    return (
        <div>
            <div className="card m-3 mt-5" style={{ width: "18rem", maxHeight:"360px", borderRadius:"10%"}}>
                <img src={imgs} className="card-img-top" style={{maxHeight:"150px", borderRadius:"10%" }} alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{exercise}</h5>
                    <p className="card-text">
                        {description}
                    </p>
                    <a href="#" className="btn btn-primary">
                        Add to routine
                    </a>
                </div>
            </div>


        </div>
    )
}

export default Card