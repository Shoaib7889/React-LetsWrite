import React,{Fragment} from 'react'
import './banner.css';
import "bootstrap/dist/css/bootstrap.min.css";



export default function Banner() {
    return (
    <Fragment>
        <div className="banner-back">
            <div className="banner">
            <div className="all-logo">
                <p className="logo "><i  className="fa fa-feather fa-2x feather "></i></p>
                <p id="comp-name" className="ml-2">Scorpio Writers</p>
            
            </div>
             <ul className="navbar">
               <li>Home</li>
               <li>About</li>
               <li>Contact</li>
             </ul>
             <div className="line"></div>
                <div className="content">
                    <h1>Let's Write Togather.</h1>
                    <p>Some quick example text to build on the card title and make up the bulk of the cards content</p>
                    <p>card title and make up the bulk of the cards content</p>
                    <button className="btn">I need writer</button>
                    <button className="btn need">I need blogger</button>

                    
                </div>
            

                
            </div>
        </div>
    </Fragment>
    )
}
