import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})

export class DataServiceService {

  private apiUrl = 'http://localhost:3000/insert';

  constructor(private socket: Socket, private http: HttpClient) { }

  public insertData(data:any):Observable<any>{
    return this.http.post(this.apiUrl, data);
  }

  public getGeneralValues$(): Observable<any>{
    return new Observable(observer => {
      try{
        this.socket.on('connect', () => {
          console.log('Im connected');
        })

        this.socket.on('pushGeneral', (data:any) => {
          console.log('The data is heree ');
          observer.next(data)
        })

        this.socket.on('disconnect', () => {
          observer.complete()
        })

        this.socket.on('error', (e:any) =>{
          observer.error(e)
        })

        this.socket.on('connect_error', (e:any) => {
          observer.error(e)
        })

      }catch(e){
        observer.error(e);
      }
    })
  }

  public getIndividualValues$(): Observable<any>{
    return new Observable(observer => {
      try{
        this.socket.on('connect', () => {
          console.log('Im connected');
        })

        this.socket.on('pushIndividual', (data:any) => {
          console.log('The data is heree ');
          observer.next(data)
        })

        this.socket.on('disconnect', () => {
          observer.complete()
        })

        this.socket.on('error', (e:any) =>{
          observer.error(e)
        })

        this.socket.on('connect_error', (e:any) => {
          observer.error(e)
        })

      }catch(e){
        observer.error(e);
      }
    })
  }




  public getDailyData$(): Observable<any>{
    return new Observable(observer => {
      try{
        this.socket.on('connect', () => {
          console.log('Im connected');
        })

        this.socket.on('pushDailyData', (data:any[]) => {
          console.log('The data is heree ');
          observer.next(data)
        })

        this.socket.on('disconnect', () => {
          observer.complete()
        })

        this.socket.on('error', (e:any) =>{
          observer.error(e)
        })

        this.socket.on('connect_error', (e:any) => {
          observer.error(e)
        })

      }catch(e){
        observer.error(e);
      }
    })
  }



  public getWeeklyData$(): Observable<any>{
    return new Observable(observer => {
      try{
        this.socket.on('connect', () => {
          console.log('Im connected');
        })

        this.socket.on('pushWeeklyData', (data:any[]) => {
          console.log('The data is heree ');
          observer.next(data)
        })

        this.socket.on('disconnect', () => {
          observer.complete()
        })

        this.socket.on('error', (e:any) =>{
          observer.error(e)
        })

        this.socket.on('connect_error', (e:any) => {
          observer.error(e)
        })

      }catch(e){
        observer.error(e);
      }
    })
  }

  public getMonthlyData$(): Observable<any>{
    return new Observable(observer => {
      try{
        this.socket.on('connect', () => {
          console.log('Im connected');
        })

        this.socket.on('pushMonthlyData', (data:any[]) => {
          console.log('The data is heree ');
          observer.next(data)
        })

        this.socket.on('disconnect', () => {
          observer.complete()
        })

        this.socket.on('error', (e:any) =>{
          observer.error(e)
        })

        this.socket.on('connect_error', (e:any) => {
          observer.error(e)
        })

      }catch(e){
        observer.error(e);
      }
    })
  }


  public getAnnualData$(): Observable<any>{
    return new Observable(observer => {
      try{
        this.socket.on('connect', () => {
          console.log('Im connected');
        })

        this.socket.on('pushAnnualData', (data:any[]) => {
          console.log('The data is heree ');
          observer.next(data)
        })

        this.socket.on('disconnect', () => {
          observer.complete()
        })

        this.socket.on('error', (e:any) =>{
          observer.error(e)
        })

        this.socket.on('connect_error', (e:any) => {
          observer.error(e)
        })

      }catch(e){
        observer.error(e);
      }
    })
  }


  public getPanelData$(): Observable<any>{
    return new Observable(observer => {
      try{
        this.socket.on('connect', () => {
          console.log('Im connected');
        })

        this.socket.on('pushPanelData', (data:any[]) => {
          console.log('The data is heree ');
          observer.next(data)
        })

        this.socket.on('disconnect', () => {
          observer.complete()
        })

        this.socket.on('error', (e:any) =>{
          observer.error(e)
        })

        this.socket.on('connect_error', (e:any) => {
          observer.error(e)
        })

      }catch(e){
        observer.error(e);
      }
    })
  }




  public getDailyDataPanel$(): Observable<any>{
    return new Observable(observer => {
      try{
        this.socket.on('connect', () => {
          console.log('Im connected');
        })

        this.socket.on('pushDailyDataPanel', (data:any[]) => {
          console.log('The data is heree ');
          observer.next(data)
        })

        this.socket.on('disconnect', () => {
          observer.complete()
        })

        this.socket.on('error', (e:any) =>{
          observer.error(e)
        })

        this.socket.on('connect_error', (e:any) => {
          observer.error(e)
        })

      }catch(e){
        observer.error(e);
      }
    })
  }

  public getWeeklyDataPanel$(): Observable<any>{
    return new Observable(observer => {
      try{
        this.socket.on('connect', () => {
          console.log('Im connected');
        })

        this.socket.on('pushWeeklyData', (data:any[]) => {
          console.log('The data is heree ');
          observer.next(data)
        })

        this.socket.on('disconnect', () => {
          observer.complete()
        })

        this.socket.on('error', (e:any) =>{
          observer.error(e)
        })

        this.socket.on('connect_error', (e:any) => {
          observer.error(e)
        })

      }catch(e){
        observer.error(e);
      }
    })
  }

  public getMonthlyDataPanel$(): Observable<any>{
    return new Observable(observer => {
      try{
        this.socket.on('connect', () => {
          console.log('Im connected');
        })

        this.socket.on('pushMonthlyData', (data:any[]) => {
          console.log('The data is heree ');
          observer.next(data)
        })

        this.socket.on('disconnect', () => {
          observer.complete()
        })

        this.socket.on('error', (e:any) =>{
          observer.error(e)
        })

        this.socket.on('connect_error', (e:any) => {
          observer.error(e)
        })

      }catch(e){
        observer.error(e);
      }
    })
  }

  public getAnnualDataPanel$(): Observable<any>{
    return new Observable(observer => {
      try{
        this.socket.on('connect', () => {
          console.log('Im connected');
        })

        this.socket.on('pushAnnualData', (data:any[]) => {
          console.log('The data is heree ');
          observer.next(data)
        })

        this.socket.on('disconnect', () => {
          observer.complete()
        })

        this.socket.on('error', (e:any) =>{
          observer.error(e)
        })

        this.socket.on('connect_error', (e:any) => {
          observer.error(e)
        })

      }catch(e){
        observer.error(e);
      }
    })
  }
}
