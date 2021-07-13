import React from 'react'
import '../App.css'
import Landing from '../components/Landing'
import About from '../components/About'
import Why from '../components/Why'
import Register from '../components/Register'
import FAQ from '../components/FAQ'
import Schedule from '../components/Schedule'
import Sponsors from '../components/Sponsors'
import Contact from '../components/Contact'

export default function Home () {
    return (
        <>
            <Landing />
            <About />
            <Why />
            <Register />
            <FAQ />
            {/*
            <Schedule />
            <Sponsors />
            */}
            <Contact />
        </>
    );
}