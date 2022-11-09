import React from 'react';

const ReviewForm = () => {
    return (
      <div>
        <div className="hero ">
          <div className="hero-content flex-col ">
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
              <div className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Your Email</span>
                  </label>
                  <input
                    name="email"
                    type="email"
                    placeholder="email"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Give a Feedback</span>
                  </label>
                  <textarea
                    name="review"
                    className="textarea textarea-bordered"
                    placeholder="Write Something"
                  ></textarea>
                </div>
                <div className="form-control mt-6">
                  <button type="submit" className="btn btn-primary">
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default ReviewForm;