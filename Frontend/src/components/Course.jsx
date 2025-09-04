import React from "react";
import list from "../../public/list.json"
import Cards from "./Cards";
import {Link} from "react-router-dom"

function Course() {
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div className="mt-28 justify-center text-center items-center">
          <h1 className="text-2xl md:text-4xl">
            we're delighted to have you{" "}
            <span className="text-pink-500">here! :)</span>
          </h1>
          <p className="mt-12">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, odio
            consequuntur et, doloremque obcaecati autem assumenda voluptates
            unde aut modi veritatis quaerat itaque id. Ipsum corrupti recusandae
            ut veritatis facere aliquam, enim officiis, impedit consequatur
            natus eaque dolorem totam magni esse in. Ad et nesciunt fugiat
            dolorem sunt, voluptatum quos nemo modi.
          </p>
          <Link to="/">
          <button className="mt-6 px-4 py-2 rounded-md cursor-pointer bg-pink-500 text-white hover:bg-pink-700 duration-300">Back</button>
          </Link>
          </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3">
            {
                list.map((item) => (
                    <Cards key={item.id} item={item}/>
                ))
            }
        </div>
      </div>
    </>
  );
}

export default Course;
