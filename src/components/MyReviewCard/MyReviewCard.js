import React from 'react';
import { FaTrash, FaEdit } from "react-icons/fa";
import { Link } from 'react-router-dom';

const MyReviewCard = ({ reviewDetail, handleDelete, }) => {
  const { _id, img, email, title, review, rating } = reviewDetail;

  return (
    <div>
      <div className="card card-side bg-base-100 shadow-xl my-5 h-54">
        <input type="checkbox" id="my-modal-6" className="modal-toggle" />
        <div className="modal modal-bottom sm:modal-middle">
          <div className="modal-box">
            <h3 className="font-bold text-lg">{title}</h3>
            <form >
              <input
                type="text"
                name="review"
                placeholder="Type here"
                className="input input-bordered input-primary w-full max-w-xs"
                defaultValue={review}
              />
              <button type="submit" className="btn btn-primary ml-2">
                Update
              </button>
            </form>
            <div className="modal-action">
              <label htmlFor="my-modal-6" className="btn">
                X
              </label>
            </div>
          </div>
        </div>
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
            {/* The button to open modal */}
            <label htmlFor="my-modal-6" className="btn">
              open modal
            </label>

            {/* Put this part before </body> tag */}

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