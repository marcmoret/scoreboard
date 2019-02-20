import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {

 
  private messageService = new BehaviorSubject<string> ('big test');
  currentService = this.messageService.asObservable();

  constructor() { }

  firstClick(message:string){
    this.messageService.next(message)
  }
}
