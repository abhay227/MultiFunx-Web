import { atom } from "recoil";
const CountValAtom = atom({
    key: 'CountValAtom', // unique ID (with respect to other atoms/selectors)
    default: false, // default value (aka initial value)
  });

  export default CountValAtom;