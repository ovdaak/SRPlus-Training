import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-itemlist-page',
  templateUrl: './itemlist-page.page.html',
  styleUrls: ['./itemlist-page.page.scss'],
})
export class ItemlistPagePage implements OnInit {

  public items = [
    {id: 1, desc: 'Erste Ware', date: '01.01.2020', scanned: true},
    {id: 2, desc: 'Zweite Ware', date: '02.01.2020', scanned: false},
    {id: 3, desc: 'Dritte Ware', date: '03.01.2020', scanned: false},
    {id: 1, desc: 'Erste Ware', date: '01.01.2020', scanned: true},
    {id: 2, desc: 'Zweite Ware', date: '02.01.2020', scanned: false},
    {id: 3, desc: 'Dritte Ware', date: '03.01.2020', scanned: false},
    {id: 1, desc: 'Erste Ware', date: '01.01.2020', scanned: true},
    {id: 2, desc: 'Zweite Ware', date: '02.01.2020', scanned: false},
    {id: 3, desc: 'Dritte Ware', date: '03.01.2020', scanned: false}
  ];

  constructor() { }

  ngOnInit() {
  }

}
