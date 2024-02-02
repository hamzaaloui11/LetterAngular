import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {LitterService} from "../litter.service";
import {Letter, LetterImpl} from "../Letter";
import {MatDialog, MatDialogRef} from "@angular/material/dialog";
import {AddAdressDialoggComponent} from "../add-adress-dialogg/add-adress-dialogg.component";
import {Adress, adressImpl} from "../Adress";



@Component({
  selector: 'app-new-letter',
  templateUrl: './new-letter.component.html',
  styleUrls: ['./new-letter.component.css'],

})

export class NewLetterComponent implements OnInit {


  litter: Letter= new LetterImpl();
  adressList: { value: string }[] = [];
  adressObj: Adress=new adressImpl();
  prvsMode:boolean=false;
  constructor(private route: ActivatedRoute,private letterService: LitterService,private dialog: MatDialog) {}
  ngOnInit(): void {
    const state = history.state;
    if (state && state.litter) {
      this.litter = state.litter as Letter;
      console.log(state.litter.adress);

      for (var childObj in state.litter.adress as string[] )
      {
        console.log(childObj.valueOf());

      }
      state.litter.adress.forEach((value: any) => {
        console.log(value);
        this.adressList.push({ value: value })

      });
    } else {

    }
  }
  date :string="Date :"
  todayDate(): string {
    const currentDate = new Date();
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'numeric', day: 'numeric' };
    return currentDate.toLocaleDateString('fr-FR', options);
  }

  addLetter(){
    console.log(this.litter);
    this.letterService.addLetters(this.litter).subscribe(
      (idletter) => {
        console.log(' idletter'+idletter);
        this.adressList.forEach((adresss)=>{
          this.adressObj.receverAdress=adresss.value;
          console.log( this.adressObj.receverAdress)
          console.log(adresss)
          this.letterService.addAdresse(this.adressObj).subscribe(
            (idAdress) => {
              console.log(' idAdress'+idAdress);
              this.letterService.addLitterAdress(idletter,idAdress).subscribe(
                (idAdress) => {
                  console.error('yesssss');},
                (error) => {
                  console.error('Error adding adress letter:', error);});},
            (error) => {
              console.error('Error adding adress:', error);
              // Handle error
            }
          );




        })

      },
      (error) => {
        console.error('Error adding letter:', error);
        // Handle error
      }
    );
  }
  openAddAdressDialog() {
    const dialogRef = this.dialog.open(AddAdressDialoggComponent, {
      width: '400px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('Dialog closed with result:', result);
     this.adressList=result;
    });
  }


  saveAdress(adress: Adress) {

    this.letterService.addAdresse(adress).subscribe(
      (response) => {
        console.log('adress added successfully:', response);
        return response
      },
      (error) => {
        console.error('Error adding adress:', error);
        // Handle error
      }
    );
  }
  changePrvsMode(){
    this.prvsMode=!this.prvsMode
  }
}

