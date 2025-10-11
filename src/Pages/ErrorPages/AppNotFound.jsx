import { Link } from 'react-router';
import error404 from '../../assets/App-Error.png'

export default function AppNotFound() {
  return (
    <div className="w-screen h-screen bg-[#f5f5f5] flex flex-col justify-center items-center px-10 gap-6">
      <img src={error404} alt="error 404" />
      <h1 className='font-semibold text-gray-900 text-5xl text-center'>Oops, App not found!</h1>
      <p className='text-lg text-gray-400 text-center'>The App you are requesting is not found on our system.  please try another apps</p>
      <Link to='/apps'
        className="bg-gradient-to-r from-[#632ee3] to-[#9f62f2] text-white font-semibold px-8 py-3 rounded capitalize hover:shadow-xl transition">
        Go Back!
      </Link>


    </div>
  );
}