import Button from "./events/Button"

function Event(){

    function myEvent(){
        console.log(`Activating first event`)
    }

    function secondEvent(){
        console.log('Second event activated')
    }

    return(
        <div>
            <p>Click to dispare an event</p>
            <Button event={myEvent} text="First event" />
            <Button event={secondEvent} text="second event" />
        </div>
    )
}

export default Event