import data from './data';

function List() {
    return(
        <>
            <h2>Characters</h2>
            <h3>{data[0].name}</h3>
        </>
    )
}

export default List;