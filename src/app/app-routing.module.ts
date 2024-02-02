import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListLettersComponent } from './list-letters/list-letters.component';
import { NewLetterComponent } from './new-letter/new-letter.component';

const routes: Routes = [
  { path: '', component: ListLettersComponent },
  { path: 'nouvelle-lettre', component: NewLetterComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
