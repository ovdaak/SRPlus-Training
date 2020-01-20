import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-primary-record',
  templateUrl: './primary-record.page.html',
  styleUrls: ['./primary-record.page.scss'],
})
export class PrimaryRecordPage implements OnInit {
  stocktakeForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.stocktakeForm = this.formBuilder.group(
      {
        delivery_note: [''],
        order_code: ['']
      });
   }

  ngOnInit() {
  }

  onSubmit(): void {

  }
}
