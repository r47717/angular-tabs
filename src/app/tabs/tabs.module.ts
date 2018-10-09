import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabsComponent } from './tabs.component';
import { TabTitleComponent } from './tab-title/tab-title.component';
import { TabContentComponent } from './tab-content/tab-content.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    TabsComponent, TabTitleComponent, TabContentComponent
  ],
  exports: [
    TabsComponent
  ],
  schemas: [ NO_ERRORS_SCHEMA ]
})
export class TabsModule { }