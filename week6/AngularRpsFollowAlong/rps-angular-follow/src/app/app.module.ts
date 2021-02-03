import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginPlayerComponent } from './login-player/login-player.component';
import { PlayerDetailsComponent } from './player-details/player-details.component';
import { PlayerListComponent } from './player-list/player-list.component';
import { RoutingModule } from './routing/routing.module';
import { EditPlayerComponent } from './edit-player/edit-player.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginPlayerComponent,
    PlayerDetailsComponent,
    PlayerListComponent,
    EditPlayerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
