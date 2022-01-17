import React from 'react'
import { useState } from 'react'
import './index.css'

const CardLegend = ({ name, description }) => (
    <>
        <div className="card-detail-container">
            <h1 className="card-detail-header"> {name}</h1>
            <p className="card-detail-body"> {description}</p>
        </div>
    </>
)

const CharacterCard = ({ name, description, imageSrc }) => {
    const [hover, setHover] = useState(false)

    return (
        <div
            className="card-container"
            onMouseOver={() => {
                setHover(true)
            }}
            onMouseLeave={() => {
                setHover(false)
            }}
        >
            <img className="card-image" src={imageSrc} />
            {hover && <CardLegend name={name} description={description} />}
        </div>
    )
}

export default CharacterCard
