import React from 'react';

const ReviewCard = ({ reviewDetail }) => {
  const { img, email, title, review, rating } = reviewDetail;
  return (
    <div>
      <div className="card card-side bg-base-100 shadow-xl my-5 ">
        <div className="card-body text-start">
          <div className="flex items-center">
            <figure>
              <img className="rounded-full h-14 w-14" src={img} alt="Movie" />
            </figure>
            <small className="font-bold">{email}</small>
          </div>
          <h2 className="card-title ">{title}</h2>
          <p>{review}</p>
          <div className="card-actions justify-end">
            <small>
              Rating: <span className="text-yellow-500">{rating}</span>
            </small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;