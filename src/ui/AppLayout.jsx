/* eslint-disable */
import Header from "./Header";
import CartOverview from "../features/cart/CartOverview";
import { Outlet, useNavigation } from "react-router-dom";
import Loader from "./Loader";

function AppLayout() {
  const navigation = useNavigation(); //🧭🧭[LOADING INDICATOR/ USENAVIGATION]🧭🧭 this "useNavigation" HOOK will check in the entire App if there exist some loading moment in the App and will apply our "loading" code, very important HOOK/ ofc that this must exist in the pparent function of our App, in our situation is "AppLayout", the current function 🧭🧭[LOADING INDICATOR/ USENAVIGATION]🧭🧭
  // console.log(navigation); // 🧭🧭[LOADING INDICATOR/ USENAVIGATION]🧭🧭 here we will see in our App's when we navigate through the pages that there will appear "idle" and "loading", so we must take this "loading" and create our "loading state" 🧭🧭[LOADING INDICATOR/ USENAVIGATION]🧭🧭

  const isLoading = navigation.state === "loading"; // whenever the "navigation" will be "true" than display the "loading" state

  return (
    <div className="grid h-screen grid-rows-[auto_1fr_auto]">
      {isLoading && <Loader />}

      {/* 🧭🧭[LOADING INDICATOR/ USENAVIGATION]🧭🧭 here we will always show the entire App, but also when there is loading some data there will be displayed the "loading" function 🧭🧭[LOADING INDICATOR/ USENAVIGATION]🧭🧭 */}

      <Header />
      {/* 🤕🤕[HEADER CONNECTION]🤕🤕 */}

      <div className="overflow-scroll">
        <main className="mx-auto max-w-3xl overflow-scroll ">
          <Outlet />
          {/* This is how we connect our files between them, "Outlet" is an imported function from the "React" wich will connect our files and make our App to work, always include the  <Outlet/> in the "parent" route to make this work */}
        </main>
      </div>

      <CartOverview />
    </div>
  );
}

export default AppLayout;
