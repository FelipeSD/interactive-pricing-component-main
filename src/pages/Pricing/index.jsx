import React from 'react';
import InputRange from "../../components/InputRange";

import iCheck from '../../assets/images/icon-check.svg';
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
            <div className="title-container">
                <h3 className="page-title">Simple, traffic-based pricing</h3>
                <p>
                    Sign-up for our 30-day trial.
                    No credit card required.
                </p>
            </div>

            <div className="card">
                <div className="card-body">
                    <div className="row">
                        <div className="col-sm-auto page-views">
                            100k Pageviews
                        </div>
                        
                        <div className="col-12 range-container">
                            <InputRange />
                        </div>

                        <div className="col-sm cost">
                            <span className="price">$ 16.00</span>
                            <span> / month</span>
                        </div>
                    </div>

                    <div className="switch-container">
                        <label htmlFor="">
                            Monthly Billing
                        </label>

                        inputSwitch

                        <label htmlFor="">
                            Yearly Billing
                        </label>
                        <div className="badge badge-sm badge-red">
                            25%
                            <span>discount</span>
                        </div>
                    </div>
                </div>
                <div className="card-footer">
                    <div className="benefits">
                        <BenefitItem name="Unlimited websites" />
                        <BenefitItem name="100% data ownership Email reports" />
                        <BenefitItem name="Email reports" />                    
                    </div>
                    
                    <button className="button">
                        Start my trial
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Pricing