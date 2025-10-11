import downloadsIcon from '../../assets/icon-downloads.png'
import ratingIcon from '../../assets/icon-ratings.png'

export default function AppData({item}) {

    const {image, title, id, ratingAvg, downloads} = item;

    return (
        <div className="bg-white rounded-lg p-4 shadow-xl hover:shadow-2xl transition-all duration-300">
            <div className="bg-[#d9d9d9] w-full h-[200px] md:h-[316px] rounded-lg mb-4 overflow-hidden">
                <img src={image} alt="product" className='w-full object-cover object-center' />
            </div>
            <div className="space-y-3">
                <h3 className="text-xl font-medium text-[#001931] capitalize"> {title}
                </h3>
                <div className="flex justify-between items-center">
                    <div
                        className="flex items-center gap-2 bg-[#f1f5e8] text-[#00d390] px-3 py-1 rounded text-sm font-medium">
                        <img src={downloadsIcon} alt="Downloads" className="w-4 h-4" />
                        {downloads}
                    </div>
                    <div
                        className="flex items-center gap-2 bg-[#fff0e1] text-[#ff8811] px-3 py-1 rounded text-sm font-medium">
                        <img src={ratingIcon} alt="Rating" className="w-4 h-4" />
                        {ratingAvg}
                    </div>
                </div>
            </div>
        </div>
    );
}






//  {
//     "image": "https://images.unsplash.com/photo-1472289065668-ce650ac443d2?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80",
//     "title": "QuickCook",
//     "companyName": "KitchenMate",
//     "id": 12,
//     "description": "Discover and share easy recipes with video guides and automatic grocery list creation.",
//     "size": 75,
//     "reviews": 91000,
//     "ratingAvg": 4.8,
//     "downloads": 4500000,
//     "ratings": [
//       { "name": "1 star", "count": 1200 },
//       { "name": "2 star", "count": 1900 },
//       { "name": "3 star", "count": 4700 },
//       { "name": "4 star", "count": 16000 },
//       { "name": "5 star", "count": 67200 }
//     ]
//   }