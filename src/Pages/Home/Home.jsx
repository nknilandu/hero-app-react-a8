import { useLoaderData } from "react-router";
import Banner from "../../Components/Banner/Banner";
import { Suspense } from "react";
import { HiH1 } from "react-icons/hi2";
import AppDatas from "../../Components/AppDatas/AppDatas";
import { LoadingPages } from "../LoadingPages/LoadingPages";


// loader: ()=>fetch('/appdata.json'),
// loader: ()=>fetch('https://jsonplaceholder.typicode.com/comments'),

export default function Home() {


  const itemsPromise = fetch('appdata.json').then(res => res.json())

  const data = useLoaderData()
  console.log(data)
  return (
    <div>

      <Suspense fallback={<LoadingPages></LoadingPages>}>
        <Banner></Banner>
        <AppDatas itemsPromise={itemsPromise}></AppDatas>
      </Suspense>



    </div>
  );
}