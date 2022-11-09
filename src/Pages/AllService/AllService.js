import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ServiceCard from '../ServiceCard/ServiceCard';

const AllService = () => {
    const allServices = useLoaderData();
    console.log(allServices.length);
    return (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mx-20 my-10">
        {allServices.map((service) => (
          <ServiceCard key={service._id} service={service}></ServiceCard>
        ))}
      </div>
    );
};

export default AllService;