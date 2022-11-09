import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthProvider';

const ReviewForm = ({ handleReviewSubmit }) => {
  const {user} = useContext(AuthContext);
  return (
    <div>
      <div className="hero">
        <div className="hero-content flex-col">
          <form
            onSubmit={handleReviewSubmit}
            className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100"
          >
            <div className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  name="email"
                  type="email"
                  placeholder="Email"
                  className="input input-bordered"
                  defaultValue={user?.email}
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Review</span>
                </label>
                <input
                  name="review"
                  type="text"
                  placeholder="Write something"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Rating</span>
                </label>
                <input
                  name="rating"
                  type="number"
                  placeholder="rate"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control mt-6">
                <button type="submit" className="btn btn-primary">
                  Submit Review
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ReviewForm;