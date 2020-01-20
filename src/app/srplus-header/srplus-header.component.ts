import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-srplus-header',
  templateUrl: './srplus-header.component.html',
  styleUrls: ['./srplus-header.component.scss'],
})
export class SrplusHeaderComponent implements OnInit {

  @Input() title: string;

  constructor() { }

  ngOnInit() {}

}
