import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'tab-title',
  templateUrl: './tab-title.component.html',
  styleUrls: ['./tab-title.component.css']
})
export class TabTitleComponent implements OnInit {

  @Input() tabData: string = 'untitled'; 

  @Input() active: boolean = false;

  constructor() { 
  }

  ngOnInit() {
  }

}