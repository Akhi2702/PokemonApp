import { Component, OnInit } from '@angular/core';
import { PokeserviceService } from '../pokeservice.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  i:any;
  name : any ;
  pokemons:any[]=[];
  pokemonBackup : any[] = [];
  teamName : string ="";
  userDetails : any;
  details:any =[];

  constructor(private service:PokeserviceService) { }

  ngOnInit(): void {
    this.service.getTeamsList().subscribe((res : any) =>{
      this.details = res?res:[];
      console.log("res");
    })
this.userDetails = this.service.getUserDetails();
    this.service.getPokemons().
    subscribe((response:any)=>{
      response.results.forEach((result:any)=>{
        this.service.getMorePokemons(result.name).
        subscribe((uniqueResponse:any)=>{
          this.pokemons.push(uniqueResponse);
          this.pokemonBackup.push(uniqueResponse);
          console.log(this.pokemons);
        });
      });
    });
  }
  addtoteam(pokemon : any){
    if(this.details && this.details.length<12 ){
    this.details=this.details+1;
    
    var obj ={
      idd : pokemon.id,
      poke_name : pokemon.name,
      poke_img :pokemon.sprites.front_default,
      poke_xp : pokemon.stats[0].base_stat,
      id : this.userDetails.id
    }

   this.service.addToTeams(obj).subscribe((res : any) =>{
     alert("added successfully");
     this.service.LeadershipDetails(this.userDetails.id,obj.poke_xp).subscribe(
       (res:any)=>{
       }
     )
   })
	
  }
  else if(this.details && this.details.length>=12){
    alert("cannot add more pokemons");
  }
  }
  
  displayStyle = "none";
  
  openPopup() {
    this.displayStyle = "block";
  }
  closePopup() {
    this.displayStyle = "none";
  }
  SearchPokemon(e : string){
    this.pokemons = this.pokemonBackup.filter((pokemon : any) => pokemon.name.includes(e));
  }


}

