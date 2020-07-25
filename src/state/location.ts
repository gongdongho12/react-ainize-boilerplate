import { atom } from "recoil";

const locationState = atom<any>({
  key: 'locationState',
  default: {}
});

export default locationState