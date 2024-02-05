import React from "react";

const footer = () => {
  return (
    <>
      <footer>
        <div className="bg-orange-800 p-0.5">
          <div className="mt-3 mb-3 gird">
            <div className="grid justify-evenly">
              <p className="text-center text-lg text-white">
                Max-Design&copy; All rights are reserved
              </p>
            </div>
            <hr className="w-8/12 ml-56 mt-3 text-center" />
            <a
              href="https://www.instagram.com/_maxdesign_?igsh=MXN4ZzFxZzdubzJ2MA=="
              className="flex text-white mt-3 space-x-2 ml-16"
            >
              <img
                src="https://img.icons8.com/?size=96&id=Xy10Jcu1L2Su&format=png"
                alt="instagram"
                width={30}
              />
              <span>Instagram</span>
            </a>
            <a href="" className="flex text-white space-x-2 ml-16">
              <img
                src="https://img.icons8.com/?size=96&id=xuvGCOXi8Wyg&format=png"
                alt="Linked-in"
                width={30}
              />
              <span>Linked-In</span>
            </a>
            <a
              href="maxdesigngroup444@gmail.com"
              className="flex text-white space-x-2 ml-16"
            >
              <img
                src="https://img.icons8.com/?size=96&id=37246&format=png"
                alt="gmail"
                width={30}
              />
              <span>G-mail</span>
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default footer;
