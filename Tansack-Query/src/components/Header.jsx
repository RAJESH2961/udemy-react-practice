import { useIsFetching } from "@tanstack/react-query";

// useIsFetching
export default function Header({ children }) {
  // fetching is an number 0 if not fetchind data is not fetching anyehre in the applicaiton
  const fetching = useIsFetching();
  return (
    <>
      <div id="main-header-loading">
        {/* // default elemtn in html */}
         {/* showing progress bar when fetching data globally int he header  */}
         {fetching > 0 && <progress /> }
        
      </div>
      <header id="main-header">
        <div id="header-title">
          <h1>React Events</h1>
        </div>
        <nav>{children}</nav>
      </header>
    </>
  );
}
