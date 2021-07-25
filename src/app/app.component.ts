import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { DataService } from './core/data.service';
import {io} from 'socket.io-client';
import { Socket } from './shared/interfaces';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  currentDoc: string;
  private _docSub: Subscription;

  stockQuote: any;
    sub: Subscription;
    columns: number;
    rows: number;
    selectedTicker: string;
    socket: Socket;
  
  constructor(private dataService: DataService) {
    
  }
  ngOnInit() {
    this.dataService.getEventListener().subscribe(documents => {
      console.log(documents);
      this.stockQuote = documents;
  });
    //this.socket = io('http://localhost:8080');
        
    // this.sub = this.dataService.getQuotes()
    //     .subscribe(quote => {
    //         this.stockQuote = quote;
    //         console.log(this.stockQuote);
    //     });
  }
  ngOnDestroy() {
      // this.sub.unsubscribe();
  }
}
