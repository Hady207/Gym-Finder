import { useState } from "react";

function useToggle(bool) {
  // call useState
  const [action, setToggle] = useState(bool);

  const toggler = () => {
    setToggle((action) => !action);
  };

  // return piece of state AND a function to toggle it
  return [action, toggler];
}

export default useToggle;
