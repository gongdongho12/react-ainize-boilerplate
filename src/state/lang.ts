import { atom } from "recoil";

import ko from "locale/ko.json";
import en from "locale/en.json";

export enum Lang {
  KO = 'ko',
  EN = 'en'
}

export const messages: { [key in Lang]: any } = { ko, en };

const langState = atom<Lang>({
  key: 'langState',
  default: Lang.KO
});

export default langState