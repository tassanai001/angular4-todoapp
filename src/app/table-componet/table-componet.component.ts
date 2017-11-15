import { Component, OnInit } from '@angular/core';
import { JSONServiceService } from '../json-service.service';

@Component({
  selector: 'app-table-componet',
  templateUrl: './table-componet.component.html',
  styleUrls: ['./table-componet.component.css']
})
export class TableComponetComponent implements OnInit {

  public listItem = [];
  public listJSON: String;
  constructor(public stargazers: JSONServiceService) {
  }

  ngOnInit() {
    const URL = 'https://jsonplaceholder.typicode.com/users';
    this.stargazers.getJSON(URL).subscribe((val) => {
      this.listJSON = val._body;
    });
  }

  public getListItem(item: string) {
    this.listItem.push(item);
  }

  public edit(newitem: string, olditem: string) {
    this.listItem[this.getIndex(olditem)] = newitem;
    console.log('Update :---> ', this.listItem);
  }

  public remove(item: string) {
    this.listItem.splice(this.getIndex(item), 1);
  }

  public getIndex(item: string) {
    const index = this.listItem.indexOf(item);
    return index;
  }



}
