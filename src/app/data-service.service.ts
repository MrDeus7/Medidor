import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class DataServiceService {

  constructor(private socket: Socket) { }

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


}
