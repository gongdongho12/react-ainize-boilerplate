import { atom } from "recoil";

const tokenState = atom<string>({
  key: 'tokenState',
  default: localStorage.getItem("libi_token") || ""
});

export default tokenState