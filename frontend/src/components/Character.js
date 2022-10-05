function Character(character={"name":"red", "class":"fire"}) {
    return(
        <>
            <h3>{character.name}:</h3>
            <p>{character.class}:</p>
        </>
    )
}

export default Character;