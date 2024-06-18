function Form(){
    
    function registerUser(e){
        e.preventDefault()
        console.log("User registered.")
    }
    
    return (
        <div>
            <h1>My register:</h1>
            <form onSubmit={registerUser}>
                <div>
                    <input type="text" placeholder="write your name"/>
                </div>
                <div>
                    <input type="submit" value="register" />
                </div>
            </form>
        </div>
    )
}

export default Form