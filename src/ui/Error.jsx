import { useRouteError } from "react-router-dom";
import LinkButton from "./LinkButton";

function Error() {
  const error = useRouteError(); // 💀💀[HANDLING ERRORS]💀💀 yet another HOOK from "react" to make the "errors" work
  console.log(error);

  return (
    <div>
      <h1>Something went wrong 😢</h1>
      <p>{error.data || error.message}</p>
      {/* 💀💀[HANDLING ERRORS]💀💀 */}

      <LinkButton to="-1">&larr; Go back</LinkButton>
    </div>
  );
}

export default Error;
