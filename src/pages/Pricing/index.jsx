import React from 'react';
import InputRange from "../../components/InputRange";
import InputSwitch from '../../components/InputSwitch';
import {LargeButton} from '../../components/Button';

import iCheck from '../../assets/images/icon-check.svg';
import circles from '../../assets/images/pattern-circles.svg';
import bgPattern from '../../assets/images/bg-pattern.svg';

import './pricing.css';

const BenefitItem = (props) => {
    return (
        <div className="benefit-item">
            <img src={iCheck} alt="included" />
            <span>{props.name}</span>
        </div>
    )
}

const Pricing = () => {
    return (
        <div id="pricing-container">
            <img className="bg-pattern" src={bgPattern} alt="pattern background"/>

            <div className="title-container">
                <h3 className="page-title">Simple, traffic-based pricing</h3>
                <p>
                    Sign-up for our 30-day trial.
                    No credit card required.
                </p>

                <img className="pattern-circles" src={circles} alt="circles background"/>
            </div>

            <div className="card">
                <div className="card-body px-3">
                    <div className="row">
                        <div className="col-12 col-sm-auto page-views">
                            100k Pageviews
                        </div>
                        
                        <div className="col-12 range-container">
                            <InputRange min="0" max="6" />
                        </div>

                        <div className="col-12 col-sm cost">
                            <span className="price">$ 16.00</span>
                            <span> / month</span>
                        </div>
                    </div>

                    <div className="switch-container">
                        <label htmlFor="switch">
                            Monthly Billing
                        </label>
                        
                        <div className="px-sm-1 px-2">
                            <InputSwitch id="switch" />
                        </div>

                        <label htmlFor="switch">
                            Yearly Billing
                        </label>
                        <div className="badge badge-sm badge-red">
                            -25% {' '}
                            <span className="discount-message ml-1">discount</span>
                        </div>
                    </div>
                </div>

                <div className="card-footer px-3">
                    <div className="row">
                        <div className="col-12 col-sm-auto">
                            <div className="benefits">
                                <BenefitItem name="Unlimited websites" />
                                <BenefitItem name="100% data ownership" />
                                <BenefitItem name="Email reports" />                    
                            </div>
                        </div>
                        <div className="col-12 col-sm d-flex justify-content-end align-items-center">
                            <LargeButton text="Start my trial" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Pricing