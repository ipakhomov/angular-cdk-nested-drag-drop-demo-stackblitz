import { BrowserModule } from '@angular/platform-browser';
import { CdkDragDropNestedListsExample } from './app.component';
import { CommonModule } from '@angular/common';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { ListItemComponent } from './shared/components/list-item/list-item.component';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    DragDropModule
  ],
  entryComponents: [
    ListItemComponent,
    CdkDragDropNestedListsExample
  ],
  declarations: [
    ListItemComponent,
    CdkDragDropNestedListsExample
  ],
  bootstrap: [
    CdkDragDropNestedListsExample
  ],
  providers: []
})
export class AppModule { }
