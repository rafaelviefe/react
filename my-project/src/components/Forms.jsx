import { useState } from "react"

function Form(){
    
    function registerUser(e){
        e.preventDefault()
        console.log(`${name} and ${password}`)
        console.log("User registered.")
    }
    
    const [name, setName] = useState()
    const [password, setPassword] = useState()

    return (
        <div>
            <h1>My register:</h1>
            <form onSubmit={registerUser}>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="write your name"
                        onChange={(e)=> setName(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        placeholder="write your password"
                        onChange={(e)=> setPassword(e.target.value)}
                    />
                </div>
                <div>
                    <input type="submit" value="register" />
                </div>
            </form>
        </div>
    )
}

export default Form