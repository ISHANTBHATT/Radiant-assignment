import React,{useState} from "react";
import Card from "./Card";
import HorizontalCard from "./HorizontalCard";
import TopContainer  from "./topContainer";
import {data} from "./data"
export default function HomePage() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="w-[1072px]">
      <TopContainer />
      
      <div> 
      {data.map((item)=>(
        <HorizontalCard id={item.id} title={item.title} description={item.description} rating={item.rating} icon={item.icon} tag={item.tag} />
      ))}
      </div>
      
      <div className="flex flex-wrap p-6 justify-center">
        <Card />
        <Card />
        <Card />
      </div>

      <div className="lg:flex lg:justify-between lg:p-10 items-center p-4">
      <h2 className="text-2xl text-textColor ">Sign up and get exclusive special deals</h2>
      <form onSubmit={handleSubmit} className="flex">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          className="flex-grow border border-gray-300 p-2 rounded-l-xl"
        />
        <button type="submit" className="bg-blue-500 text-white p-2 rounded-r-xl">
          Sign Up
        </button>
      </form>
    </div>
    
    </div>
    
  );
}
