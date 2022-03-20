import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-personal-tip',
  templateUrl: './personal-tip.component.html',
  styleUrls: ['./personal-tip.component.scss']
})
export class PersonalTipComponent implements OnInit {
  @Input() factor= '';
  @Input() tip= '';

  constructor() { }

  ngOnInit(): void {
  }

}
