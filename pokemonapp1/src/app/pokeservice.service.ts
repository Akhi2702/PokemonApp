import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Characteristic } from './characteristic';
import { Details } from './details';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class PokeserviceService {

  data:any;
  userDetails : any;
  addedTeam : any = [];
  constructor(private http:HttpClient) { }

  public loginUserFromRemote(user:User):Observable<any>{
    return this.http.post<any>("http://localhost:8090/login",user)
  }
  public SignupUserFromRemote(user:User):Observable<any>{
    return this.http.post<any>("http://localhost:8090/registeruser",user)
  }

  getPokemons(){
    return this.http.get(`https://pokeapi.co/api/v2/pokemon?limit=150`);
  }

  getMorePokemons(name : string){
    return this.http.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
  }

  getDetailsById(id:number):Observable<Details>{
    return this.http.get<Details>(`https://pokeapi.co/api/v2/pokemon/${id}`);
  }

  getDescription(id:number):Observable<Characteristic>{
    return this.http.get<Characteristic>(`https://pokeapi.co/api/v2/characteristic/${id}`);
  }

  addToTeams(team : any){
    return this.http.post<any>("http://localhost:8090/teams",team)
}
  setUserDetails(user : any){
    this.userDetails = user;
  }

  getUserDetails(){
    return this.userDetails;
  }

  getTeamsList()
  {
    return this.http.get<any>(`http://localhost:8090/getdetailsofteam/${this.userDetails.id}`);
  }

  LeadershipDetails(user:any,id:any){
    var obj={"id":user,"xpRating":id}
    return this.http.post<any>("http://localhost:8090/update",obj);
  }

  getUser():Observable<any>{
    return this.http.get<any>(`http://localhost:8090/getalluser`);
  }


}