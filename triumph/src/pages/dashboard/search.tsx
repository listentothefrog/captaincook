import { Suspense } from "react";
import SearchComponent from "src/components/DashBoard/Search";
import SpinnerComponent from "src/components/Spinner";

const search = () => {
  return (
    <div>
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
