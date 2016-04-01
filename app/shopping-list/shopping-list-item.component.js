System.register(['angular2/core', './shopping-list.service'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, shopping_list_service_1;
    var ShoppingListItemComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (shopping_list_service_1_1) {
                shopping_list_service_1 = shopping_list_service_1_1;
            }],
        execute: function() {
            ShoppingListItemComponent = (function () {
                function ShoppingListItemComponent(_shoppingListService) {
                    this._shoppingListService = _shoppingListService;
                    this.item = { name: '', amount: 0 };
                    this.removed = new core_1.EventEmitter();
                }
                ShoppingListItemComponent.prototype.onDelete = function () {
                    this._shoppingListService.deleteItem(this.item);
                    this.removed.emit(null);
                };
                ShoppingListItemComponent = __decorate([
                    core_1.Component({
                        selector: 'shopping-list-item',
                        template: "\n\t\t<h3>Edit Item</h3>\n\t\t<div>\n\t\t\t<label for=\"item-name\">Name</label>\n\t\t\t<input class=\"form-control\" id=\"item-name\" [(ngModel)]=\"item.name\">\n\t\t</div>\n\t\t<div>\n\t\t\t<label for=\"item-amt\">Amount</label>\n\t\t\t<input class=\"form-control\" id=\"item-amt\" [(ngModel)]=\"item.amount\">\n\t\t</div>\n\t\t<button class=\"btn btn-danger\" (click)=\"onDelete()\">Delete Item</button>\n\t",
                        inputs: ['item'],
                        outputs: ['removed']
                    }), 
                    __metadata('design:paramtypes', [shopping_list_service_1.ShoppingListService])
                ], ShoppingListItemComponent);
                return ShoppingListItemComponent;
            }());
            exports_1("ShoppingListItemComponent", ShoppingListItemComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNob3BwaW5nLWxpc3Qvc2hvcHBpbmctbGlzdC1pdGVtLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQXFCQTtnQkFJQyxtQ0FBb0Isb0JBQXlDO29CQUF6Qyx5QkFBb0IsR0FBcEIsb0JBQW9CLENBQXFCO29CQUg3RCxTQUFJLEdBQWEsRUFBQyxJQUFJLEVBQUUsRUFBRSxFQUFFLE1BQU0sRUFBRSxDQUFDLEVBQUMsQ0FBQztvQkFDdkMsWUFBTyxHQUFHLElBQUksbUJBQVksRUFBTyxDQUFDO2dCQUU4QixDQUFDO2dCQUVqRSw0Q0FBUSxHQUFSO29CQUNDLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO29CQUNoRCxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDekIsQ0FBQztnQkExQkY7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDVixRQUFRLEVBQUUsb0JBQW9CO3dCQUM5QixRQUFRLEVBQUUsNFpBV1Q7d0JBQ0QsTUFBTSxFQUFFLENBQUMsTUFBTSxDQUFDO3dCQUNmLE9BQU8sRUFBRSxDQUFDLFNBQVMsQ0FBQztxQkFDckIsQ0FBQzs7NkNBQUE7Z0JBV0YsZ0NBQUM7WUFBRCxDQVZBLEFBVUMsSUFBQTtZQVZELGlFQVVDLENBQUEiLCJmaWxlIjoic2hvcHBpbmctbGlzdC9zaG9wcGluZy1saXN0LWl0ZW0uY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIEV2ZW50RW1pdHRlcn0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XHJcbmltcG9ydCB7TGlzdEl0ZW19IGZyb20gJy4uL2xpc3QtaXRlbSc7XHJcbmltcG9ydCB7U2hvcHBpbmdMaXN0U2VydmljZX0gZnJvbSAnLi9zaG9wcGluZy1saXN0LnNlcnZpY2UnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcblx0c2VsZWN0b3I6ICdzaG9wcGluZy1saXN0LWl0ZW0nLFxyXG5cdHRlbXBsYXRlOiBgXHJcblx0XHQ8aDM+RWRpdCBJdGVtPC9oMz5cclxuXHRcdDxkaXY+XHJcblx0XHRcdDxsYWJlbCBmb3I9XCJpdGVtLW5hbWVcIj5OYW1lPC9sYWJlbD5cclxuXHRcdFx0PGlucHV0IGNsYXNzPVwiZm9ybS1jb250cm9sXCIgaWQ9XCJpdGVtLW5hbWVcIiBbKG5nTW9kZWwpXT1cIml0ZW0ubmFtZVwiPlxyXG5cdFx0PC9kaXY+XHJcblx0XHQ8ZGl2PlxyXG5cdFx0XHQ8bGFiZWwgZm9yPVwiaXRlbS1hbXRcIj5BbW91bnQ8L2xhYmVsPlxyXG5cdFx0XHQ8aW5wdXQgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBpZD1cIml0ZW0tYW10XCIgWyhuZ01vZGVsKV09XCJpdGVtLmFtb3VudFwiPlxyXG5cdFx0PC9kaXY+XHJcblx0XHQ8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1kYW5nZXJcIiAoY2xpY2spPVwib25EZWxldGUoKVwiPkRlbGV0ZSBJdGVtPC9idXR0b24+XHJcblx0YCxcclxuXHRpbnB1dHM6IFsnaXRlbSddLFxyXG4gXHRvdXRwdXRzOiBbJ3JlbW92ZWQnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgU2hvcHBpbmdMaXN0SXRlbUNvbXBvbmVudHtcclxuXHRpdGVtOiBMaXN0SXRlbSA9IHtuYW1lOiAnJywgYW1vdW50OiAwfTtcclxuXHRyZW1vdmVkID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcblxyXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgX3Nob3BwaW5nTGlzdFNlcnZpY2U6IFNob3BwaW5nTGlzdFNlcnZpY2UpeyB9XHJcblxyXG5cdG9uRGVsZXRlKCl7XHJcblx0XHR0aGlzLl9zaG9wcGluZ0xpc3RTZXJ2aWNlLmRlbGV0ZUl0ZW0odGhpcy5pdGVtKTtcclxuXHRcdHRoaXMucmVtb3ZlZC5lbWl0KG51bGwpO1xyXG5cdH1cclxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
