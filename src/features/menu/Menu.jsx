import { useLoaderData } from "react-router-dom";
import { getMenu } from "../../services/apiRestaurant";
import MenuItem from "./MenuItem";

function Menu() {
  const menu = useLoaderData(); //🔃🔃[LOADER FUNCTION]🔃🔃 we dont need to pass any argue to the "useLoaderData" bcs "react" will auttomatically connect it with the API router
  // console.log(menu); //seeing the pizza menu

  return (
    <ul className="divide-y divide-stone-200 px-2">
      {menu.map((pizza) => (
        <MenuItem pizza={pizza} key={pizza.id} />
      ))}
    </ul> //first we must import the <MenuItem/> and than we loop over the "menu" function from above, the result will display all the content from the "MenuItem" file
  );
}

export async function loader() {
  const menu = await getMenu();
  return menu;
} //🔃🔃[LOADER FUNCTION]🔃🔃 CONVENTION, function name = "loader"//////----///// we must export and also async the function, also we must import the functions that we need, in our case is "getMenu", now go and also check the "App.jsx" to see how to connect the "loader" from here with the "route", variable that connect all the App 🔃🔃[LOADER FUNCTION]🔃🔃

export default Menu;
