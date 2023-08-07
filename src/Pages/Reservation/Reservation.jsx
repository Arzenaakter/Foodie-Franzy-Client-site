import React from "react";
import "./Reserve.css";

const Reservation = () => {
  return (
    <div className=" mb-10 px-10 lg:px-0 py-10 ">
      <h2 className="text-center  text-5xl border-b-2 w-72 mx-auto  pb-2 italic text-gray-400">
        {" "}
        Reservation
      </h2>
      <h1 className="text-center font-bold text-3xl mt-6 mb-12">
        Book A Table Now
      </h1>
      <div className=" reserve ">
        <div className="overlay ">
          <form
            action="https://formspree.io/f/mwkdleyq"
            method="POST"
            className="grid grid-cols-1 p-10 gap-10 items-center ">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 font-bold ">
              <input
                type="text"
                name="name"
                placeholder="Your Name "
                className="p-4 bg-black border rounded"
              />
              <input
                type="text"
                placeholder="Your Email"
                name="email"
                className="p-4 bg-black border rounded"
              />
              <input
                type="text"
                placeholder="Phone Number"
                name="phone"
                className="p-4 bg-black border rounded"
              />
              <input
                type="text"
                placeholder="Number of Guest"
                name="guest"
                className="p-4 bg-black border rounded"
              />
            </div>
            <input
              type="text"
              placeholder="Message"
              name="message"
              className="px-4 py-10   bg-black border rounded"
            />
            <button className="btn  text-2xl">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Reservation;
