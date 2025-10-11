import { Suspense } from "react";
import { LoadingPages } from "../LoadingPages/LoadingPages";
import AppDatas from "../../Components/AppDatas/AppDatas";


export default function Apps() {

  const itemsPromise = fetch('appdata.json').then(res => res.json())

  return (

      <div  className="w-full h-full">
        <Suspense fallback={<LoadingPages></LoadingPages>}>
          <AppDatas itemsPromise={itemsPromise}></AppDatas>
        </Suspense>
      </div>

  );
}