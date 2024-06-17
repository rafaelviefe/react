import Item from "./Item"

function List(){
    return (
        <>
            <h1>My list</h1>
            <ul>
                <Item brand="Ferrari" upDate={1985}/>
                <Item brand="Fiat" upDate={1964}/>
                <Item brand="Renault" upDate={2002}/>
                <Item brand="Toyota" upDate={1999}/>
                <Item/>
            </ul>
        </>
    )
}

export default List