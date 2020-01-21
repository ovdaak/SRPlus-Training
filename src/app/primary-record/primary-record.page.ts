import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, EmailValidator, ValidationErrors, FormControl, AbstractControl } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { DateValidator } from '../shared/date-validator';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-primary-record',
  templateUrl: './primary-record.page.html',
  styleUrls: ['./primary-record.page.scss'],
})
export class PrimaryRecordPage implements OnInit {
  readonly TODAY: Date = new Date();
  readonly TODAYSTR = this.datePipe.transform(this.TODAY, 'yyyy-MM-dd');
  minDate: Date = new Date();
  maxDate: Date = new Date();

  recordForm: FormGroup = new FormGroup({});


  model = { email: 'email@gmail.com', order_date: this.TODAYSTR };
  fields: FormlyFieldConfig[] = [{
    key: 'email',
    type: 'input',
    templateOptions: {
      label: 'Email address',
      placeholder: 'Enter email',
      required: true,
    },
    validators: {
      email: {
        expression: (control: AbstractControl) => false,
        message: (error, field: FormlyFieldConfig) => 'Error'
      }
    }
  }, {
    key: 'order_date',
    type: 'datetime',
    templateOptions: {
      label: 'Wareneingangsdatum',
      placeholder: new Date().toISOString(),
      required: true
    },
    validators: {
        order_date: {
        expression: DateValidator.inDateRangeFormly(this.minDate, this.maxDate),
        message: (error, field: FormlyFieldConfig) => 'Bitte gültiges Datum eingeben'
      }
    }
  }];

  constructor(private formBuilder: FormBuilder, private datePipe: DatePipe) {
    this.minDate.setFullYear(this.TODAY.getFullYear() - 1);
    this.minDate.setHours(0, 0, 0, 0);
    this.maxDate.setDate(this.TODAY.getDate() + 1);
    this.maxDate.setHours(0, 0, 0, 0);
  }

  ngOnInit() {
  }

  onSubmit(model: object): void {
  }

  emailValidation(control: FormControl): ValidationErrors {
    return { email: true };
  }
}
