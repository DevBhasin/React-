import React from 'react'
import Header from './components/Header/Header'
import { Outlet } from 'react-router-dom'
import Footer from './components/Footer/Footer'

function Layout() {
    return (
        <>
        <Header/>
        <Outlet/>   {/* bhai mere yeh dynamic rendering ho rhi h yaha jo bhi element ab children mein ham daalenge main.jsx mein vo path ke accd yhi render hoga keval Outlet ki jagah yhi outlet ka kaam h aur yhi bhai hamei react router provide krti ha vrna har component mein hamein ptaa ha ki header ,footer same h to bhai har component mein chahe home ho ya fir about sab mein baar baar header , footer call krna padhta bhai inefficient h yrr boht jyaada */}
        <Footer/>
        </>
    )
}

export default Layout
