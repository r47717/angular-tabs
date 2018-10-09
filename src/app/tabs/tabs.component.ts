import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TabData } from './tab-data';

@Component({
  selector: 'tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements OnInit {

  @Input() tabs = [];

  @Input() activeTab: number = -1;

  @Output() onClickTitleEvent = new EventEmitter<TabData>();

  constructor() { }

  ngOnInit() {
  }

  onClickTitle(tab: TabData) {
    this.onClickTitleEvent.emit(tab);
  }

  getActiveContent() {
    if (this.activeTab < 0) {
      return '<em>no selected tab</em>';
    }
    return this.tabs.find(item => item.id === this.activeTab).content;
  }

}