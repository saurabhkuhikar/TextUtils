import React, { useState } from 'react'

export default function About(props) {

    const [myStyle,setMystyle] = useState({
        color:'black',
        backgroundColor:'white'
    });
    const [btnText,setBtnText] = useState("Enable Dark Mode");

    const toggleStyle = () =>{
        if (myStyle.color === 'white') {
            setMystyle ({
                color:'black',
                backgroundColor:'white'
            })
            setBtnText("Enable Dark Mode");
        }else{
            setMystyle ({
                color:'white',
                backgroundColor:'black'
            })
            setBtnText("Enable White Mode");
        }
    }

  return (
    <div className={`container mt-5 text-${props.mode === 'dark' ?'light':'black'}`}>

        <h2>About Us</h2>
        <div id="accordion"  style={{backgroundColor : props.mode === 'dark' ? '#151d6c':'white', color : props.mode === 'dark' ? 'white':'black' }}>
            <div className="card">
                <div className="card-header" id="headingOne">
                <h5 className="mb-0">
                    <button className="btn btn-link" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        Welcome To {props.title}
                    </button>
                </h5>
                </div>

                <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
                <div className="card-body"  style={{backgroundColor : props.mode === 'dark' ? '#151d6c':'white', color : props.mode === 'dark' ? 'white':'black' }}>
                    {props.title} is a Professional WebsiteType Platform. Here we will provide you only interesting content, which you will like very much. We're dedicated to providing you the best of WebsiteType, with a focus on dependability and WebsiteSpeciality. We're working to turn our passion for WebsiteType into a booming online website. We hope you enjoy our WebsiteType as much as we enjoy offering them to you.

                    I will keep posting more important posts on my Website for all of you. Please give your support and love.

                    Thanks For Visiting Our Site

                    Have a nice day!
                </div>
                </div>
            </div>
        </div>
        {/* <button type="button" className='btn btn-primary mt-3' onClick={toggleStyle}>{btnText}</button> */}
    </div>
  )
}
