import { CdkDragDrop } from '@angular/cdk/drag-drop';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Item } from '../../models/item';

@Component({
  selector: 'list-item',
  templateUrl: './list-item.html',
  styleUrls: ['./list-item.scss']
})
export class ListItemComponent {
  @Input() item: Item;
  @Input() parentItem?: Item;
  @Input() public set connectedDropListsIds(ids: string[]) {
    this.allDropListsIds = ids;
  }
  public get connectedDropListsIds(): string[] {
    return this.allDropListsIds.filter((id) => id !== this.item.uId);
  }
  public allDropListsIds: string[];

  public get dragDisabled(): boolean {
    return !this.parentItem;
  }

  public get parentItemId(): string {
    return this.dragDisabled ? '' : this.parentItem.uId;
  }


  @Output() itemDrop: EventEmitter<CdkDragDrop<Item>>

  constructor() {
    this.allDropListsIds = [];
    this.itemDrop = new EventEmitter();
  }

  public onDragDrop(event: CdkDragDrop<Item, Item>): void {
    this.itemDrop.emit(event);
  }

}
