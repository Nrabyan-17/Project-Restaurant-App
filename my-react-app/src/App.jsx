import Hero from "./components/Hero/Hero.jsx"
import Navbar from "./components/Navbar/Navbar.jsx"
import Banner from './components/Banner/Banner.jsx'
import Choose from "./components/WhyChooseUs/Choose.jsx"
import Footer from "./components/Footer/Footer.jsx"
import Footer1 from "./components/Footer1/Footer1.jsx"
import PopUp from "./components/PopUp/PopUp.jsx"
import { useState } from "react"


function App() {

  const [showPopUp, setShowPopUp] = useState(false);

  const handlePopUp = () => {
    setShowPopUp(true);
  }

  return (
    <>
    <div className="overflow-x-hidden">
      <Navbar handlePopUp = {handlePopUp}/>
      <Hero />
      <Banner />
      <Choose />
      <Footer />
      <Banner />
      <Footer1 />
      <PopUp showPopUp={showPopUp} setShowPopUp={setShowPopUp}/>
    </div>
    </>
  )
}

export default App
