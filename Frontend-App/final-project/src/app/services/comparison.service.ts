import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ComparisonService {

  private laptops: any[];
  private laptops$: Subject<any[]> = new Subject<any[]>()

constructor() {
  this.laptops = []
  this.laptops$ = new Subject()
}
addLaptops(newLaptop: any) {
    this.laptops.push(newLaptop)
    this.laptops$.next(this.laptops)
}
getLaptops$(): Observable<any[]> {
    return this.laptops$.asObservable()
}
delLaptops(delLaptop: any) {
    const del = this.laptops.findIndex(laptop => laptop._id === delLaptop._id)
    this.laptops.splice(del, 1)
    this.laptops$.next(this.laptops)
}
}
