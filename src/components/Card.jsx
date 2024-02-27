import React from "react";

const Card = () => {
  return (
    <div class="max-w-xs m-2 bg-white border border-gray-200 rounded-lg shadow-lg">
      <div className="flex justify-center">
        <a href="#" className="w-1/2 h-1/2 m-4">
          <img
            class="rounded-t-lg "
            src="https://s3-alpha-sig.figma.com/img/3250/2fc6/187db358671328189d3da83955a6ffe9?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GU5CqnDRz1vchnccA0FWaFJjfQlaWnX-gUBJZ-UqVEndvqHgX4S1gWNKpSlqsHu4ABfWAQjHlHSVkX2pakVNYExpKn07cG9h9K8Jp8V~yoGjZoZFSZ7FdvIMmD~I4At6jpL2WBb8tNTtpAFOStSh1CyfJ5Kqz27R7sBFP6Rdw-wJAsGvp~X9ssIGWMLLiGiq1fhbimQxL1Ex3URcsZQelaEpVdgfe8rVeIcjbAYufG5yxoW7xsAGpgRMZbwgFF53psUTvrTkHWKveTUNsP2KNPjrONbLe4o6KBckDRpkbXfJJrcD-jD7DOtQFoaVpqqfZD~cbgImNKBeEjehFv~D4g__"
            alt=""
          />
        </a>
      </div>
      <div class="px-6 pt-4 pb-2">
        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-[#074786] mr-2 mb-2">
          20% Off
        </span>
        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-[#074786] mr-2 mb-2">
          Limited Time
        </span>
      </div>

      <div class="px-5 pb-5">
        <a href="#" className="text-center">
          <h5 class="mb-2 text-xl font-bold tracking-tight text-gray-900">
            Webbuilder 1
          </h5>
        </a>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
          Computer Modern clasic with wix support
        </p>
        <div className="flex items-center mb-4">
          <div className="text-lg font-semibold ml-4 text-black-500">
            $39.96
          </div>
          <div className="text-gray-500 text-xs line-through ml-2 mt-2">
            $49.96
          </div>
          <div className="text-xs text-red-500 font-semibold ml-2 mt-2">
            (20% Off)
          </div>
        </div>
        <button className="w-full bg-blue-500 text-white rounded-lg py-2 px-4 mt-4 hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue">
          View Deal
        </button>
      </div>
    </div>
  );
};

export default Card;
