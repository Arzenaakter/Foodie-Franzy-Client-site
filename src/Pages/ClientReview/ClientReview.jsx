import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./ClientReview.css";
import { Autoplay, Pagination, Navigation } from "swiper";

const ClientReview = () => {
  return (
    <div className="my-20  pb-10 ">
      <h2 className="text-3xl font-bold text-center border-b-2 w-72 mx-auto pt-10 pb-2  mb-10">
        What Client Say ?
      </h2>
      <div className="h-80 ">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper">
          <SwiperSlide>
            <div
              className="hero lg:min-h-screen sm:min-h-16 lg:w-full sm:w-60 "
              style={{
                backgroundImage: `url("https://img.freepik.com/free-photo/exploding-burger-with-vegetables-melted-cheese-black-background-generative-ai_157027-1734.jpg?size=626&ext=jpg&ga=GA1.2.1435761111.1680237800&semt=sph")`,
              }}>
              <div className="hero-overlay bg-opacity-60"></div>
              <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                  
                  <div className="avatar">
                    <div className="w-24 rounded-full">
                      <img src="https://img.freepik.com/free-photo/young-beautiful-woman-pink-warm-sweater-natural-look-smiling-portrait-isolated-long-hair_285396-896.jpg?size=626&ext=jpg&ga=GA1.2.1435761111.1680237800&semt=sph" />
                    </div>
                  </div>

                  <p className="mb-5 italic ">
                  Foodie Franzy has quickly become my go-to spot for a night out with friends. The menu has so many delicious options, and the cocktails are top-notch. Plus, the staff are always so accommodating and friendly - it's a truly wonderful experience every time
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className="hero lg:min-h-screen sm:min-h-16 lg:w-full sm:w-60"
              style={{
                backgroundImage: `url("https://img.freepik.com/premium-photo/doner-kebab-shawarma-with-ingredients-floating-air-beef-meat-lettuce-onion-tomatos-spice_120795-742.jpg?size=626&ext=jpg&ga=GA1.2.1435761111.1680237800&semt=sph")`,
              }}>
              <div className="hero-overlay bg-opacity-60"></div>
              <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                <div className="avatar">
                    <div className="w-24 rounded-full">
                      <img src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?size=626&ext=jpg&ga=GA1.2.1435761111.1680237800&semt=sph" />
                    </div>
                  </div>
                  <p className="mb-5 italic">
                    Foodie Franzy is hands down one of the best restaurants in
                    town. The food is delicious, the staff are friendly and
                    helpful, and the atmosphere is cozy and welcoming. I love
                    coming here with friends or family for a special occasion,
                    or even just for a casual dinner. Highly recommended!
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className="hero lg:min-h-screen sm:min-h-16 lg:w-full sm:w-60"
              style={{
                backgroundImage: `url("https://img.freepik.com/free-photo/vegetables-set-left-black-slate_1220-685.jpg?size=626&ext=jpg&ga=GA1.2.1435761111.1680237800&semt=sph")`,
              }}>
              <div className="hero-overlay bg-opacity-60"></div>
              <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                <div className="avatar">
                    <div className="w-24 rounded-full">
                      <img src="https://img.freepik.com/free-photo/portrait-happy-woman_186202-621.jpg?size=626&ext=jpg&ga=GA1.2.1435761111.1680237800&semt=sph" />
                    </div>
                  </div>
                  <p className="mb-5 italic">
                    Foodie Franzy is my favorite restaurant in town. The food is
                    always fresh and delicious, and the service is top-notch. I
                    especially love the attention to detail that they put into
                    each dish. You can tell that the chefs really care about the
                    quality of their food
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className="hero lg:min-h-screen sm:min-h-16 lg:w-full sm:w-60"
              style={{
                backgroundImage: `url("https://img.freepik.com/free-photo/vegetables-set-left-black-slate_1220-685.jpg?size=626&ext=jpg&ga=GA1.2.1435761111.1680237800&semt=sph")`,
              }}>
              <div className="hero-overlay bg-opacity-60"></div>
              <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                <div className="avatar">
                    <div className="w-24 rounded-full">
                      <img src="https://img.freepik.com/free-photo/surprised-happy-girl-pointing-left-recommend-product-advertisement-make-okay-gesture_176420-20191.jpg?size=626&ext=jpg&ga=GA1.2.1435761111.1680237800&semt=sph" />
                    </div>
                  </div>
                  <p className="mb-5 italic">
                    I can't say enough good things about Foodie Franzy. The
                    food is absolutely amazing, and the staff are incredibly
                    friendly and attentive. I feel like I'm part of the family
                    every time I visit this restaurant. Highly recommend!
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className="hero lg:min-h-screen sm:min-h-16 lg:w-full sm:w-60"
              style={{
                backgroundImage: `url("https://img.freepik.com/free-photo/vegetables-set-left-black-slate_1220-685.jpg?size=626&ext=jpg&ga=GA1.2.1435761111.1680237800&semt=sph")`,
              }}>
              <div className="hero-overlay bg-opacity-60"></div>
              <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                <div className="avatar">
                    <div className="w-24 rounded-full">
                      <img src="https://img.freepik.com/free-photo/confident-attractive-caucasian-guy-beige-pullon-smiling-broadly-while-standing-against-gray_176420-44508.jpg?size=626&ext=jpg&ga=GA1.1.1435761111.1680237800&semt=sph" />
                    </div>
                  </div>
                  <p className="mb-5 italic">
                    If you're looking for a fantastic dining experience, look no
                    further than Foodie Franzy. The atmosphere is cozy and
                    inviting, and the food is some of the best I've ever had.
                    The staff are incredibly friendly and knowledgeable, and
                    they go out of their way to make sure that every customer
                    has a great experience
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default ClientReview;
