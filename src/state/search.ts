import { atom } from "recoil";

const searchstate = atom<string>({
  key: 'searchstate',
  default: ""
});

export default searchstate