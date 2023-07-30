import React from 'react'

const Kohli = ({name = "Suyash" , link = "https://suyashsethia.github.io/img/personal_pic.jpg"}) => {
    return (
        <div>

            <h1>{name} BHai </h1>
            <img src={link}
                alt="Virat Kohli" />
        </div>
    )
}

export default Kohli