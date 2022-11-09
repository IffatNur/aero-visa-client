import React, { useContext, useEffect, useState } from 'react';
import MyReviewCard from '../../components/MyReviewCard/MyReviewCard';
import ReviewCard from '../../components/ReviewCard/ReviewCard';
import { AuthContext } from '../../contexts/AuthProvider';

const MyReview = () => {
    const [myreview, setMyreview] = useState([]);
    const {user} = useContext(AuthContext);
    useEffect(() => {
      fetch(`http://localhost:5000/reviews/?email=${user?.email}`)
        .then((res) => res.json())
        .then((data) => setMyreview(data));
    }, [user?.email]);

    const handleDelete = (id) => {
      const proceed = window.confirm(
        "Are you sure you want to remove the review?"
      );
      if (proceed) {
        fetch(`http://localhost:5000/reviews/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if(data.deletedCount){
                const remaining = myreview.filter(review => review._id !== id);
                setMyreview(remaining);
            }
        });
      }
    };
    return (
      <div className="w-1/2 mx-auto">
        {myreview.map((review) => (
          <MyReviewCard
            key={review._id}
            reviewDetail={review}
            handleDelete={handleDelete}
          ></MyReviewCard>
        ))}
      </div>
    );
};

export default MyReview;