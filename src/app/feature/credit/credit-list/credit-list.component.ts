import { Component, OnInit } from '@angular/core';
import { Credit } from 'src/app/model/credit';
import { ActorService } from 'src/app/service/actor.service';
import { CreditService } from 'src/app/service/credit.service';
import { MovieService } from 'src/app/service/movie.service';

@Component({
  selector: 'app-credit-list',
  templateUrl: './credit-list.component.html',
  styleUrls: ['./credit-list.component.css']
})
export class CreditListComponent implements OnInit {
  title: string = 'Credit-List';
  credits?: Credit[] = undefined;

  constructor(private creditSvc: CreditService,
    private actorSvc: ActorService,
    private movieSvc: MovieService
  ) { }

  ngOnInit(): void {
    this.creditSvc.getAllCredits().subscribe({
      next:(resp) => {
        this.credits = resp;
        
      },
      error: (err) =>{
        console.log(err);
      },
      complete: () => {}
    });
    //console.log('List of Credits: ', this.credits);
  }

}
