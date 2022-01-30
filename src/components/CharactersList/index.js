import CharacterCard from 'components/CharacterCard'
import React from 'react'
import './index.css'

const CharactersList = ({ characters }) => {
    return (
        <>
            <ul className="characters-container">
                {characters.map(({ id, name, description, thumbnail }) => (
                    <li key={id}>
                        <CharacterCard
                            name={name}
                            description={description}
                            imageSrc={
                                thumbnail.path + '.' + thumbnail.extension
                            }
                        />
                    </li>
                ))}
            </ul>
        </>
    )
}

export default CharactersList
