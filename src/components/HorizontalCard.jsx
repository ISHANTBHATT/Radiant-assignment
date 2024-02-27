import React,{useState} from "react";
import { AiOutlineTrophy } from "react-icons/ai";
import { IoDiamondOutline } from "react-icons/io5";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { IoIosArrowDown ,IoIosArrowUp   } from "react-icons/io";
import Star from './Star'

const Card = ({id, title,description,rating,icon:Icon,tag}) => {
  console.log(Icon);
  const [showMore, setShowMore] = useState(false);
  const toggleShowMore = () => {
    setShowMore(!showMore);
  };
  return (
<div className="flex flex-col items-center m-6">
  <div className="flex flex-col md:flex-row relative bg-white shadow-lg rounded-xl ">
    {Icon && <div className="absolute top-0 left-[78px] -translate-x-2/3 -translate-y-1/2 w-[8rem] h-8 bg-[#FF7724] rounded-r-lg pl-2 pt-2">
      <div className="flex gap-1">
        <Icon className="text-white mt-[1px]" />
        <span className="text-white text-sm">{tag}</span>
      </div>
    </div>}

    <div className="absolute left-[-20px] top-1/4 transform -translate-y-1/2 w-10 h-10 bg-white border border-gray-300 rounded-full flex items-center justify-center">
      <span className="text-black">{id}</span>
    </div>

    <div className="w-full p-4 md:p-10">
      <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src="https://s3-alpha-sig.figma.com/img/3250/2fc6/187db358671328189d3da83955a6ffe9?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GU5CqnDRz1vchnccA0FWaFJjfQlaWnX-gUBJZ-UqVEndvqHgX4S1gWNKpSlqsHu4ABfWAQjHlHSVkX2pakVNYExpKn07cG9h9K8Jp8V~yoGjZoZFSZ7FdvIMmD~I4At6jpL2WBb8tNTtpAFOStSh1CyfJ5Kqz27R7sBFP6Rdw-wJAsGvp~X9ssIGWMLLiGiq1fhbimQxL1Ex3URcsZQelaEpVdgfe8rVeIcjbAYufG5yxoW7xsAGpgRMZbwgFF53psUTvrTkHWKveTUNsP2KNPjrONbLe4o6KBckDRpkbXfJJrcD-jD7DOtQFoaVpqqfZD~cbgImNKBeEjehFv~D4g__" alt="" />
    </div>

    <div className="flex flex-col p-4 md:p-10 leading-normal text-textColor md:text-sm sm:text-xs">
      <h5 className="mb-2 text-lg font-bold tracking-tight">{title}</h5>
      <p className="mb-3 font-normal">{description}</p>
      <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-900">Main highlights</h5>
      <p className="mb-3 font-normal">[What You Get]: Receive the WixPro website builder suite, access to premium design templates, an extensive library of widgets and apps, and detailed step-by-step guides.</p>

      {showMore && (
            <p className="text-gray-600 mt-2">
              Additional features or long text goes here...
            </p>
          )}
          <button
            onClick={toggleShowMore}
            className="text-[#1B88F4] hover:underline focus:outline-none"
          >
            {showMore ? (
                        <div className="flex">
                           Show less <IoIosArrowUp className="mt-[3.8px]" />
                        </div>
                      ) : (
                        <div className="flex">
                          Show more <IoIosArrowDown className="mt-[3.8px]" />
                        </div>
                      )}
          </button>
    </div>

    <div className="px-4 pb-5 flex flex-col justify-between">
      <div className="px-10">
        <div className="top-0 right-0 bg-[#f3f9ff] p-4 rounded-b-xl text-[#074786]">
          <AiOutlineInfoCircle className="float-end mr-6 p-0.5" />
          <small className="flex flex-col text-center m-4">
            <span className="font-medium text-4xl">{rating}</span>
            <span className="font-medium text-lg">Exceptional</span>
            <Star rating={rating} />
          </small>
        </div>
      </div>
      <button className="w-full bg-blue-500 text-white rounded-xl h-12 py-2 px-4 mt-12 hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue">
        View Deal
      </button>

    </div>
  </div>
</div>

  );
};

export default Card;
