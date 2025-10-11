import { Suspense, use, useEffect, useState } from "react";
import { IoSearch } from "react-icons/io5";
import DataItem from "../DataItem/DataItem";
import { LoadingPages } from "../../Pages/LoadingPages/LoadingPages";


export default function AppDatas({ itemsPromise }) {

    const data = use(itemsPromise)
    const [totalData, setTotalData] = useState(data.length)
    const [dataArr, setDataArr] = useState(data)
    const [loading, setLoading] = useState(false);


    const searchData = (e) => {

        setLoading(true)

        const searchData = e.target.value.toLowerCase();
        const filteredData = data.filter(item => item.title.toLowerCase().includes(searchData))

        setDataArr(filteredData)
        setTotalData(filteredData.length)

        setTimeout(() => {
            setLoading(false)
        }, 300);
    }


    return (


        <div className="max-w-7xl mx-auto px-4">
            <div>
                <h2 className="text-[32px] md:text-[48px] font-bold text-[#001931] text-center capitalize mt-12">Our All Applications</h2>
                <p className="text-xl text-[#627281] text-center mb-6">Explore All Apps on the Market developed by us. We code for Millions</p>


                <div className="flex justify-between items-center gap-4 mb-10">
                    <h3 className="text-black font-bold text-lg mb-2">({totalData}) Apps Found</h3>

                    <div className="box-border overflow-hidden flex justify-center items-center gap-2 border border-[#6273826e] w-fit px-2 py-1 rounded-md focus-within:border-[#6f38e6] focus-within:border-2 transition-colors">
                        <IoSearch className="text-[#627382]" />
                        <input type="text" onChange={searchData} placeholder="Search" className="placeholder-[#627382] focus-within:text-[#6f38e6] text-black outline-none box-border overflow-hidden" />
                    </div>
                </div>
            </div>

            {
                loading ? (
                    <div className="w-full">
                        <div className="h-[43vh] flex flex-col items-center justify-center gap-5">
                            <span className="loading loading-ring text-[#9f62f2] w-16"></span>
                            <h1 className="text-[20px] leading-tight bg-gradient-to-r from-[#632ee3] to-[#9f62f2] bg-clip-text text-transparent">Loading...</h1>
                        </div>
                    </div>

                ) : totalData === 0 ? (

                    <div className="w-full h-[43vh] flex flex-col items-center justify-center">
                        <p className="text-gray-400 w-fit text-center text-xl font-semibold">No Data Found</p>
                        <p className="text-center text-gray-400">There is no matched data to show right now</p>
                    </div>


                ) : (

                    <div className="min-h-[43vh] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full mb-15">
                        {
                            dataArr.map(item => <DataItem key={item.id} item={item}></DataItem>)
                        }
                    </div>
                )
            }

        </div>







    );
}


