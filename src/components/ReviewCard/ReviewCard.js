import React from 'react';
import { FaArrowDown } from 'react-icons/fa';

const ReviewCard = ({ reviewDetail }) => {
  const { img, email, title, review, rating } = reviewDetail;
  return (
    <div>
      <div className="card card-side bg-base-100 shadow-xl my-5 ">
        <div className="card-body text-start">
          <div className="flex items-center">
            <figure>
              <img className="rounded-full h-14 w-14 mr-5" src={img} alt="" />
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
          <div className='mx-auto text-gray-400'>
            <FaArrowDown></FaArrowDown>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;