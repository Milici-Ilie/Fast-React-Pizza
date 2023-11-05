/* eslint-disable */

import { useState } from "react";
import {
  Form,
  redirect,
  useActionData,
  useNavigate,
  useNavigation,
} from "react-router-dom";
import { createOrder } from "../../services/apiRestaurant";
import Button from "../../ui/Button";

// https://uibakery.io/regex-library/phone-number
const isValidPhone = (str) =>
  /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(
    str,
  ); //📞📞[PHONE ERROR]📞📞 this variable is taked from the "URL"above her and has the meaning to see if the number is correct or not, also check at the bottom of the code 👇 📞📞[PHONE ERROR]📞📞

const fakeCart = [
  {
    pizzaId: 12,
    name: "Mediterranean",
    quantity: 2,
    unitPrice: 16,
    totalPrice: 32,
  },
  {
    pizzaId: 6,
    name: "Vegetale",
    quantity: 1,
    unitPrice: 13,
    totalPrice: 13,
  },
  {
    pizzaId: 11,
    name: "Spinach and Mushroom",
    quantity: 1,
    unitPrice: 15,
    totalPrice: 15,
  },
];

function CreateOrder() {
  const navigation = useNavigation(); //⚡⚡[ERRORS &&& BUTTONS]⚡⚡⚡⚡[ERRORS &&& BUTTONS]⚡⚡

  const isSubmitting = navigation.state === "submitting"; //⚡⚡[ERRORS &&& BUTTONS]⚡⚡ go down at the <button/> to check the code ...⚡⚡[ERRORS &&& BUTTONS]⚡⚡

  const formErrors = useActionData(); //⚡⚡[ERRORS &&& BUTTONS]⚡⚡ here we import the "useActionData" from the "react", this will take care of any data's, but we will use it to return "errors" ======= also go and check down 👇 in the "return" inside of <div/> ⚡⚡[ERRORS &&& BUTTONS]⚡⚡

  // const [withPriority, setWithPriority] = useState(false);
  const cart = fakeCart;

  return (
    <div className="px-4 py-6">
      <h2 className="mb-8 text-xl font-semibold">Ready to order? Let's go!</h2>

      {/*🎬🎬[ROUTER ACTIONS]🎬🎬 <Form method="POST" action="/order/new">   === this one is canceled becasue we dont need the "action" in our case because the React Router will simply match the closeste route, but if in another App is neededwe can use "action= ...." */}
      <Form method="POST">
        {/* 🎬🎬[ROUTER ACTIONS]🎬🎬 we must include our contet in side of the <Form/> to take beneffinits of the React functionallity, note that the "Form" need to be imported above!! 🎬🎬[ROUTER ACTIONS]🎬🎬 === the "method" is sett to "POST" to create a new order ... also check at the botton of the file 👇 */}
        <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-center">
          <label className="sm:basis-40">First Name</label>
          <input className="input grow" type="text" name="customer" required />
        </div>
        {/* the "input" is a reusable code, check in the "index.css" file to see how to use reusable codes by implmeneting "@apply" */}

        <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-center">
          <label className="sm:basis-40">Phone number</label>
          <div className="grow">
            <input className="input w-full" type="tel" name="phone" required />
          </div>
          {formErrors?.phone && (
            <p className="mt-2 text-xs bg-red-100 text-red-700 rounded-md p-2">
              {formErrors.phone}
            </p>
          )}
          {/* ⚡⚡[ERRORS &&& BUTTONS]⚡⚡ ... ⚡⚡[ERRORS &&& BUTTONS]⚡⚡ */}
        </div>

        <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-center">
          <label className="sm:basis-40">Address</label>
          <div className="grow">
            <input
              className="input w-full"
              type="text"
              name="address"
              required
            />
          </div>
        </div>

        <div className="mb-12 flex items-center gap-5">
          <input
            className="h-6 w-6 accent-yellow-400 focus:outline-none focus:ring focus:ring-yellow-400 focus:ring-offset-2"
            type="checkbox"
            name="priority"
            id="priority"
            // value={withPriority}
            // onChange={(e) => setWithPriority(e.target.checked)}
          />
          <label htmlFor="priority" className="font-medium">
            Want to yo give your order priority?
          </label>
        </div>

        <div>
          <input type="hidden" name="cart" value={JSON.stringify(cart)} />
          {/* 🎬🎬[ROUTER ACTIONS]🎬🎬 this <input/> field will be invisible, "type="hidden"", but his rolle is to store data's/info's from the real "input field" where the user command pizza, or loggin, etc ... so the info's that will be take from the "type: hidden" will be sent as "strings" thanks to the "value={JSON... etc}" and sent it to the browser with the name of "cart" */}
          <Button disabled={isSubmitting} type="primary">
            {isSubmitting ? "Placing order ..." : "Order now"}
          </Button>
          {/* ⚡⚡[ERRORS &&& BUTTONS]⚡⚡ here we created a ternary operator for our button ⚡⚡[ERRORS &&& BUTTONS]⚡⚡ */}
        </div>
      </Form>
    </div>
  );
}

export async function action({ request }) {
  const formData = await request.formData(); //🎬🎬[ROUTER ACTIONS]🎬🎬this "formData" is provided by default from the browser
  const data = Object.fromEntries(formData); // 🎬🎬[ROUTER ACTIONS]🎬🎬this is how we convert the data and than we can take those data from the "input fields" where the user was included he's info's, in our case: "adress", "name" and "pohone"

  // console.log(data);

  const order = {
    ...data,
    cart: JSON.parse(data.cart),
    priority: data.priority === "on",
  }; //🎬🎬[ROUTER ACTIONS]🎬🎬 here we sett the "priority" button from the App to display "true" of "false" and not only "on" when the user is checking the button to have priority with his hungry pizza monster 🎬🎬[ROUTER ACTIONS]🎬🎬

  // console.log(order);

  const errors = {};
  if (!isValidPhone(order.phone))
    errors.phone =
      "Please give us your correct phone number. We might need it to contact you"; // 📞📞[PHONE ERROR]📞📞 this will check if the user was typed the correct phone number and not some strings, etc📞📞[PHONE ERROR]📞📞

  if (Object.keys(errors).length > 0) return errors; // 📞📞[PHONE ERROR]📞📞if there is some error than we will return immediatly and no newOrder will be created📞📞[PHONE ERROR]📞📞

  const newOrder = await createOrder(order); //🦧🦧[CREATING A NEW ORDER]🦧🦧 this "createOrder" if a function from the "apiRestaurant.js" file...... and the (order) is from the above variable "const order = {...}" 👆 🦧🦧[CREATING A NEW ORDER]🦧🦧

  return redirect(`/order/${newOrder.id}`); //🦧🦧[CREATING A NEW ORDER]🦧🦧here we need the "redirect" from "react", this will check if the action is on "order" and than will include the "${newOrder.id}" depending on the "id" 🦧🦧[CREATING A NEW ORDER]🦧🦧
} //🎬🎬[ROUTER ACTIONS]🎬🎬 so, whenever the <Form/> from above will be submitted than the React will pass in the "request" 👆 that was submitted===== also go and check how to conect with the "App.jsx" file, with the "Route" 🎬🎬[ROUTER ACTIONS]🎬🎬

export default CreateOrder;
