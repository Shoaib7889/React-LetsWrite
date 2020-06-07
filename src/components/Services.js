import React from 'react';
import img1 from '../assets/img/5.jpg'
import img2 from '../assets/img/6.jpg'
import img3 from '../assets/img/7.jpg'
import img4 from '../assets/img/8.jpeg'
import "bootstrap/dist/css/bootstrap.min.css";

export default function Services() {
    return (
            <section className="pr-m mt-5 mb-5">
                <div className="container-fluid">
                    <div className="row justify-content-center">
                        <div className="col text-center mb-3">
                            <h1 style={{fontWeight:'900'}}>Show Case</h1>
                            <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod amet Lorem ipsum dolor sit amet, </p>
                        </div>
                        <div className="row justify-content-center">
                            <div className="col-md-3 col-sm-6">
                                <i className="fas fa-congs text-warning fa-6x"></i>
                                <i><img className="img-thumbnail" src={img1}/></i>
                                <h1>Lorem ipsum</h1>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod .</p>
                               
                            </div>
                            <div className="col-md-3 col-sm-6">
                                <i className="fas fa-congs text-warning fa-6x"></i>
                                <i><img className="img-thumbnail" src={img2}/></i>
                                <h1>Lorem ipsum</h1>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod </p>
                               
                            </div>
                            <div className="col-md-3 col-sm-6">
                                <i className="fas fa-congs text-warning fa-6x"></i>
                                <i><img className="img-thumbnail" src={img3}/></i>
                                <h1>Lorem ipsum</h1>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod </p>
                               
                            </div>
                            
                        </div>
                    </div>
                     <div className="row justify-content-center">
                        <div className="row justify-content-center">
                            <div className="col-md-3 col-sm-6">
                                <i className="fas fa-congs text-warning fa-6x"></i>
                                <i><img className="img-thumbnail" src={img1}/></i>
                                <h1>Lorem ipsum</h1>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod .</p>
                               
                            </div>
                            <div className="col-md-3 col-sm-6">
                                <i className="fas fa-congs text-warning fa-6x"></i>
                                <i><img className="img-thumbnail" src={img4}/></i>
                                <h1>Lorem ipsum</h1>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod </p>
                               
                            </div>
                            <div className="col-md-3 col-sm-6">
                                <i className="fas fa-congs text-warning fa-6x"></i>
                                <i><img className="img-thumbnail" src={img3}/></i>
                                <h1>Lorem ipsum</h1>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod </p>
                                
                            </div>
                            
                        </div>
                    </div>
                </div>
            </section>
    )
}
