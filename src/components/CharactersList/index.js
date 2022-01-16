import CharacterCard from 'components/CharacterCard'
import React from 'react'
import './index.css'

const CharactersList = ({ characters, isLoading }) => {
    console.log(characters)
    return (
        <>
            {!isLoading && (
                <ul className="characters-container">
                    {characters.map(character => (
                        <li key={character.id}>
                            <CharacterCard character={character} />
                        </li>
                    ))}
                </ul>
            )}
        </>
    )
}

export default CharactersList
