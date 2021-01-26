import { Injectable } from '@angular/core';
import{HttpClient,HttpHeaders} from '@angular/common/http'
import{LoginPlayerViewmodel} from './login-player-viewmodel'
import { PlayerViewModel } from './player-view-model';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class RpsApiServiceService {

  httpOptions = {
    headers:new HttpHeaders({
      'Content-Type':'application/json',
    })

  }

  constructor(private http: HttpClient) { }

  LoginPlayer(loginPlayerViewmodel:LoginPlayerViewmodel): Observable<PlayerViewModel>{
    return this.http.post<PlayerViewModel>('https://localhost:44345/Login/LoginPlayer',loginPlayerViewmodel,this.httpOptions)//use http to post the player and get back the playerViewModel
  }
}
