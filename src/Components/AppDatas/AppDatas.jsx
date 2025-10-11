import { use, useEffect, useState } from "react";
import { IoSearch } from "react-icons/io5";
import DataItem from "../DataItem/DataItem";


export default function AppDatas({ itemsPromise }) {

    const data = use(itemsPromise)
    const [totalData, setTotalData] = useState(0)

    useEffect(()=> {
        if(data){
            setTotalData(data.length)
        }
    }, [data]);

    return (


        <div className="max-w-7xl mx-auto px-4">
            <div>
                <h2 className="text-[32px] md:text-[48px] font-bold text-[#001931] text-center capitalize mt-12">Our All Applications</h2>
                <p className="text-xl text-[#627281] text-center mb-6">Explore All Apps on the Market developed by us. We code for Millions</p>


                <div className="flex justify-between items-center gap-4 mb-10">
                    <h3 className="text-black font-bold text-lg mb-2">({totalData}) Apps Found</h3>

                    <div className="box-border overflow-hidden flex justify-center items-center gap-2 border border-[#6273826e] w-fit px-2 py-1 rounded-md focus-within:border-[#6f38e6] focus-within:border-2 transition-colors">
                        <IoSearch className="text-[#627382]" />
                        <input type="text" placeholder="Search" className="placeholder-[#627382] focus-within:text-[#6f38e6] text-black outline-none box-border overflow-hidden" />
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full mb-15">
                {
                    data.map(item => <DataItem key={item.id} item={item}></DataItem>)
                    
                }
            </div>

        </div>







    );
}


