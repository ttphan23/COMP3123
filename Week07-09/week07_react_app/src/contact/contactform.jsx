import { useState } from "react"

function Contact() {
    let [name, setName]  = useState("Thinh")

    const buttonClick = () => {
        //e.preventDefault()
        alert(`Button Click: ${name}`)
    }

    const onNameChanged = (e) => {
        e.preventDefault()
        console.log(e.target.value)
        setName(e.target.value)
    }

    return (
        <div>
            <h1>Contact Form</h1>
            <input type="text" name="txtName" onChange={ (e) => onNameChanged(e) }/>
            {name}
            <button onClick={buttonClick}>Add Contact</button>
        </div>
    )
    
}

export default Contact