import React, { useState } from "react";

export default function signIn() {
  const [formdata, setformdata] = useState({});
  const [loading, setloading] = useState(false);

  const handleChange = (e) => {
    setformdata({
      ...formdata,
      [e.target.id]: e.target.value,
    });
  };
  console.log(formdata);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("/routes/signIn", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(formdata),
    });
    const data = await res.json();
    console.log(data);
  };

  return (
    <>
      <section className="flex justify-center signIN">
        <div className="bg-orange-500 text-white w-1/2 mt-28  mb-8 p-6 rounded-lg">
          <h1 className="text-center p-3 mt-2 font-semibold uppercase hover:underline">
            SignIn - To Connect With Us
          </h1>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col space-y-5 mt-8"
          >
            <label htmlFor="name" className="font-semibold">
              First Name
            </label>
            <input
              onChange={handleChange}
              type="text"
              className="rounded-lg p-2 bg-transparent border-2 border-white focus:bg-slate-100 text-white"
              name="name"
              id="name"
              placeholder="Your Name"
              aria-required
            />
            <label htmlFor="name" className="font-semibold">
              Last Name
            </label>
            <input
              onChange={handleChange}
              type="text"
              name="lname"
              id="lname"
              className="rounded-lg text-white p-2 bg-transparent border-2 border-white focus:bg-slate-100"
              placeholder="Your Last Name"
              aria-required
            />
            <label htmlFor="email" className="font-semibold">
              Email Address
            </label>
            <input
              onChange={handleChange}
              type="email"
              name="email"
              id="email"
              className="rounded-lg p-2 bg-transparent border-2 border-white focus:bg-slate-100 text-white"
              placeholder="Enter Your Email Address"
              aria-required
            />
            <label htmlFor="password" className="font-semibold">
              Password
            </label>
            <input
              onChange={handleChange}
              type="password"
              name="password"
              id="password"
              className="rounded-lg p-2 bg-transparent border-2 border-white focus:bg-slate-100 text-white"
              placeholder="Enter Your Password"
              aria-required
            />
            <button
              type="submit"
              disabled={loading}
              className="bg-orange-900 p-2 font-medium rounded-lg hover:bg-orange-950"
            >
              {loading ? "Loading..." : ""}
              Submit Now
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
