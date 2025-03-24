import React from "react";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <div className="py-16 bg-white">
      <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
        <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
          <div className="md:5/12 lg:w-5/12">
            <img src="/public/img/bg3.png" alt="image" className="rounded" />
          </div>
          <div className="md:7/12 lg:w-6/12">
            <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
              React development is carried out by passionate developers
            </h2>
            <p className="mt-6 text-gray-600">
              React development is driven by passionate developers who
              continuously innovate and improve web applications. They focus on
              building scalable, efficient, and user-friendly interfaces using
              modern JavaScript technologies.
            </p>
            <p className="mt-4 text-gray-600">
              Developers leverage React’s component-based architecture to create
              dynamic and responsive user experiences. With a strong community
              and ecosystem, React empowers developers to build everything from
              simple websites to complex enterprise applications. Its
              declarative approach, reusable components, and efficient rendering
              make it a preferred choice for front-end development.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
