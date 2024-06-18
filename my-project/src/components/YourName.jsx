import { useState } from "react"

function YourName({setName}){

    const [currentName, setCurrentName] = useState()

    function sendName(e){
        e.preventDefault()
        setName(currentName)
        let place = document.getElementById('name-value')
        place.value = ""
        place.focus()
    }

    return(
        <div>
            <p>Write your name:</p>
            <form>
                <input
                    id="name-value"
                    type="text"
                    placeholder="What's your name?"
                    onChange={(e) => setCurrentName(e.target.value)}
                />
                <button onClick={sendName}>Submmit</button>
            </form>
        </div>
    )
}

export default YourName