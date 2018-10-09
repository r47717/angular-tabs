import { Component } from '@angular/core';
import { TabData } from './tabs/tab-data';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {

  tabs: TabData[] = [
    {
      id: 0,
      title: 'title1',
      content: 'body1',
    },
    {
      id: 1,
      title: 'title2',
      content: 'body2',
    },
    {
      id: 2,
      title: 'title3',
      content: 'body3',
    },
  ];

  private activeTab = this.tabs.length > 0 ? this.tabs[0].id : -1;

  private MAX_TABS_NO: number = 10;

  private latestId: number = this.tabs.length;

  private getNewId(): number {
    return ++this.latestId;
  }

  public onClickTitle(tab: TabData) {
    this.activeTab = tab.id;
  }

  public dec() {
    if (this.tabs.length) {
      if (this.tabs[this.tabs.length - 1].id === this.activeTab) {
        this.activeTab = this.tabs.length === 1 ? -1 : this.tabs[0].id;
      }
      this.tabs = this.tabs.slice(0, -1);
    }
  }

  public inc() {
    if (this.tabs.length < this.MAX_TABS_NO) {
      const id = this.getNewId();
      this.tabs.push({
        id,
        title: `tab ${id}`,
        content: '<no content>',      
      });
      if (this.activeTab === -1) {
        this.activeTab = id;
      }
    }
  }
}
