import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-step03',
  templateUrl: './step03.page.html',
  styleUrls: ['./step03.page.scss'],
})
export class Step03Page implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {
  }

  finish() {
    if (confirm('Erfassung beenden und Daten übertragen?') ) {
      this.router.navigateByUrl('home');
    }
  }

  addAsset() {
    this.router.navigateByUrl('stock-take/step03');
  }
}
