import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { DateValidator } from '../shared/date-validator';
import { Router } from '@angular/router';

@Component({
  selector: 'app-stocktake',
  templateUrl: './stocktake.page.html',
  styleUrls: ['./stocktake.page.scss'],
})
export class StocktakePage implements OnInit {
  readonly PROMPT = 'Lieferschein und Bestellnummer auswählen';
  readonly LABEL_DELIVERY_NOTE = 'LS-Nr.';
  readonly LABEL_ORDER_CODE = 'Bestellnr.';
  readonly LABEL_STOCKTAKE_DATE = 'Wareneingangsdatum';
  readonly TODAY: Date = new Date();

  readonly INVALID_DELIVERY_NOTE = 'Bitte Lieferscheinnummer angeben';
  readonly INVALID_ORDER_CODE = 'Bitte Bestellnummer angeben';
  readonly INVALID_STOCKTAKE_DATE = 'Bitte gültiges Datum angeben';

  minDate: Date = new Date();
  maxDate: Date = new Date();

  stocktakeForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router) {
    this.minDate.setFullYear(this.TODAY.getFullYear() - 1);
    this.minDate.setHours(0, 0, 0, 0);
    this.maxDate.setDate(this.TODAY.getDate() + 1);
    this.maxDate.setHours(0, 0, 0, 0);

    this.stocktakeForm = this.formBuilder.group(
      {
        delivery_note: ['', Validators.required],
        order_code: ['', Validators.required],
        stocktake_date: [this.TODAY.toISOString(), DateValidator.inDateRange(this.minDate, this.maxDate)]
      });

      // console.log(this.stocktakeForm);
      // this.stocktakeForm.valueChanges.subscribe(result => {
      //   console.log(result);
      // });

      // this.stocktakeForm.get('delivery_note').valueChanges.subscribe(result => {
      //   console.log(result);
      // })
  }

  ngOnInit() {
  }

  isValid(formControlName: string) {
    const formControl: AbstractControl = this.stocktakeForm.get(formControlName);
    return formControl.touched && formControl.invalid;
  }

  onSubmit() {
    this.stocktakeForm.markAllAsTouched();

    if (this.stocktakeForm.valid) {
      this.router.navigate(['primary-record']);
    }
  }
}
