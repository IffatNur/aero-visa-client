import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import ReviewForm from '../../components/ReviewForm/ReviewForm';
import ReviewCard from '../../components/ReviewCard/ReviewCard';

const ServiceDetails = () => {
    const {_id, img, title, description, price, rating} = useLoaderData();
    const [reviews, setReviews] = useState([]);
    useEffect(()=>{
        fetch(
          `http://localhost:5000/reviews/?service_id=${_id}`
        )
        .then(res=> res.json())
        .then(data => setReviews(data));
    },[_id])

    return (
      <div className="bg-base-200">
        <div className="grid grid-cols-1 lg:grid-cols-2 py-20 mx-20">
          <div>
            <h1 className="text-4xl font-bold text-yellow-600 my-4">
              <i>{title}</i>
            </h1>
            <p className="my-5 w-3/4">{description}</p>
            <small className="font-bold">Price: ${price}</small>
            <small className="flex items-center">
              Rating: {rating}
              <div className="text-yellow-400 flex">
                <FaStar></FaStar>
                <FaStar></FaStar>
                <FaStar></FaStar>
                <FaStar></FaStar>
                <FaStarHalfAlt></FaStarHalfAlt>
              </div>
            </small>
          </div>
          <div>
            <img className="rounded-xl" src={img} alt=""></img>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 py-20">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-yellow-600 my-4">
              Give a Review
            </h1>
            <ReviewForm></ReviewForm>
          </div>
          <div className="text-center">
            <h1 className="text-4xl font-bold text-yellow-600 my-4">Reviews</h1>
            <div className="h-96 carousel rounded-box ">
              <div className="carousel-item h-full w-3/4">
                <div>
                  {reviews.map((review) => (
                    <ReviewCard key={_id} reviewDetail={review}></ReviewCard>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default ServiceDetails;