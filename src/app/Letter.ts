export interface Letter {
  id?: number;
  senderAd: string;
  date: Date;
  receiverAd: string;
  contactPerson: string;
  subject: string;
  body: string;
  footnot: string;
  adress: string[];

}
export class LetterImpl implements Letter {
  id?: number;
  senderAd: string = '';
  date: Date = new Date();
  receiverAd: string = '';
  contactPerson: string = '';
  subject: string = '';
  body: string = '';
  footnot: string = '';
  adress: string[]= [];

  constructor(letter?: Letter) {
    if (letter) {
      Object.assign(this, letter);
    }  }
  }
