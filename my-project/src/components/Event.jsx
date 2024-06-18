function Event({number}){

    function myEvent(){
        console.log(`Hello, I'm here. ${number}`)
    }

    return(
        <div>
            <p>Click to dispare an event</p>
            <button onClick={myEvent}>Activate</button>
        </div>
    )
}

export default Event