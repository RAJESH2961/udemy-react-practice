// import DataFetchingDemo from "./components/DataFetching";
// import ServerActionsDemo from "./components/ServerActionsDemo";
// import { log } from "node:console";
import { Suspense } from "react";
import UsePromiseDemo from "./components/usePromisesDemo";

// import RSCDemo from "./components/RSCDemo";

export default function Home() {
  

  // console.log("Data fetched from db", data);
  
  return (
    <main>
      {/* <RSCDemo/> */}
      {/* <DataFetchingDemo /> */}
      {/* <ServerActionsDemo/> */}
      <Suspense fallback={<p>Loading. data</p>} >
      <UsePromiseDemo/>
      </Suspense>
    </main>
  );
}
