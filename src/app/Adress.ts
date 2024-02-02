import {Letter} from "./Letter";

export interface Adress {
  id?: number;
  receverAdress?: string;



}
export class adressImpl implements Adress {
  id?: number;
  receverAdress?: string;

  constructor(adress?: Adress) {
    if (adress) {
      Object.assign(this, adress);
    }  }
}

