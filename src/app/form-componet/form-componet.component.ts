import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-form-componet',
  templateUrl: './form-componet.component.html',
  styleUrls: ['./form-componet.component.css']
})
export class FormComponetComponent implements OnInit {

  public itemname: String = '';
  @Output() itemEmiter = new EventEmitter<string>();
  constructor() {
    this.itemname = 'Name...';
  }

  ngOnInit() {

  }

  public addItem(item: HTMLInputElement) {
    if (item.value) {
      this.itemEmiter.emit(item.value);
      item.value = '';
    }
  }

}
