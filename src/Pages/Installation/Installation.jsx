

import { IoMdArrowDropdown } from "react-icons/io";
import { useLoaderData } from "react-router";
import { getItemData, setItemData, checkItemData } from '../../Components/Utilities/utility';
import InstalledData from "../../Components/InstalledData/InstalledData";
import { useState } from "react";




export default function Installation() {

  const loaderData = useLoaderData()

  const getStoredData = getItemData('installed')

  const newArr = loaderData.filter(item => getStoredData.includes(String(item.id)))

  const [newArrData, setNewArrData] = useState(newArr)


  const handleSort = (data) => {
    if (newArr.length !== 0) {
      if (data === 0) {
        setNewArrData([...newArrData].sort((a, b) => a.downloads - b.downloads))
      } else {
        setNewArrData([...newArrData].sort((a, b) => b.downloads - a.downloads))
      }
    }
  }


  return (
    <div className="max-w-7xl mx-auto px-4">

      <div>
        <h2 className="text-[32px] md:text-[48px] font-bold text-[#001931] text-center capitalize mt-12">Your Installed Apps</h2>
        <p className="text-xl text-[#627281] text-center mb-6">Explore All Trending Apps on the Market developed by us</p>


        <div className="flex justify-between items-center gap-4 mb-3">
          <h3 className="text-black font-bold text-lg mb-2">({newArr.length}) Apps Found</h3>



          <select defaultValue="Sort By Size" className="select max-w-[150px] focus:outline-none bg-[#f5f5f5] border border-[#d2d2d2] text-[#627382] ">
            <option disabled={true}>Sort By Size</option>
            <option onClick={() => { handleSort(0) }}>Low-High</option>
            <option onClick={() => { handleSort(1) }}>High-Low</option>
          </select>

        </div>
      </div>

      <div className="mb-16">

        {
          newArrData.length !== 0 ? newArrData.map(item =>
            <InstalledData key={item.id} item={item} newArrData={newArrData} setNewArrData={setNewArrData} ></InstalledData>
          ) : (
            <div className="w-full h-[43vh] flex flex-col items-center justify-center">
              <p className="text-gray-400 w-fit text-center text-xl font-semibold">No Data Found</p>
              <p className="text-center text-gray-400">There is no matched data to show right now</p>
            </div>
          )

        }

      </div>


    </div>
  );
}

