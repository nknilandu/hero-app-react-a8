import { use } from "react";
import AppData from "../AppData/AppData";
import { Link } from "react-router";


export default function AppDatas({ itemsPromise }) {

    const data = use(itemsPromise)

    const newData = [];
    for (let i = 0; i < 8; i++) {
        newData.push(data[i])

    }


    return (


        <div className="bg-[#f5f5f5] py-12">
            <div className="w-full max-w-[1440px] mx-auto">
                <div id="1:762" className="flex flex-col items-center gap-3 mb-16">
                    <h2 id="1:763" className="text-[32px] md:text-[48px] font-bold text-[#001931] text-center capitalize">
                        Trending Apps
                    </h2>
                    <p id="1:764" className="text-xl text-[#627281] text-center px-5">
                        Explore All Trending Apps on the Market developed by us
                    </p>

                    {/* <!-- Apps Grid --> */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8 mb-12 mx-5 w-full px-4">
                        {
                            newData.map(item => <AppData key={item.id} item={item}></AppData>)
                        }
                    </div>


                    {/* <!-- Show All Button --> */}
                    <div className="flex justify-center">
                        <Link to='/apps'
                            className="bg-gradient-to-r from-[#632ee3] to-[#9f62f2] text-white font-semibold px-8 py-3 rounded capitalize hover:shadow-xl transition">
                            Show All
                        </Link>
                    </div>
                </div>
            </div>
        </div>


    );
}


