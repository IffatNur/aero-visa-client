import React from 'react';
import { Link } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

const ServiceCard = ({service}) => {
    const {_id, img, title, rating, price, description} = service;
    return (
      <div className="card card-compact bg-base-100 shadow-xl w-4/5 h-96 mx-auto">
        <figure>
          <PhotoProvider>
            <PhotoView src={img}>
              <img className="h-72" src={img} alt="Shoes" />
            </PhotoView>
          </PhotoProvider>
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p className="text-start">{description.slice(0, 100) + "..."}</p>
          <div className="flex justify-between">
            <small>Price: ${price}</small>
            <small>Rating: {rating}</small>
          </div>
          <Link to={`/services/${_id}`} className="card-actions justify-end">
            <button className="btn btn-primary">View Details</button>
          </Link>
        </div>
      </div>
    );
};

export default ServiceCard;