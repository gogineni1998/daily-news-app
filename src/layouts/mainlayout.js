import React from "react"
import { Container } from "react-bootstrap"

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const MainLayout = (props) => {
    return(
        <Container className="container">
            {props.children}
            <ToastContainer/>
        </Container>
    )
}

export default MainLayout