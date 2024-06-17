function Person({name, age, occupation, photo}){



    return(
        <div>
            <img src={photo} alt={name}/>
            <h2>Name: {name}</h2>
            <p>Age: {age}</p>
            <p>Occupation: {occupation}</p>
        </div>
        
    )
}

export default Person