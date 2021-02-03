import { Component, OnInit } from '@angular/core';
import { PlayerViewModel } from '../player-view-model';
import { RpsApiServiceService } from '../rps-api-service.service';

@Component({
  selector: 'app-player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.css']
})
export class PlayerListComponent implements OnInit {
  playerList:PlayerViewModel[] = new Array<PlayerViewModel>()
  selectedPlayer:PlayerViewModel;

  constructor(private rpsApiService:RpsApiServiceService) { }

  ngOnInit(): void {
    this.rpsApiService.PlayerList().subscribe(x=>this.playerList = x);
  }
  PlayerDetails(playerId:string):void{
    this.rpsApiService.PlayerDetails(playerId).subscribe(x=>this.selectedPlayer = x);
  }
  //create new property?
  PlayerEdit(playerId:string):void{
    this.rpsApiService.EditPlayer(playerId).subscribe(x=>this.selectedPlayer = x);
  }

}
