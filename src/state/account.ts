import { atom } from "recoil";

const accountState = atom<any>({
  key: 'accountState',
  default: {}
});

export default accountState