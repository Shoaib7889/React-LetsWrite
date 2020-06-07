import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import './writingServices.css'


export default function WritingServices() {
    return (
         <section className="bg-light p-4 ">
           <div className="container-fluid">
             <div className="col text-center mb-3 section-m">
                            <h1 style={{fontWeight:'900'}}>What We Provide</h1>
                            
            </div>
            <div className="row text-center ">
                    <div className="col-lg-3 m-5  rounded" >
                        <i className="fas fa-desktop fa-6x icons  my-3"></i>
                        <h1>Lorem Ipsum</h1>
                        <p >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod do eiusmod </p>
                        
                    </div>
                    <div className="col-lg-3 m-5 rounded" >
                        <i className="fas fa-edit fa-6x icons mb-3"></i>
                        <h1>Lorem Ipsum</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod do eiusmod </p>
                        
                    </div>
                    <div className="col-lg-3 m-5 rounded" >
                        <i className="fas fa-cogs fa-6x icons mb-3"></i>
                        <h1>Lorem Ipsum</h1>
                        <p >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod do eiusmod </p>
                        
                    </div>
           </div>
           </div>
        </section>
    )
}