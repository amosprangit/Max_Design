import React from "react";

const home = () => {
  return (
    <>
      <main>
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
        <span className="bg-orange-700 flex justify-center m-5 p-5 rounded-3xl shadow-xl shadow-orange-200">
          <p className="bg-orange-500 p-4 text-center rounded-xl text-5xl font-light text-white">
            Explore the World of Wonderful Designs
          </p>
        </span>

        <section>
          <div className="flex bg-orange-800 m-5 shadow-xl shadow-orange-200">
            <img
              src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aW50ZXJpb3IlMjBkZXNpZ258ZW58MHx8MHx8fDA%3D"
              alt=""
            />
            <p className="m-24 text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
              suscipit earum rerum accusantium placeat esse eaque, eligendi
              laudantium quibusdam tempora soluta. Vero dolore inventore
            </p>
          </div>
          <div className="flex bg-orange-800 m-5 shadow-xl shadow-orange-200">
            <p className="m-24 text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
              suscipit earum rerum accusantium placeat esse eaque, eligendi
              laudantium quibusdam tempora soluta. Vero dolore inventore
            </p>
            <img
              src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aW50ZXJpb3IlMjBkZXNpZ258ZW58MHx8MHx8fDA%3D"
              alt=""
            />
          </div>
          <div className="flex bg-orange-800 m-5 shadow-xl shadow-orange-200">
            <img
              src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aW50ZXJpb3IlMjBkZXNpZ258ZW58MHx8MHx8fDA%3D"
              alt=""
            />
            <p className="m-24 text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
              suscipit earum rerum accusantium placeat esse eaque, eligendi
              laudantium quibusdam tempora soluta. Vero dolore inventore
            </p>
          </div>
          <div className="flex bg-orange-800 m-5 shadow-xl shadow-orange-200">
            <p className="m-24 text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
              suscipit earum rerum accusantium placeat esse eaque, eligendi
              laudantium quibusdam tempora soluta. Vero dolore inventore
            </p>
            <img
              src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aW50ZXJpb3IlMjBkZXNpZ258ZW58MHx8MHx8fDA%3D"
              alt=""
            />
          </div>
        </section>
      </main>
    </>
  );
};

export default home;
