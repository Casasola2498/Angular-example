import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-factor',
  templateUrl: './factor.component.html',
  styleUrls: ['./factor.component.scss']
})
export class FactorComponent implements OnInit {
  @Input() factor = '';
  @Input() bodyText = '';
  @Input() image = '';

  constructor() { }

  ngOnInit(): void {
  }

}
