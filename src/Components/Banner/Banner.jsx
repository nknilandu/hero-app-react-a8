
import appStore from '../../assets/app-store.png'
import playStore from '../../assets/play-store.png'
import hero from '../../assets/hero.png'

export default function Banner() {
  return (
    <div>
      <div className="w-full flex flex-col items-center">
        <div className="w-full max-w-[1440px] flex flex-col items-center gap-10 my-12">
          <div className="flex flex-col items-center text-center">
            <h1
              className="text-[36px] sm:text-[48px] md:text-[60px] lg:text-[72px] font-bold leading-tight text-[#001931e5] mb-4">
              <span>We Build</span><br />
              <span
                className="font-black bg-gradient-to-r from-[#632ee3] to-[#9f62f2] bg-clip-text text-transparent">Productive</span>
              <span> Apps</span>
            </h1>

            <p className="text-lg md:text-xl text-[#627382] max-w-4xl px-4">
              At HERO.IO , we craft innovative apps designed to make everyday life simpler, smarter, and more
              exciting. Our goal is to turn your ideas into digital experiences that truly make an impact.
            </p>
          </div>


          <div className="flex flex-col sm:flex-row gap-4">
            <button
              className="flex items-center gap-3 border border-[#d1d1d1] rounded-md px-5 py-3 bg-[#f5f5f5] hover:shadow-md transition">
              <img src={playStore} alt="Google Play icon" className="w-8 h-8" />
              <span className="text-xl font-semibold text-[#001931] ">Google Play</span>
            </button>

            <button
              className="flex items-center gap-3 border border-[#d1d1d1] rounded-md px-6 py-3 bg-[#f5f5f5] hover:shadow-md transition">
              <img src={appStore} alt="App Store icon" className="w-8 h-8" />
              <span className="text-xl font-semibold text-[#001931]">App Store</span>
            </button>
          </div>
        </div>
        <div className="px-10">
          <img src={hero} alt="banner" />
        </div>
      </div>
      <div className="w-full bg-gradient-to-b from-[#632ee3] to-[#9f62f2] px-6 py-20">
        <div className="w-full max-w-[1440px] mx-auto flex flex-col items-center gap-10">
          <h2 className="text-[32px] md:text-[48px] font-bold text-white text-center capitalize leading-tight">
            Trusted by Millions, Built for You
          </h2>

          <div className="flex flex-col sm:flex-row w-full max-w-4xl px-5">

            <div className="flex-1 flex flex-col items-center justify-start gap-2">
              <p className="text-base text-[#ffffffcc] capitalize text-center">Total Downloads</p>
              <p className="text-[48px] md:text-[64px] font-extrabold text-white">29.6M</p>
              <p className="text-base text-[#ffffffcc] capitalize text-center">21% more than last month</p>
            </div>

            <div id="1_740_695_1196_208_150" className="flex-1 flex flex-col items-center justify-start gap-2">
              <p id="1:749" className="text-base text-[#ffffffcc] capitalize text-center">Total Reviews</p>
              <p id="1:750" className="text-[48px] md:text-[64px] font-extrabold text-white">906K</p>
              <p id="1:751" className="text-base text-[#ffffffcc] capitalize text-center">46% more than last month</p>
            </div>

            <div id="1_740_1086_1198_160_148" className="flex-1 flex flex-col items-center justify-start gap-2">
              <p id="1:753" className="text-base text-[#ffffffcc] capitalize text-center">Active Apps</p>
              <p id="1:754" className="text-[48px] md:text-[64px] font-extrabold text-white">132+</p>
              <p id="1:755" className="text-base text-[#ffffffcc] capitalize text-center">31 more will Launch</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}