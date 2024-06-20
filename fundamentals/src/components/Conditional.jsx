import { useState } from "react";

function Conditional(){

const [email, setEmail] = useState()
const [userEmail, setUserEmail] = useState()

    function sendEmail(e){
        e.preventDefault()
        setUserEmail(email)
    }

    function clearEmail(){
        setUserEmail('')
    }

    return(
        <div>
            <h2>Register your e-mail:</h2>
            <form>
                <input type="email" placeholder="Write your e-mail..." onChange={(e)=> setEmail(e.target.value)}/>
                <button onClick={sendEmail}>
                    Send e-mail
                </button>
                {userEmail && (
                    <div>
                        <p>The user e-mail is: {userEmail}</p>
                        <button onClick={clearEmail}>Clear Email</button>
                    </div>
                )}
            </form>
        </div>
    )
}

export default Conditional