import { Suspense } from "react";
import SearchComponent from "src/components/DashBoard/Search";
import HeaderComponent from "src/components/Header";
import SpinnerComponent from "src/components/Spinner";

const search = () => {
  return (
    <div>
      <HeaderComponent />
      <Suspense
        fallback={
          <SpinnerComponent
            message={"Crunching on this file, just for you. Hang tight..."}
          />
        }
      >
        <SearchComponent />
      </Suspense>
    </div>
  );
};

export default search;
