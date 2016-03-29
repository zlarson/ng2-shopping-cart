import {Component, EventEmitter} from 'angular2/core';
import {ListItem} from '../list-item';
import {ShoppingListService} from './shopping-list.service';

@Component({
	selector: 'shopping-list-item',
	template: `
		<div>
			<label for="item-name">Name</label>
			<input class="form-control" id="item-name" [(ngModel)]="item.name">
		</div>
		<div>
			<label for="item-amt">Amount</label>
			<input class="form-control" id="item-amt" [(ngModel)]="item.amount">
		</div>
		<button class="btn btn-danger" (click)="onDelete()">Delete Item</button>
	`
	inputs: ['item'],
 	outputs: ['removed']
})
export class ShoppingListItemComponent{
	item: ListItem = {name: '', amount: 0};
	removed = new EventEmitter<any>();

	constructor(private _shoppingListService: ShoppingListService){ }

	onDelete(){
		this._shoppingListService.deleteItem(this.item);
		this.removed.emit(null);
	}
}