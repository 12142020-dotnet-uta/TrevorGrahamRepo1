import { Component, Input, OnInit } from '@angular/core';
import { PlayerViewModel } from '../player-view-model';

@Component({
  selector: 'app-player-details',
  templateUrl: './player-details.component.html',
  styleUrls: ['./player-details.component.css']
})
export class PlayerDetailsComponent implements OnInit {

  @Input() playerViewModel:PlayerViewModel

  constructor() { }

  ngOnInit(): void {
  }

}
