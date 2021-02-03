import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from '../app.component';
import { LoginPlayerComponent } from '../login-player/login-player.component';
import { PlayerListComponent } from '../player-list/player-list.component';
// import { CommonModule } from '@angular/common';


const routes: Routes = [
  {path: 'login', component: LoginPlayerComponent},
  {path: 'playerList', component: PlayerListComponent},
  {path: '**', component: AppComponent},

]



@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class RoutingModule { }
