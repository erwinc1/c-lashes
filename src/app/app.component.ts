import { Component } from '@angular/core';

export interface Transaction {
  item: string;
  cost: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class PriceList {
  displayedColumns: string[] = ['item', 'cost'];
  transactions: Transaction[] = [
    { item: 'Wimpers', cost: 45 },
    { item: 'Wimpers Extra', cost: 50 },
    { item: 'Wimpers Super', cost: 55 },
    { item: 'Wimpers Super Deluxe', cost: 60 },
    { item: 'Wimpers Ultra', cost: 65 },
    { item: 'Wimpers Ultra Deluxe', cost: 70 },
  ];
}
