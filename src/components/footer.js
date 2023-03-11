import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import {toast} from 'react-toastify'
import { addUser } from "../store/utils/thunks_users";

const Footer = () => {
    const inputText = useRef()
    const dispach = useDispatch()
    const getEmail = (event) => {
        event.preventDefault()
        let email = inputText.current.value
        inputText.current.value = null
        dispach(addUser({ data: email })).unwrap()
        .then((result) => {
            if(result === 'yes'){
                toast("Thank you for subscription")
            } 
            else if(result === 'No') {
                toast("Email already Exisis")
            }
        })
    }
    return (
        <div className="footer-container">
            <h4 className="footer-heading">Join Our News Letter</h4>
            <input placeholder="Enter Email gds@abc.com" className="footer-form-input" ref={inputText} /><br />
            <button className="footer-form-button" onClick={(event) => getEmail(event)}>Submit</button>
        </div>
    )
}

export default Footer