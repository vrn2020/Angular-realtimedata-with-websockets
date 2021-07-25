// import { Injectable } from '@angular/core';
// import { Observable } from 'rxjs';
// import { Observer } from 'rxjs';
// import { map, catchError } from 'rxjs/operators';
// import {io} from 'socket.io-client';
// import { Socket } from '../shared/interfaces';
import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';

@Injectable({
    providedIn: 'root'
})
export class DataService {
    //documents = this.socket.fromEvent<string[]>('documents');

    constructor(private socket: Socket) { }

    public getEventListener() {
        return this.socket.fromEvent('documents');
    }
  
    // socket: Socket;
    // observer: Observer<any>;

    // getQuotes(): Observable<any> {
    //     this.socket = io('http://localhost:8080');
    //     this.socket.emit('event1', {
    //         msg: 'Client to server, can you hear me server?'
    //     });
    //     // this.socket.on('data', (res) => {
    //     //     this.observer.next(res.data);
    //     // });
    //     return this.createObservable();
    // }

    // createObservable(): Observable<any> {
    //     return new Observable<any>(observer => {
    //         this.observer = observer;
    //     });
    // }

    // private handleError(error) {
    //     console.error('server error:', error);
    //     if (error.error instanceof Error) {
    //         let errMessage = error.error.message;
    //         return Observable.throw(errMessage);
    //     }
    //     return Observable.throw(error || 'Socket.io server error');
    // }

}