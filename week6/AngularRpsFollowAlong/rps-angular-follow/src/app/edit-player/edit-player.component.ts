import { Component, OnInit } from '@angular/core';
import { PlayerViewModel } from '../player-view-model';
import { RpsApiServiceService } from '../rps-api-service.service';

@Component({
  selector: 'app-edit-player',
  templateUrl: './edit-player.component.html',
  styleUrls: ['./edit-player.component.css']
})
export class EditPlayerComponent implements OnInit {
  selectedPlayer:PlayerViewModel = new PlayerViewModel();

  constructor(private rpsApiService:RpsApiServiceService) { }

  ngOnInit(): void {
  }


  OnSubmit(player:PlayerViewModel):void{

    this.rpsApiService.EditPlayer(player)//.subscribe(x=>this.selectedPlayer = x);
    console.log("here after the call to the service");
  }

}
