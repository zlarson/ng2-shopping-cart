import {Component} from 'angular2/core';
import {ListItem} from '../list-item';
import {ShoppingListService} from './shopping-list.service';

@Component({
	selector: 'shopping-list-new-item',
	template: `
		<div>
			<label for="item-name">Name</label>
			<input class="form-control" id="item-name" [(ngModel)]="item.name">
		</div>
		<div>
			<label for="item-amt">Amount</label>
			<input class="form-control" id="item-amt" [(ngModel)]="item.amount">
		</div>
		<button class="btn btn-success" (click)="onClick()">Add Item</button>
	`
})
export class ShoppingListNewItemComponent{
	item = {name: 'test', amount: 0};

	constructor(private _shoppingListService: ShoppingListService){

	}

	onClick() {
		this._shoppingListService.insertItem({name: this.item.name, amount: this.item.amount});
	}
}