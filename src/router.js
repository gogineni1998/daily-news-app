import React from 'react'
import { Route, Routes, BrowserRouter } from 'react-router-dom'

import Header from './components/header'
import Home from './components/home'
import Contact from './components/contact'
import Post from './components/posts'
import  MainLayout from './layouts/mainlayout'
import Login from './components/sign/login'
import Register from './components/sign/register'

const Router = () => {
    return (
        <BrowserRouter>
            <Header />
            <MainLayout>
            <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/login' element={<Login />}/>
                    <Route path='/register' element={<Register />}/>
                    <Route path='/contact' element={<Contact />} />
                    <Route path='/article/:id' element={<Post />} />
            </Routes>
            </MainLayout>
        </BrowserRouter>
    )
}

export default Router