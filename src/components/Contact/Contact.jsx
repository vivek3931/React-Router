import React from "react";

const Contact = () => {
  return (
    <div className="h-screen flex justify-center items-center  ">
      <form className="flex flex-col p-4 w-[90%] max-w-2xl border-gray-400 border rounded">
        <h1 className="font-bold text-4xl mb-6 ">Contact Form</h1>
        <label htmlFor="email" className="mb-1">
          Name
        </label>
        <input
          type="email"
          name=""
          id=""
          className="py-4 px-3 w-full border rounded mb-3"
          placeholder="Enter your name here "
        />
        <label htmlFor="email" className="mb-1">
          Email
        </label>
        <input
          type="email"
          name=""
          id=""
          className="py-4 px-3 w-full border rounded"
          placeholder="Enter your email here "
        />
        <button
          type="submit"
          className="p-3 rounded bg-orange-600 text-white font-bold mt-6 cursor-pointer transition-colors hover:bg-amber-800"
        >
          Submit Form{" "}
        </button>
      </form>
    </div>
  );
};

export default Contact;
