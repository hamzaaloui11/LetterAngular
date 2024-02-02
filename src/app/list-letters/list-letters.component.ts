import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LitterService } from '../litter.service';

@Component({
  selector: 'app-list-letters',
  templateUrl: './list-letters.component.html',
  styleUrls: ['./list-letters.component.css']
})
export class ListLettersComponent implements OnInit{
  constructor(private router: Router,private litterService: LitterService) {}

  litters: any[] = [];
  showDetails: boolean = false;
  selectedLitter: any = {};
  ngOnInit(): void {
    this.loadLitters();
  }

  loadLitters(): void {
    this.litterService.getAllLitters().subscribe(
      (data: any[]) => {
        this.litters = data;

      },
      error => {
        console.error('Error loading litters:', error);
      }
    );
  }

  toggleDetails(litter: any): void {
    this.router.navigate(['/nouvelle-lettre'], { state: { litter: litter } });
  }
  redirectToNewLetter() {
    this.router.navigate(['/nouvelle-lettre']);

                      }
}
