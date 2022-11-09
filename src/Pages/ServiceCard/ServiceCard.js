import React from 'react';
import { Link } from 'react-router-dom';

const ServiceCard = ({service}) => {
    const {_id, img, title, rating, price, description} = service;
    return (
      <div>
        <div className="card card-compact bg-base-100 shadow-xl w-4/5 h-96 mx-auto">
          <figure>
            <img className='h-72' src={img} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{title}</h2>
            <p className='text-start'>{description.slice(0,100)+'...'}</p>
            <div className='flex justify-between'>
                <small>Price: ${price}</small>
                <small>Rating: {rating}</small>
            </div>
            <Link to={`${_id}`} className="card-actions justify-end">
              <button className="btn btn-primary">View Details</button>
            </Link>
          </div>
        </div>
      </div>
    );
};

export default ServiceCard;