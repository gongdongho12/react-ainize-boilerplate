import { atom } from "recoil";

export interface CategoryType {
  id: number,
  title: string
}

const categoryState = atom<CategoryType[]>({
  key: 'categoryState',
  default: []
});

export default categoryState