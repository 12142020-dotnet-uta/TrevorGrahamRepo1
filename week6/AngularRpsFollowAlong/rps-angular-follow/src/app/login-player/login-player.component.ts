import { Component, OnInit, Input } from '@angular/core';
import { LoginPlayerViewmodel } from '../login-player-viewmodel';
import { PlayerViewModel } from '../player-view-model';
import { RpsApiServiceService } from '../rps-api-service.service';

@Component({
  selector: 'app-login-player',
  templateUrl: './login-player.component.html',
  styleUrls: ['./login-player.component.css']
})
export class LoginPlayerComponent implements OnInit {
  loginPlayerViewmodel: LoginPlayerViewmodel=new LoginPlayerViewmodel();
  playerViewModel:PlayerViewModel;

  @Input() login1:boolean = false;
  //used mostly for DI
  constructor(private rpsApiService:RpsApiServiceService) { }

  //used to initialize the component and its variables,lists,observables,etc.
  //Best Practice is to do this here, NOT in the constructor.
  ngOnInit(): void {

  }
  OnSubmit():void{
    this.rpsApiService.LoginPlayer(this.loginPlayerViewmodel).subscribe(x=>this.playerViewModel = x);
    console.log("here after the call to the service");
  }

}
