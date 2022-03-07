import React from "react";
import {
  Behance,
  Dribbble,
  Envelope,
  Facebook,
  GeoAlt,
  Google,
  Instagram,
  Telephone,
  Twitter,
} from "react-bootstrap-icons";

const Contact = () => {
  return (
    <div>
      <div className="py-12 bg-gradient-to-r from-red-600 to-red-300 text-white text-center">
        <h1 className=" text-4xl tracking-widest">
          XCITE<span className="font-bold ml-3">Contact</span>
        </h1>
      </div>
      <div className="px-10 p-2">
        <h1 className="text-4xl font-bold text-red-600 text-center">
          Find Us On
        </h1>
        <div className="flex flex-col md:flex-row justify-center items-center px-5 py-2">
          <div className="flex justify-center items-center">
            <div className="text-red-600 border-gray-200 rounded-2xl w-28 h-28 flex justify-center items-center text-6xl hover:bg-red-600 hover:text-white ease-in duration-300 mx-2 cursor-pointer shadow-lg">
              <Facebook />
            </div>
            <div className="text-red-600  border-gray-200 rounded-2xl w-28 h-28 flex justify-center items-center text-6xl hover:bg-red-600 hover:text-white ease-in duration-300 mx-2 cursor-pointer shadow-lg">
              <Twitter />
            </div>
            <div className="text-red-600  border-gray-200 rounded-2xl w-28 h-28 flex justify-center items-center text-6xl hover:bg-red-600 hover:text-white ease-in duration-300  mx-2 cursor-pointer shadow-lg">
              <Google />
            </div>
          </div>
          <div className="flex justify-center items-center my-5">
            <div className="text-red-600  border-gray-200 rounded-2xl w-28 h-28 flex justify-center items-center text-6xl hover:bg-red-600 hover:text-white ease-in duration-300  mx-2 cursor-pointer shadow-lg">
              <Behance />
            </div>
            <div className="text-red-600  border-gray-200 rounded-2xl w-28 h-28 flex justify-center items-center text-6xl hover:bg-red-600 hover:text-white ease-in duration-300  mx-2 cursor-pointer shadow-lg">
              <Instagram />
            </div>
            <div className="text-red-600  border-gray-200 rounded-2xl w-28 h-28 flex justify-center items-center text-6xl hover:bg-red-600 hover:text-white ease-in duration-300  mx-2 cursor-pointer shadow-lg">
              <Dribbble />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-100 p-5">
        <h1 className="text-4xl font-bold text-gray-600 text-center">
          Get In Touch
        </h1>
        <div className="grid grid-cols-12 my-5 md:px-14">
          <div className="col-span-12 md:col-span-6 bg-white text-center p-5">
            <h6 className="text-xl text-red-600 font-bold my-2 border-b-2 border-red-600 w-fit block mx-auto">
              Send Message
            </h6>
            <form action="#">
              <input
                placeholder="Your Name"
                className="w-full border-b border-gray-300 outline-0 py-3 placeholder:text-red-600 text-red-600"
                type="text"
              />
              <input
                placeholder="Your Email"
                className="w-full border-b border-gray-300 outline-0 py-3 placeholder:text-red-600 text-red-600"
                type="email"
              />
              <input
                placeholder="Your Number"
                className="w-full border-b border-gray-300 outline-0 py-3 placeholder:text-red-600 text-red-600"
                type="number"
              />

              <textarea
                placeholder="Your Message"
                className="w-full border-b border-gray-300 outline-0 py-3 placeholder:text-red-600 text-red-600"
                rows="5"
              ></textarea>
              <button className="bg-gradient-to-r from-red-700 to-red-400 p-2 rounded-lg text-md font-medium text-white mt-5">
                Send Message
              </button>
            </form>
          </div>
          <div className="bg-gradient-to-r from-red-700 to-red-400 col-span-12 md:col-span-6 p-5 text-white">
            <h6 className="text-xl  font-bold my-2 text-center block w-fit mx-auto mb-2 border-b-2 border-white">
              Find Out More
            </h6>
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod tincidunt ut laoreet ipsum dolor sit amet,
              consectetuer adipiscing elit.
            </p>
            <div className="flex items-center mt-5">
              <div className="border-4 p-2 border-white text-3xl mr-3">
                <GeoAlt />
              </div>
              <div className="text-gray-200">
                <h3>
                  Primary:
                  <span className="font-bold ml-2 text-white">
                    Last Vegas, 120 Graphic Street, US
                  </span>
                </h3>
                <h3>
                  Second:
                  <span className="font-bold ml-2 text-white">
                    Califorinia, 88 Design Street, US
                  </span>
                </h3>
              </div>
            </div>
            <div className="flex items-center mt-5">
              <div className="border-4 p-2 border-white text-3xl mr-3">
                <Telephone />
              </div>
              <div className="text-gray-200">
                <h3>
                  Primary:
                  <span className="font-bold ml-2 text-white">
                    (100) 3434 55666
                  </span>
                </h3>
                <h3>
                  Second:
                  <span className="font-bold ml-2 text-white">
                    (20) 323 434 1323
                  </span>
                </h3>
              </div>
            </div>
            <div className="flex items-center mt-5">
              <div className="border-4 p-2 border-white text-3xl mr-3">
                <Envelope />
              </div>
              <div className="text-gray-200">
                <h3>
                  Primary:
                  <span className="font-bold ml-2 text-white">
                    info@xciteedu.com
                  </span>
                </h3>
                <h3>
                  Second:
                  <span className="font-bold ml-2 text-white">
                    mail@mail.com
                  </span>
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
