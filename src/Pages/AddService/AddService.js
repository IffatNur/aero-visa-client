import React from 'react';
import { successful } from '../../components/Header/Header';
import useTitle from '../../layout/useTitle';

const AddService = () => {
  useTitle('Add - Service')
    const handleSubmit = (event) =>{
        event.preventDefault();
        const form = event.target;
        const title = form.title.value;
        const description = form.description.value;
        const img = form.img.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const serviceInfo = {
            title, description, img, price, rating
        };
        console.log(serviceInfo);

        fetch("http://localhost:5000/services", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(serviceInfo),
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.acknowledged > 0){
                successful();
                form.reset();
            }
        });
    }
    return (
      <div>
        {/* <Title title="AddService"></Title> */}
        <form onSubmit={handleSubmit} className="mx-auto w-1/2 font-semibold">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Please give the service name</span>
            </label>
            <input
              type="text"
              name="title"
              placeholder="Service Name"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control ">
            <label className="label">
              <span className="label-text">Please provide description</span>
            </label>
            <input
              type="text"
              name="description"
              placeholder="Description"
              className="input input-bordered "
              required
            />
          </div>
          <div className="form-control ">
            <label className="label">
              <span className="label-text">Please provide an image</span>
            </label>
            <input
              type="text"
              name="img"
              placeholder="photoURL"
              className="input input-bordered "
              required
            />
          </div>
          <div className="form-control ">
            <label className="label">
              <span className="label-text">Service price</span>
            </label>
            <input
              type="text"
              name="price"
              placeholder="Price"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control ">
            <label className="label">
              <span className="label-text">Service rating</span>
            </label>
            <input
              type="text"
              name="rating"
              placeholder="Rating"
              className="input input-bordered "
              required
            />
          </div>
          <button type="submit" className="btn btn-warning my-5 mx-auto px-14">
            Add Service
          </button>
        </form>
      </div>
    );
};

export default AddService;