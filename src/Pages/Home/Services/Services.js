import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ServiceCard from '../../ServiceCard/ServiceCard';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(()=>{
        fetch("http://localhost:5000/threeservices")
          .then((res) => res.json())
          .then((error) => setServices(error));
    },[])
    return (
      <div className="text-center mx-10">
        <h1 className="text-4xl font-bold text-yellow-600 my-4">
          The services you will get
        </h1>
        <p className="text-xl text-semibold mb-10">
          Click on view details button to know more about the service
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 mx-auto ">
          {services.map((service) => (
            <ServiceCard key={service._id} service={service}></ServiceCard>
          ))}
        </div>
        <Link to="/services">
          <button className="btn btn-warning px-14 my-8">See All</button>
        </Link>
      </div>
    );
};

export default Services;