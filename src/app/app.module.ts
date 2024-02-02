import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {HttpClientModule} from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewLetterComponent } from './new-letter/new-letter.component';
import { ListLettersComponent } from './list-letters/list-letters.component';
import { EditDialogComponent } from './edit-dialog/edit-dialog.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { AddAdressDialoggComponent } from './add-adress-dialogg/add-adress-dialogg.component';
import {MatDialogModule} from "@angular/material/dialog";
import {MatIconModule} from "@angular/material/icon";



@NgModule({
  declarations: [
    AppComponent,
    NewLetterComponent,
    ListLettersComponent,
    EditDialogComponent,
    AddAdressDialoggComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSlideToggleModule,
    FormsModule, MatFormFieldModule, MatInputModule, MatButtonModule, HttpClientModule,
    BrowserAnimationsModule, MatDialogModule, MatIconModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
