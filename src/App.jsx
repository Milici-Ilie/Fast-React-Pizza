import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Home from "./ui/Home";
import Error from "./ui/Error"; //💀💀[HANDLING ERRORS]💀💀
import Menu, { loader as menuLoader } from "./features/menu/Menu"; //🔃🔃[LOADER FUNCTION]🔃🔃 here we added the "loader" function from the "Menu" file and we renamed it bcs we will gonna have more "loaders"not just this one ==== go down🔻 and check the "path:"menu"" to see the implementation of the  "loader"
import Cart from "./features/cart/Cart";
import CreateOrder, {
  action as createOrderAction,
} from "./features/order/CreateOrder"; //🎬🎬[ROUTER ACTIONS]🎬🎬 here we connected the action from the "CreateOrder.jsx" file with the "Router" ... also check down 👇 🎬🎬[ROUTER ACTIONS]🎬🎬
import Order, { loader as orderLoader } from "./features/order/Order"; //🔍🔍[SEARCH BAR]🔍🔍 down we added the "loader" also in out code. 🔍🔍[SEARCH BAR]🔍🔍
import AppLayout from "./ui/AppLayout";

const router = createBrowserRouter([
  //here we sent all our "routes" inside of the "AppLayout" becoming the "children" of the "AppLayout" and have full acces to info's from those files
  {
    element: <AppLayout />,
    errorElement: <Error />, //💀💀[HANDLING ERRORS]💀💀 so every time when the user acces some wrong URL, or any crush on the App there will be displayed an error ... ---- however we can also display an exact error for what happened and not only a universal "error" ==== also check "Error.jsx" file 💀💀[HANDLING ERRORS]💀💀

    children: [
      {
        path: "/",
        element: <Home />,
      }, //⛽⛽[ALL ROUTES]⛽⛽ here we created an route object and set it to the "root" path

      {
        path: "/menu",
        element: <Menu />,
        loader: menuLoader, //🔃🔃[LOADER FUNCTION]🔃🔃 implemention of the "loader"//=== now go back to the "Menu.jsx" file and see how to take data's from the API 🔃🔃[LOADER FUNCTION]🔃🔃

        errorElement: <Error />, //💀💀[HANDLING ERRORS]💀💀 we added the "Error" element only here because here is the only place where we are fetching data's from the API 💀💀[HANDLING ERRORS]💀💀
      },

      {
        path: "/cart",
        element: <Cart />,
      },

      {
        path: "/order/new",
        element: <CreateOrder />,
        action: createOrderAction, //🎬🎬[ROUTER ACTIONS]🎬🎬 so whenever there will be a new action the "path" from above "/order/new" than the "action: createOrderAction" will be called, the function "action" from the "CreateOrder.jsx" will be called 🎬🎬[ROUTER ACTIONS]🎬🎬
      },

      {
        path: "/order/:orderId",
        element: <Order />,
        loader: orderLoader,
        errorElement: <Error />, //🔍🔍[SEARCH BAR] Loaders are used to read data🔍🔍
      },
    ],
  },
]); //⛽⛽[ALL ROUTES]⛽⛽ so this is a function where we define all routes and we do that by passing and array of objects where each objects is one route⛽⛽[ALL ROUTES]⛽⛽

function App() {
  return <RouterProvider router={router} />; // ⛽⛽[ALL ROUTES]⛽⛽ this <RouterProvider/> has the roll of connecting all our "routes" with our App, in our case is connect the variable "router" with our App, above 👆 we can see the variable that contains all the "routes"⛽⛽[ALL ROUTES]⛽⛽
}

export default App;
