import React, { useCallback, useState, useEffect } from 'react';
import InputRange from "../../components/InputRange";
import InputSwitch from '../../components/InputSwitch';
import {LargeButton} from '../../components/Button';

import circles from '../../assets/images/pattern-circles.svg';
import bgPattern from '../../assets/images/bg-pattern.svg';
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

const inputRangeView = { // value: views (in thousands)
    0: '10k',
    1: '50k',
    2: '100k',
    3: '500k',
    4: '1M'
}

const pricePerView = { // views: dollars
    '10k': 8.00,
    '50k': 12.00,
    '100k': 16.00,
    '500k': 24.00,
    '1M': 36.00
}

const Pricing = () => {
    const [price, setPrice] = useState(16.00);
    const [views, setViews] = useState('100k');

    const [billingType, setBillingType] = useState(false);
    const [range, setRange] = useState(2);

    const applyDiscount = (price) => {
        return price - price*25/100;
    }

    useEffect(()=>{
        let view = inputRangeView[range],
            cost = pricePerView[view];

        if(view) {
            setViews(view);
        }
        if(cost){
            cost = billingType ? applyDiscount(cost) : cost;
            setPrice(cost);
        }
    }, [range, billingType]);

    const changeRange = useCallback((e)=> {
        let value = e.target.value;
        setRange(value);
    }, []);

    const changeBilling = useCallback(()=> {
        setBillingType(!billingType);
    }, [billingType]);

    return (
        <div id="pricing-container">
            <img className="bg-pattern" src={bgPattern} alt="pattern background"/>

            <div className="title-container">
                <h3 className="page-title">Simple, traffic-based pricing</h3>
                <div className="subtitle">
                    <p>
                        Sign-up for our 30-day trial.
                    </p>
                    <p>
                        No credit card required.
                    </p>
                </div>

                <img className="pattern-circles" src={circles} alt="circles background"/>
            </div>

            <div className="card">
                <div className="card-body px-3">
                    <div className="row">
                        <div className="col-12 col-sm-auto page-views">
                            {views} Pageviews
                        </div>

                        <div className="col-12 range-container">
                            <InputRange min="0" max="4" value={range} onChange={changeRange} />
                        </div>

                        <div className="col-12 col-sm cost">
                            <span className="price">$ {price.toFixed(2)}</span>
                            <span> / month</span>
                        </div>
                    </div>

                    <div className="switch-container">
                        <label htmlFor="switch">
                            Monthly Billing
                        </label>

                        <div className="px-sm-1 px-2">
                            <InputSwitch id="switch" value={billingType} onChange={changeBilling} />
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