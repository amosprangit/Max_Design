import React from "react";

const about = () => {
  return (
    <>
      <div
        id="carouselExampleSlidesOnly"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="https://plus.unsplash.com/premium_photo-1674480165860-f60bcf6aa2f7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8aW50ZXJpb3IlMjBkZXNpZ258ZW58MHx8MHx8fDA%3D"
              className="d-block w-100 h-96"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGludGVyaW9yJTIwZGVzaWdufGVufDB8fDB8fHww"
              className="d-block w-100 h-96"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://plus.unsplash.com/premium_photo-1674480165860-f60bcf6aa2f7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8aW50ZXJpb3IlMjBkZXNpZ258ZW58MHx8MHx8fDA%3D"
              className="d-block w-100 h-96"
              alt="..."
            />
          </div>
        </div>
      </div>
      <div className="bg-gray-300 mt-10 p-8 mb-28 shadow-lg opacity-95">
        <p className="text-center p-4 font-serif">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni
          possimus, tempora fuga quibusdam beatae enim suscipit! Error totam
          sint necessitatibus ad deleniti dolorum minima illo doloremque!
          Deserunt modi esse non blanditiis nam asperiores necessitatibus saepe,
          vel tempora ipsum placeat, nemo ab sunt laborum aliquid ut reiciendis
          explicabo natus! Provident, delectus.
        </p>
      </div>
    </>
  );
};

export default about;
