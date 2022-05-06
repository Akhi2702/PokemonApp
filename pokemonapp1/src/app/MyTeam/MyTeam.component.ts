import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokeserviceService } from '../pokeservice.service';

@Component({
  selector: 'app-mtteam',
  templateUrl: './MyTeam.component.html',
  styleUrls: ['./MyTeam.component.css']
})
export class MyTeamComponent implements OnInit {
  details:any=[];
  id=this.route.snapshot.params['id'];
  constructor(private service:PokeserviceService,private route:ActivatedRoute) { }

  ngOnInit(): void {
    // var items = this.service.addedTeam;
    // if(this.id){
    //   var duplicateCheck = items.filter((obj : any) => obj == this.id);
    //   if(!duplicateCheck || !(duplicateCheck.length))
    //       this.service.addedTeam.push(this.id);
    // }
    
    //     items.forEach((obj : any) =>{
    //       this.service.getDetailsById(obj).subscribe(
    //         (data:{})=>{
    //           console.log(data);
    //           this.details.push(data);
    //         }
    //       )
    //     })
    
    this.service.getTeamsList().subscribe((res : any) =>{
      this.details = res;
    })
  }

}
