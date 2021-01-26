import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Rock Paper Scissors Follow Along';
  login:boolean = false;

  IWannaLogIn():void{
    this.login = true;
    console.log('IWannaLogIn works');
  }
}


