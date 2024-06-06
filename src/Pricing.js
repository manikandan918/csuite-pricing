import React from 'react';
import './PricingPlans.css';
import 'bootstrap/dist/css/bootstrap.min.css';
const PricingPlans = () => {
  return (
    <div className="background">
      <div className="container my-5 py-5">
        <div className="d-flex justify-content-between align-items-start ">
          <div className="text-left">
            <h2 className="font-weight-bold  ms-4 plan-title">Choose your plan</h2>
            <p className="mb-0 ms-4 description-1">
              🚀 14 days free trial
            </p>
            <p className="mb-0 ms-4 mt-2 text-muted descriptin-2">Get the right plan for your business. Plans can be upgraded in the future.</p>
          </div>
          <div className="d-flex align-items-center">
            <span className=" mr-2">(Save 20%)</span>
            <button type="button" className="yearly-button">Default</button>
          </div>
        </div>
        <div className="row g-4">
          <div className="col-md-4">
            <div className="card mx-auto custom-card h-100">
              <div className="card-body text-center">
                <h5 className="card-title  text-left"style={{ color: '#1C2C83' }}><i className="fas fa-circle mb-0" style={{ color: '#1C2C83', fontSize: '0.65rem', marginRight: '0.5rem' }}></i>Basic Plan</h5>
                <h6 className="card-price text-left font-weight-bold">$4.99 <span className="period">/ quarter year</span></h6>
                <ul className="fa-ul text-left mt-2">
                  <li><span className="fa-li"><i className="fas fa-star gold-star "></i></span>2TB additional storage</li>
                  <li className='mt-3'><span className="fa-li"><i className="fas fa-star gold-star"></i></span>Up to 1GB file size</li>
                  <li className='mt-3'><span className="fa-li"><i className="fas fa-star gold-star"></i></span>Up to 5 projects</li>
                </ul>
                <button type='button' className="plan-button  mt-auto">Get Plan</button>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card mx-auto custom-card h-100">
              <div className="card-body text-center">
                <h5 className="card-title  text-left"style={{ color: '#4271BA' }}><i className="fas fa-circle" style={{ color: '#4271BA', fontSize: '0.65rem', marginRight: '0.5rem' }}></i>Standard Plan</h5>
                <h6 className="card-price text-left">$9.99 <span className="period">/ half year</span></h6>
                <ul className="fa-ul text-left mt-2">
                  <li><span className="fa-li"><i className="fas fa-star gold-star"></i></span>10TB additional storage</li>
                  <li className='mt-3'><span className="fa-li"><i className="fas fa-star gold-star"></i></span>Unlimited file size</li>
                  <li className='mt-3'><span className="fa-li"><i className="fas fa-star gold-star"></i></span>Up to 10 projects</li>
                </ul>
                <button type='button' className="plan-button  mt-auto">Get Plan</button>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card mx-auto custom-card h-100">
              <div className="card-body text-center">
                <h5 className="card-title  text-left"style={{ color:'#4A00C2' }}><i className="fas fa-circle" style={{ color:'#4A00C2', fontSize: '0.65rem', marginRight: '0.5rem' }}></i>Premium Plan</h5>
                <h6 className="card-price text-left">$19.99 <span className="period">/ one year</span></h6>
                <ul className="fa-ul text-left mt-2">
                  <li className='mt-2'><span className="fa-li"><i className="fas fa-star gold-star"></i></span>Unlimited storage</li>
                  <li className='mt-3'><span className="fa-li"><i className="fas fa-star gold-star"></i></span>Unlimited file size</li>
                  <li className='mt-3'><span className="fa-li"><i className="fas fa-star gold-star"></i></span>Permanent Membership</li>
                </ul>
                <button type='button' className="plan-button  mt-auto">Get Plan</button>              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingPlans;
