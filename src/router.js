import React from 'react'
import { Route, Routes, BrowserRouter } from 'react-router-dom'

import Header from './components/header'
import Home from './components/home'
import Contact from './components/contact'
import PostsComponent from './components/posts'
import  MainLayout from './layouts/mainlayout'

const Router = () => {
    return (
        <BrowserRouter>
            <Header />
            <MainLayout>
            <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/contact' element={<Contact />} />
                    <Route path='/article/:id' element={<PostsComponent />} />
            </Routes>
            </MainLayout>
        </BrowserRouter>
    )
}

export default Router