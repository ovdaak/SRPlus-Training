import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-stocktake',
  templateUrl: './stocktake.page.html',
  styleUrls: ['./stocktake.page.scss'],
})
export class StocktakePage implements OnInit {
  readonly PAGE_TITLE = 'SRPlus-Scan Wareneingang';
  readonly PROMPT = 'Lieferschein und Bestellnummer auswählen';
  readonly LABEL_DELIVERY_NOTE = 'LS-Nr.';
  readonly LABEL_ORDER_CODE = 'Bestellnr.';
  readonly LABEL_STOCKTAKE_DATE = 'Wareneingangsdatum';
  readonly TODAY: Date = new Date();

  readonly INVALID_DELIVERY_NOTE = 'Bitte Lieferscheinnummer angeben';
  readonly INVALID_ORDER_CODE = 'Bitte Bestellnummer angeben';
  readonly INVALID_STOCKTAKE_DATE = 'Bitte Datum angeben';

  minDate: Date = new Date();
  maxDate: Date = new Date();

  stocktakeForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.minDate.setFullYear(this.TODAY.getFullYear() - 1);
    this.maxDate.setDate(this.TODAY.getDate() + 1);

    this.stocktakeForm = this.formBuilder.group(
      {
        delivery_note: ['', Validators.required],
        order_code: ['', Validators.required],
        stocktake_date: [this.TODAY.toISOString()]
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
  }
}
