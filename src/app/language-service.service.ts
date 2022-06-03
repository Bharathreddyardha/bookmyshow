import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LanguageServiceService {

  public datasub:BehaviorSubject<any>=new BehaviorSubject(0);
  getData():Observable<any>{
    return this.datasub.asObservable();
  }
  setData(value:any){
    this.datasub.next(value);
  }
  constructor() { }
}
