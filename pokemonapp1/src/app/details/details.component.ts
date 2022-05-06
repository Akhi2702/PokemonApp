import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokeserviceService } from '../pokeservice.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  details:any={};
  des:any={};
  id=this.route.snapshot.params['id'];
  constructor(private service:PokeserviceService,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.service.getDetailsById(this.id).subscribe(
      (data:{})=>{
        console.log(data);
        this.details=data;
      }
    )

    this.service.getDescription(this.id).subscribe(
      (res:{})=>{
        console.log(res);
        this.des=res;
      }
    )
    
  }

}
