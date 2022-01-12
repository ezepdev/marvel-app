import { useEffect, useState } from 'react'
import './index.css'

const CardLegend = ({ characterName }) => (
    <>
        <div className="card-detail-container">
            <h1 className="card-detail-header"> {characterName}</h1>
        </div>
    </>
)

const CharacterCard = ({ character, isLoading }) => {
    const [hover, setHover] = useState(false)

    return !isLoading ? (
        <div
            className="card-container"
            onMouseOver={() => {
                setHover(true)
            }}
            onMouseLeave={() => {
                setHover(false)
            }}
        >
            <img
                className="card-image"
                src={character.thumbnail.path + '.jpg'}
            />
            {hover && <CardLegend characterName={character.name} />}
        </div>
    ) : (
        'Cargando, por favor espere!!!'
    )
}

export default CharacterCard
