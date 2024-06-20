function OtherList({itens}){
    return(
        <>
            <h3>Good things list:</h3>
            {itens.length > 0 ? (
                itens.map((item, index)=>(<p key={index}>{item}</p>))
            ) : (
                <p>There's not good things here.</p>
            )}
        </>
    )
}

export default OtherList