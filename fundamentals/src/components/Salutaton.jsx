function Salutation({name}){

    function generateSalutation(someName){
        return `Hi, ${someName}! How're you doing?`
    }

    return(

        <>
            {name && <p>{generateSalutation(name)}</p>}
        </>
    )
}

export default Salutation