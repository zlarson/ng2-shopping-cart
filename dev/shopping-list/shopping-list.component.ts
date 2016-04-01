import {Component, OnInit} from 'angular2/core';
import {ShoppingListNewItemComponent} from './shopping-list-new-item.component';
import {ShoppingListItemComponent} from './shopping-list-item.component';
import {ListItem} from '../list-item';
import {ShoppingListService} from './shopping-list.service';

@Component({
	selector: 'shopping-list',
	template: `
		<section>
			<shopping-list-new-item ></shopping-list-new-item>
		</section>
		<section *ngIf="listItems != null && listItems.length > 0">
			<h3>My List (click to edit)</h3>
			<div class="list">
				<ul class="list-group">
					<li  class="list-group-item" *ngFor="#listItem of listItems" (click)="onSelect(listItem)">
						{{listItem.name}} ({{listItem.amount}})
					</li>
				</ul>
			</div>
		</section>
		<section *ngIf="selectedItem != null">
			<shopping-list-item [item]="selectedItem" (removed)="onRemoved($event)"></shopping-list-item>
		</section>
	`,
	directives: [ShoppingListNewItemComponent, ShoppingListItemComponent],
	providers: [ShoppingListService]
})
export class ShoppingListComponent implements OnInit{
	listItems: Array<ListItem>;
	selectedItem : ListItem;

	constructor(private _shoppingListService: ShoppingListService){
	}

	onSelect(item: ListItem) {
		this.selectedItem = item;
	}

	onRemoved(item: ListItem) {
		this.selectedItem = null;
	}

	ngOnInit(): any{
		this.listItems = this._shoppingListService.getItems();
	}
}