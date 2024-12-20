import React from "react";
import CountUp from "react-countup";
import { SlClock, SlEnvolope, SlLocationPin } from "react-icons/sl";
const stat = [
  {
    title: "Happy Customers",
    count: 197950,
  },
  {
    title: "Passionate Chefs",
    count: 105,
  },
  {
    title: "Favorite Food",
    count: 305,
  },
  {
    title: "Customers Served",
    count: 625,
  },
];
function Footer() {
  return (
    <div className="bg-[url('./assets/images/bg-footer1.jpg')] backdrop-blur-lg p-6 mt-10">
      <div>
        <div className="w-3/5 max-lg:w-5/6 max-sm:w-2/3 max-sm:px-2 mx-auto flex justify-between max-sm:flex-col bg-secondary-200 p-3 rounded-2xl">
          {stat.map((item, index) => (
            <div key={index} className="w-1/4 sm:border-r last:border-none max-sm:border-b max-sm:w-full p-5  text-white flex flex-col justify-center items-center gap-y-3">
              <span>
                <CountUp
                  end={item.count}
                  duration={10}
                  className="font-bold text-2xl"
                />
                k+
              </span>
              <span className="text-nowrap">{item.title} </span>
            </div>
          ))}
        </div>
        <div className="mt-14 flex max-md:flex-wrap">
          <div className="w-1/3 max-md:w-full p-4 backdrop-blur-3xl bg-white/10 rounded-md ">
            <img src="" alt="" />
            <div>
              <p className="text-white">
                Follow the latest articles and resources, update daily
                promotions
              </p>
              <div className="mt-5 h-12 w-full bg-transparent relative rounded-md">
                <input
                  type="text"
                  className="h-full bg-black w-full rounded-md px-2 outline-none text-white "
                  placeholder="Enter your email"
                />
                <button className="absolute bg-gradient-to-r from-secondary-200 to-secondary-100 px-2 text-white w-fit h-5/6 top-1 right-1 z-10 rounded-md">
                  SUBSCRIBE
                </button>
              </div>
            </div>
          </div>
          <div className="w-full max-md:w-full max-md:mt-8 text-white flex justify-around items-start ">
            <ul className="space-y-3 hover:[&>*]:text-secondary-200">
              <li className="font-bold">Our Services</li>
              <li>about</li>
              <li>FAQ</li>
              <li> Wishlist Products</li>
              <li>Blog</li>
              <li>Shipment</li>
            </ul>
            <ul className="space-y-3 hover:[&>*]:text-secondary-200">
              <li className="font-bold">Links</li>
              <li>My Cart</li>
              <li>Orders</li>
              <li>Return Policy </li>
              <li>Address</li>
              <li>Checkout</li>
            </ul>
            <ul className="space-y-4 hover:[&>*]:text-secondary-200">
              <li className="font-bold">Contact Us</li>
              <li className="flex items-center gap-x-2">
                <span>
                  <SlLocationPin />
                </span>
                <span>
                  600 N Washington Ave Suite <br />
                  C203, Minneapolis{" "}
                </span>
              </li>
              <li className="flex items-center gap-x-2">
                <span>
                  <SlEnvolope />
                </span>
                <span>needhelp@company.com </span>
              </li>
              <li className="flex items-center gap-x-2">
                <span>
                  <SlClock />
                </span>
                <span>Open time: 09am - 11pm </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
