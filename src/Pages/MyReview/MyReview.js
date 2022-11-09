import React, { useContext, useEffect, useState } from 'react';
import MyReviewCard from '../../components/MyReviewCard/MyReviewCard';
import ReviewCard from '../../components/ReviewCard/ReviewCard';
import { AuthContext } from '../../contexts/AuthProvider';
import Title from '../../layout/Title';

const MyReview = () => {
    const [myreview, setMyreview] = useState([]);
    const {user, logOut} = useContext(AuthContext);
    useEffect(() => {
      fetch(`http://localhost:5000/reviews/?email=${user?.email}`,{
        headers:{
          authorization: `Bearer ${localStorage.getItem('aero-token')}`
        }
      })
        .then((res) => {
          if(res.status === 401 || res.status === 403){
            logOut()
            .then(()=>{})
            .catch(error=>console.log(error))
          }
          return res.json()
        })
        .then((data) => setMyreview(data));
    }, [user?.email,logOut]);

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
        <Title title="MyReviews"></Title>
        {myreview.length > 0 ? (
          <>
            {myreview.map((review) => (
              <MyReviewCard
                key={review._id}
                reviewDetail={review}
                handleDelete={handleDelete}
              ></MyReviewCard>
            ))}
          </>
        ) : (
          <>
            <p className="text-2xl text-center">No reviews were added</p>
          </>
        )}
      </div>
    );
};

export default MyReview;