import React, { useContext, useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import ReviewForm from '../../components/ReviewForm/ReviewForm';
import ReviewCard from '../../components/ReviewCard/ReviewCard';
import { AuthContext } from '../../contexts/AuthProvider';
import Title from '../../layout/Title';

const ServiceDetails = () => {
    const {_id, img, title, description, price, rating} = useLoaderData();
    const {user} = useContext(AuthContext);
    const [reviews, setReviews] = useState([]);
    useEffect(()=>{
        fetch(
          `http://localhost:5000/reviews/?service_id=${_id}`
        )
        .then(res=> res.json())
        .then(data => setReviews(data));
    },[_id])

    const handleReviewSubmit = (event) => {
      event.preventDefault();
      const form = event.target;
      const email = form.email.value;
      const review = form.review.value;
      const rating = form.rating.value;
      const reviewInfo = {
        email,
        review,
        rating,
        img: user.photoURL,
        title: title,
        service_id: _id
      };
      console.log(reviewInfo);

      fetch('http://localhost:5000/reviews',{
        method: 'POST',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify(reviewInfo)
      })
      .then(res => res.json())
      .then(data => {
        console.log(data)
        if (data.acknowledged >0) {
          const newReviews = [reviewInfo,...reviews];
          setReviews(newReviews);
          form.reset();
        }
      })
    };

    
    return (
      <div className="bg-base-200">
        <Title title="ServiceDetails"></Title>
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
            <img className="rounded-xl w-11/12 my-10" src={img} alt=""></img>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 py-20">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-yellow-600 my-4">
              Give a Review
            </h1>
            {user?.email ? (
              <>
                <ReviewForm
                  handleReviewSubmit={handleReviewSubmit}
                ></ReviewForm>
              </>
            ) : (
              <>
                <p>
                  Please{" "}
                  <Link
                    className="text-red-700 badge badge-primary badge-outline"
                    to="/login"
                  >
                    login
                  </Link>{" "}
                  to give a review
                </p>
              </>
            )}
          </div>
          <div className="text-center">
            <h1 className="text-4xl font-bold text-yellow-600 my-4">Reviews</h1>
            <div className="h-96 carousel rounded-box ">
              <div className="carousel-item h-full w-3/4 mx-auto">
                <div>
                  {reviews.map((review) => (
                    <ReviewCard
                      key={review._id}
                      reviewDetail={review}
                    ></ReviewCard>
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