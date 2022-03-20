import { Component, OnInit } from '@angular/core';
import { Tip } from '../interfaces/tip';

@Component({
  selector: 'app-tips',
  templateUrl: './tips.component.html',
  styleUrls: ['./tips.component.scss']
})

export class TipsComponent implements OnInit {
  newTip: Tip = {
    factorType: '',
    tip: ''
  };

  tips: Tip[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  saveTip(newTip: Tip): void {
    this.tips.push(newTip);
  }

}
