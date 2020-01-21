import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-category-search',
  templateUrl: './category-search.page.html',
  styleUrls: ['./category-search.page.scss'],
})

export class CategorySearchPage implements OnInit {
  public currentStep  = 1;
  public selectedItems  = {
    step1: 0,
    step2: 0,
    step3: 0
  };

  constructor(public router: Router) { }

  ngOnInit() {
  }

  gotoPrevStep() {
    if (this.currentStep > 1) {
      this.currentStep --;
    } else {
      this.router.navigateByUrl('/stock-take/step02');
    }
  }

  gotoNextStep() {
    if (this.currentStep < 3) {
      this.currentStep ++;
    } else {
      this.router.navigateByUrl('/stock-take/step02');
    }
  }
}
