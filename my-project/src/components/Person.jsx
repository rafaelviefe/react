function Person(props){

    return(
        <div>
            <img src={props.photo} alt={props.name} />
            <h2>Name: {props.name}</h2>
        </div>
        
    )
}

export default Person