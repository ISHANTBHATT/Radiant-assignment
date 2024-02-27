import React from 'react'
import { AiOutlineCheckCircle,AiOutlineInfoCircle  } from "react-icons/ai";
import { IoIosArrowDown  } from "react-icons/io";
function topContainer() {
  return (
    <div className="p-4">
  <h2 className="text-2xl lg:text-4xl font-normal mb-2">Best Website Builders in the US</h2>
  <hr className="h-px mt-4 bg-gray-200 border-0"></hr>
  <div className="flex  lg:flex-row lg:justify-between">
    <div className="flex  lg:flex-row p-4 items-center">
      <hr className="h-px mt-4  bg-gray-200 border-0"></hr>
      <AiOutlineCheckCircle className="m-1" />
      <p className="text-textColor lg:ml-2 ">Last Updated - February 22, 2020</p>
      <AiOutlineInfoCircle className="m-1 ml-4 lg:ml-2" />
      <p className="text-textColor ">Advertising Disclosure</p>
    </div>
    <div className="flex  lg:flex-row p-4 mt-4 lg:mt-0">
      <p className="text-textColor">Top Relevant</p>
      <IoIosArrowDown className="m-1 lg:ml-2" />
    </div>
  </div>
  <hr className="h-px mb-4 bg-gray-200 border-0"></hr>
  <div className="flex flex-wrap justify-around text-textColor ">
    <a className="bg-white rounded-xl h-9 my-1 lg:my-0 lg:mx-1 py-2 px-4">Tools</a>
    <a className="bg-white rounded-xl h-9 my-1 lg:my-0 lg:mx-1 py-2 px-4">AWS Builder</a>
    <a className="bg-white rounded-xl h-9 my-1 lg:my-0 lg:mx-1 py-2 px-4">Start Build</a>
    <a className="bg-white rounded-xl h-9 my-1 lg:my-0 lg:mx-1 py-2 px-4">Build Supplies</a>
    <a className="bg-white rounded-xl h-9 my-1 lg:my-0 lg:mx-1 py-2 px-4">Tooling</a>
    <a className="bg-white rounded-xl h-9 my-1 lg:my-0 lg:mx-1 py-2 px-4">BlurHosting</a>
  </div>
</div>

  )
}

export default topContainer