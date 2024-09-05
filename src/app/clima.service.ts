import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ClimaService {
  apikey: string = 'cd8ec41771bd7d235c4d4935c5a5328b';
  uri: string = '';

  constructor(private http: HttpClient) {}
  getFromUserSelection() {
    this.uri = `https://api.openweathermap.org/data/2.5/weather?q=cuauhtemoc&appid=${this.apikey}`;
    return this.http.get(this.uri);
  }

  getFromActualPosition(long:string,lat:string){
    this.uri=`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${this.apikey}`;
    return this.http.get(this.uri);
  }

  getLocation():Promise<any>{
    return new Promise((resolve,reject)=>{
      navigator.geolocation.getCurrentPosition(resp=>{
        resolve({lng:resp.coords.longitude,lat:resp.coords.latitude})
      })
    })
  }
}
