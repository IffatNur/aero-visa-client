import React from 'react';
import { FaTrash, FaEdit } from "react-icons/fa";
import { Link } from 'react-router-dom';

const MyReviewCard = ({ reviewDetail, handleDelete }) => {
  const { _id, img, email, title, review, rating } = reviewDetail;
  
  return (
    <div>
      <div className="card card-side bg-base-100 shadow-xl my-5 h-54">
        <div className="card-body text-start">
          <div className="flex items-center">
            <figure>
              <img
                className="rounded-full h-14 w-14 mr-5"
                src={img}
                alt="Movie"
              />
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
          <div className="flex justify-between">
            <button>
              <Link to={`/updatereview/${_id}`}>
                <FaEdit className="text-green-700"></FaEdit>
              </Link>
            </button>
            <button onClick={() => handleDelete(_id)}>
              <FaTrash className="text-red-700"></FaTrash>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyReviewCard;