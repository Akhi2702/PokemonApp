import { leadingComment } from '@angular/compiler';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsComponent } from './details/details.component';
import { HomeComponent } from './home/home.component';
import { LeaderShipBoardComponent } from './leader-ship-board/leader-ship-board.component';
import { LoginComponent } from './login/login.component';
import { MyTeamComponent } from './MyTeam/MyTeam.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {path:"",component:LoginComponent},
  {path:"home",component:HomeComponent},
  {path:"login",component:LoginComponent},
  {path:"signup",component:SignupComponent},
  {path:"details/:id",component:DetailsComponent},
  {path : "MyTeamComponent",component: MyTeamComponent},
  {path:"leadership",component:LeaderShipBoardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
