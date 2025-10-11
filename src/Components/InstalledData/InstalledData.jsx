
import { FiDownload } from "react-icons/fi";
import { FaStar } from "react-icons/fa";
import {setItemData, getItemData} from "../Utilities/utility"

export default function InstalledData({ item, newArrData, setNewArrData }) {

    const { id, image, title, downloads, ratingAvg, size } = item



    const handleUninstall=()=>{
        const filtered = newArrData.filter(itemData => itemData.id !== id)
        // console.log(filtered)
        setNewArrData(filtered)

        // remove data from localStorage

        const getItemDataDB = getItemData('installed')
        // console.log(getItemDataDB)
        const filteredDBArr = getItemDataDB.filter(itemData => itemData !== String(id))
        // console.log(filteredDBArr)

        localStorage.setItem("installed", JSON.stringify(filteredDBArr))

    }


    
    return (
        <div>

            <div className="bg-white rounded-xl p-3 flex items-center gap-3 mb-3">
                <div className="h-[72px] w-[72px] bg-[#D9D9D9] rounded-xl">
                    <img src={image} alt="appsIcon" className="h-full w-full rounded-xl object-cover" />
                </div>
                <div className="flex flex-col gap-2 w-full">
                    <h3 className="text-black text-xl font-medium">{title}</h3>
                    <div className="flex items-center gap-5">
                        <div className="text-[#00d390] flex items-center gap-2 font-semibold">
                            <FiDownload />
                            <p>{downloads}</p>
                        </div>
                        <div className="text-[#ff8811] flex items-center gap-2 font-semibold">
                            <FaStar />
                            <p>{ratingAvg}</p>
                        </div>
                        <p className="text-[#627382] font-semibold opacity-70">{size}</p>
                    </div>
                </div>
                <button
                    onClick={handleUninstall}
                    className="w-fit h-fit  bg-[#00d390] text-white font-semibold px-4 py-2 rounded capitalize hover:shadow-xl transition">
                    Uninstall

                </button>
            </div>
        </div>
    );
}

