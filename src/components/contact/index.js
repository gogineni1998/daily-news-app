import React, { useRef } from "react"
import { useDispatch } from "react-redux"
import { addContact } from "../../store/utils/thunks_form"

const Contact = () => {
    const email = useRef()
    const name = useRef()
    const Lastname = useRef()
    const message = useRef()
    const dispach = useDispatch()
    const getDetails = (event) => {
        event.preventDefault()
        dispach(addContact({email:email.current.value, name:name.current.value, lastname: Lastname.current.value, message:message.current.value}))
        email.current.value = null
        name.current.value = null
        Lastname.current.value = null
        message.current.value = null
    }
    return (
        <div>
            <h1>Contact us</h1>
                <div>Email address</div>
                <input className="input" placeholder="email@example.com" ref={email}/>
                <div>Name</div>
                <input className="input" placeholder="Enter your name" ref={name}/>
                <div>Lastname</div>
                <input className="input" placeholder="Enter your Lastname" ref={Lastname}/>
                <div>Message</div>
                <textarea className="input" ref={message}/>
                <button onClick={(event) => getDetails(event)}>Send message</button>
        </div>
    )
}

export default Contact