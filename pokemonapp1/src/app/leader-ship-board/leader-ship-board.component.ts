import { Component, OnInit } from '@angular/core';
import { PokeserviceService } from '../pokeservice.service';

@Component({
  selector: 'app-leader-ship-board',
  templateUrl: './leader-ship-board.component.html',
  styleUrls: ['./leader-ship-board.component.css']
})
export class LeaderShipBoardComponent implements OnInit {

  userDetails:any;
  details:any;
  totalxpcount:number=0;

  constructor(private service:PokeserviceService) { }

  ngOnInit(): void {
    this.userDetails=this.service.getUserDetails();
    this.service.getUser().subscribe((res : any) =>{
      this.details = res?res:[];
      this.details.sort((a:any,b:any) => b.xpRating - a.xpRating);
    })
  }

}
