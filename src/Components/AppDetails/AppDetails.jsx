import { Link, useLoaderData, useParams } from "react-router";
import downloadIcon from '../../assets/icon-downloads.png'
import ratingIcon from '../../assets/icon-ratings.png'
import reviewIcon from '../../assets/icon-review.png'
import BarChartData from "../BarChart/BarChart";
import { useState, useEffect } from "react";
import { getItemData, setItemData, checkItemData } from '../Utilities/utility';


export default function AppDetails() {




    const { id } = useParams()
    const loaderData = useLoaderData();
    // console.log(id, data)
    const [isInstalled, setIsInstalled] = useState(checkItemData(parseInt(id), 'installed'))


    console.log(checkItemData(parseInt(id), 'installed'))


    const findData = loaderData.find(item => item.id === parseInt(id))
    // console.log(findData.title)

    const { image, title, size, downloads, ratingAvg, reviews, companyName, description } = findData
    const chartData = findData.ratings;
    // console.log(ratingData)



    const handleClick =()=> {
        setItemData('installed', id)
        setIsInstalled(true)
    }





    return (

        <div className="w-full min-h-screen flex justify-center py-10 px-4">
            <div className="w-full max-w-7xl flex flex-col gap-10">

                <div className="flex flex-col md:flex-row gap-10 items-start">

                    <div className="bg-[#d9d9d9] w-fit h-fit rounded-lg mt-1 hover:drop-shadow-xl transition-all">
                        <img
                            src={image}
                            alt="App"
                            className="w-80 h-80 object-cover rounded-lg"
                        />
                    </div>


                    <div className="flex flex-col gap-6 flex-1 w-full">
                        <div>
                            <h1 className="text-4xl font-bold text-gray-900">
                                {title}
                            </h1>
                            <p className="text-gray-400 text-lg mt-2">
                                Developed by <span className="text-[#7740e8] font-semibold">{companyName}</span>
                            </p>
                        </div>
                        <div className="w-full h-[2px] bg-gray-200" />


                        <div className="flex flex-wrap gap-12">
                            <div className="flex flex-col items-start min-w-[100px] gap-2">
                                <img src={downloadIcon} alt="downloads" />
                                <span className="text-gray-700">Downloads</span>
                                <span className="text-4xl font-bold text-gray-900">{downloads}</span>
                            </div>
                            <div className="flex flex-col items-start min-w-[100px] gap-2">
                                <img src={ratingIcon} alt="downloads" />
                                <span className="text-gray-700">Average Ratings</span>
                                <span className="text-4xl font-bold text-gray-900">{ratingAvg}</span>
                            </div>
                            <div className="flex flex-col items-start min-w-[100px] gap-2">
                                <img src={reviewIcon} alt="downloads" />
                                <span className="text-gray-700">Total Reviews</span>
                                <span className="text-4xl font-bold text-gray-900">{reviews}</span>
                            </div>
                        </div>


                        <button to='/apps'
                            className="w-fit bg-[#00d390] text-white font-semibold px-8 py-3 rounded text-xl hover: hover:drop-shadow-xl transition-all"
                            onClick={handleClick}
                            >

                            {
                                isInstalled ? 'Installed' : `Install Now (${size})`
                            }

                        </button>
                    </div>
                </div>

                <div className="w-full h-[2px] bg-gray-200" />

                <div className="flex flex-col gap-4">
                    <h2 className="text-3xl font-semibold text-gray-900">Ratings</h2>

                    <BarChartData chartData={chartData}></BarChartData>

                </div>

                <div className="w-full h-[2px] bg-gray-200" />

                <div className="flex flex-col gap-4">
                    <h2 className="text-3xl font-semibold text-gray-900">Description</h2>
                    <p className="text-gray-700 text-lg leading-relaxed mb-8">
                        {description}
                    </p>
                </div>
            </div>
        </div>
    );
}