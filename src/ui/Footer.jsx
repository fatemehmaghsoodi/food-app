import React from "react";
import CountUp from "react-countup";
import { SlClock, SlEnvolope, SlLocationPin } from "react-icons/sl";
import logo from '../assets/images/logo1.svg'
const stat = [
  {
    title: "Happy Customers",
    count: 197950,
  },
  {
    title: "Passionate Chefs",
    count: 10565,
  },
  {
    title: "Favorite Food",
    count: 62500,
  },
  {
    title: "Customers Served",
    count: 30586,
  },
];
const footerList=[
  { items:[
    "Our Services",
    "about",
    "FAQ",
    "Wishlist Products",
    "Blog",
    "Shipment"
  ]},
  { items:[
    "Links",
    "My Cart",
    "Orders",
    "Return Policy",
    "Address",
    "Checkout"
  ]}
  
]

function Footer() {
  return (
    <section>
    <div className="bg-[url('./assets/images/bg-footer1.jpg')] backdrop-blur-lg p-6 mt-10">
        <div data-aos="fade-left" className="w-3/5 max-lg:w-5/6 max-sm:w-2/3 max-sm:px-2 mx-auto flex justify-between max-sm:flex-col bg-secondary-200 p-3 rounded-2xl">
          {stat.map((item, index)=><FooterStats stats={item}  key={index}/>)}
        </div>
        <div className="mt-14 flex max-md:flex-wrap"  >
        <FooterEmaiBox/>
        <FooterLists/>
        </div>
      </div>
    </section>
  );
}

export default Footer;

function FooterLists(){
  return(
    <div className="w-full max-md:w-full max-md:mt-8 text-white flex justify-around items-start ">
    {footerList.map((lists, index) => <LinksList key={index} items={lists.items}/>)}
    <ul data-aos="fade-up" className="space-y-4 hover:[&>*]:text-secondary-200">
      <li className="font-bold">Contact Us</li>
      <li className="flex items-center gap-x-2">
          <SlLocationPin />
          600 N Washington Ave Suite <br />
          C203, Minneapolis
      </li>
      <li className="flex items-center gap-x-2">
          <SlEnvolope />
          needhelp@company.com
      </li>
      <li className="flex items-center gap-x-2">
          <SlClock />
          Open time: 09am - 11pm
      </li>
    </ul>
  </div>
  )
}

function LinksList({items}){
  
  return(
    <ul data-aos="fade-up" className="space-y-3 hover:[&>*]:text-secondary-200">
      {items.map((item, index) => <li key={index} className="first:font-bold">{item}</li>)}
    </ul>
  )
}


function FooterEmaiBox(){
  return(
    
      <div className="w-1/3 max-md:w-full">
      <img src={logo} alt="" className="mx-auto mb-3" />
      <div data-aos="fade-right" className="backdrop-blur-3xl bg-white/10 rounded-md  p-4  ">
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
      </div>
  )
}

function FooterStats({stats}){
  return (
    <div className="w-1/4 sm:border-r last:border-none max-sm:border-b max-sm:w-full p-5  text-white flex flex-col justify-center items-center gap-y-3">
      <span>
        <CountUp
          end={stats.count}
          duration={10}
          className="font-bold text-2xl"
        />
        k+
      </span>
      <span className="text-nowrap">{stats.title} </span>
    </div>
  )}