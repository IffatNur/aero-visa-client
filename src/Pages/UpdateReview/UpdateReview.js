import React from 'react';
import Title from '../../layout/Title';

const UpdateReview = () => {
    return (
      <div>
        <Title title="UpdateReview"></Title>
        <div className="hero min-h-screen bg-base-200">
          <div className="hero-content flex-col ">
            <div className="text-center lg:text-left">
              <h1 className="text-5xl font-bold">Update Review</h1>
            </div>
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
              <div className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="email"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">review</span>
                  </label>
                  <input
                    type="text"
                    name="review"
                    placeholder="review"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">review</span>
                  </label>
                  <input
                    type="text"
                    name="review"
                    placeholder="review"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control mt-6">
                  <button className="btn btn-primary">Login</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default UpdateReview;