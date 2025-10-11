import Banner from "../../Components/Banner/Banner";
import { Suspense } from "react";
import { LoadingPages } from "../LoadingPages/LoadingPages";
import HomeDatas from "../../Components/HomeDatas/HomeDatas";


export default function Home() {

  const itemsPromise = fetch('appdata.json').then(res => res.json())
  return (
    <div>
      <Suspense fallback={<LoadingPages></LoadingPages>}>
        <Banner></Banner>
        <HomeDatas itemsPromise={itemsPromise}></HomeDatas>
      </Suspense>
    </div>
  );
}