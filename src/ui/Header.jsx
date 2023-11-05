import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";
import UserName from "../features/user/UserName";

function Header() {
  return (
    <header
      className="flex items-center justify-between border-b border-stone-300  bg-yellow-500 px-4 py-3 uppercase sm:px-6 font-pizza
    "
    >
      <Link to="/" className="tracking-widest">
        Fast React Pizza Co.
      </Link>
      {/* 🤕🤕[HEADER CONNECTION]🤕🤕 this <Link/> will make the connection with the home page bcs of "/" the root element that we selected */}

      <SearchOrder />
      {/* 🔍🔍[SEARCH BAR]🔍🔍 */}

      <UserName />
    </header>
  );
}

export default Header;
