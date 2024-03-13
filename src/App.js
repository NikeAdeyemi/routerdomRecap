import React from 'react'
import Classwork from './components/Classwork'
import Button from './components/Button'
import Cards from './components/Cards'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/pages/Home'
import About from './components/pages/About'
import Contact from './components/pages/Contact'
import Project from './components/pages/Project'
import Testimonial from './components/pages/Testimonial'


const App = () => {
  const image1 = "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/88/9360511/1.jpg?0024"
  const image2 = "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/30/6201881/1.jpg?6278"
  const image3 = "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/29/5026232/1.jpg?9310"
  const image4 = "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/27/6931721/1.jpg?8750"
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element = {<Home/>}/>
      <Route path="/about" element = {<About/>}/>
      <Route path="/contact" element = {<Contact/>}/>
      <Route path="/project" element = {<Project/>}/>
      <Route path="/testimonial" element = {<Testimonial/>}/>
    </Routes>
    </BrowserRouter>
    <Classwork />
    <Button name="Login" />
    <Button name= "Register" />
    <Button name="Sign in" />
    <Button name="Signup" />
    <div className='d-flex gap-5'>
    <Cards image ={image1} title="Smart Watch" text="A very durable smart watch for everyday use" price={29}/>
    <Cards image ={image2} title = "Selfie stick" text="Selfie stick, easy to carry everywhere and very durable" price={50}/>
    <Cards image = {image3} title ="Oraimo Speaker" text="Portable speaker, very loud and clear" price={10}/>
    <Cards image = {image4} title ="Oraimo Power bank" text="Power up your phone anywhere, easy to carry everywhere you go" price={105}/>
    </div>
      </>
  )
}

export default App