import React,{useState, useEffect} from 'react'
import '../Styles/Footer.css'

const Footer = () => {

  const [backtoTopButton, setbacktoTopButton] = useState(false);

  useEffect(()=>{
    window.addEventListener("scroll", ()=>{
      if(window.scrollY>100){
        setbacktoTopButton(true)
      }else{
         setbacktoTopButton(false)
      }
    })
  },[])

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  }

  return (
    <>
    <div className="mainfooter_container">
    {backtoTopButton && ( 
        <button 
             className="backtotop"
             onClick={scrollUp}
             >
               Back to Top
           </button>
        )
      }
      <div className="footer_container">
        <div className="container_one">
          <div className="container_title">
            Get to Know Us
          </div>
        </div>
        <div className="container_one">
          Contact us
        </div>
        <div className="container_one">
          Support Us
        </div>
        <div className="container_one">
          Services
        </div>
      </div>
      </div>
    </>
  )
}

export default Footer