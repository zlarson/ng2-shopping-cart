System.register(['angular2/core', './shopping-list-new-item.component', './shopping-list-item.component', './shopping-list.service'], function(exports_1, context_1) {
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
    var core_1, shopping_list_new_item_component_1, shopping_list_item_component_1, shopping_list_service_1;
    var ShoppingListComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (shopping_list_new_item_component_1_1) {
                shopping_list_new_item_component_1 = shopping_list_new_item_component_1_1;
            },
            function (shopping_list_item_component_1_1) {
                shopping_list_item_component_1 = shopping_list_item_component_1_1;
            },
            function (shopping_list_service_1_1) {
                shopping_list_service_1 = shopping_list_service_1_1;
            }],
        execute: function() {
            ShoppingListComponent = (function () {
                function ShoppingListComponent(_shoppingListService) {
                    this._shoppingListService = _shoppingListService;
                }
                ShoppingListComponent.prototype.onSelect = function (item) {
                    this.selectedItem = item;
                };
                ShoppingListComponent.prototype.onRemoved = function (item) {
                    this.selectedItem = null;
                };
                ShoppingListComponent.prototype.ngOnInit = function () {
                    this.listItems = this._shoppingListService.getItems();
                };
                ShoppingListComponent = __decorate([
                    core_1.Component({
                        selector: 'shopping-list',
                        template: "\n\t\t<section>\n\t\t\t<shopping-list-new-item ></shopping-list-new-item>\n\t\t</section>\n\t\t<section *ngIf=\"listItems != null && listItems.length > 0\">\n\t\t\t<h3>My List (click to edit)</h3>\n\t\t\t<div class=\"list\">\n\t\t\t\t<ul class=\"list-group\">\n\t\t\t\t\t<li  class=\"list-group-item\" *ngFor=\"#listItem of listItems\" (click)=\"onSelect(listItem)\">\n\t\t\t\t\t\t{{listItem.name}} ({{listItem.amount}})\n\t\t\t\t\t</li>\n\t\t\t\t</ul>\n\t\t\t</div>\n\t\t</section>\n\t\t<section *ngIf=\"selectedItem != null\">\n\t\t\t<shopping-list-item [item]=\"selectedItem\" (removed)=\"onRemoved($event)\"></shopping-list-item>\n\t\t</section>\n\t",
                        directives: [shopping_list_new_item_component_1.ShoppingListNewItemComponent, shopping_list_item_component_1.ShoppingListItemComponent],
                        providers: [shopping_list_service_1.ShoppingListService]
                    }), 
                    __metadata('design:paramtypes', [shopping_list_service_1.ShoppingListService])
                ], ShoppingListComponent);
                return ShoppingListComponent;
            }());
            exports_1("ShoppingListComponent", ShoppingListComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNob3BwaW5nLWxpc3Qvc2hvcHBpbmctbGlzdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUE2QkE7Z0JBSUMsK0JBQW9CLG9CQUF5QztvQkFBekMseUJBQW9CLEdBQXBCLG9CQUFvQixDQUFxQjtnQkFDN0QsQ0FBQztnQkFFRCx3Q0FBUSxHQUFSLFVBQVMsSUFBYztvQkFDdEIsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUM7Z0JBQzFCLENBQUM7Z0JBRUQseUNBQVMsR0FBVCxVQUFVLElBQWM7b0JBQ3ZCLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDO2dCQUMxQixDQUFDO2dCQUVELHdDQUFRLEdBQVI7b0JBQ0MsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsb0JBQW9CLENBQUMsUUFBUSxFQUFFLENBQUM7Z0JBQ3ZELENBQUM7Z0JBeENGO29CQUFDLGdCQUFTLENBQUM7d0JBQ1YsUUFBUSxFQUFFLGVBQWU7d0JBQ3pCLFFBQVEsRUFBRSwrb0JBaUJUO3dCQUNELFVBQVUsRUFBRSxDQUFDLCtEQUE0QixFQUFFLHdEQUF5QixDQUFDO3dCQUNyRSxTQUFTLEVBQUUsQ0FBQywyQ0FBbUIsQ0FBQztxQkFDaEMsQ0FBQzs7eUNBQUE7Z0JBbUJGLDRCQUFDO1lBQUQsQ0FsQkEsQUFrQkMsSUFBQTtZQWxCRCx5REFrQkMsQ0FBQSIsImZpbGUiOiJzaG9wcGluZy1saXN0L3Nob3BwaW5nLWxpc3QuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIE9uSW5pdH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XHJcbmltcG9ydCB7U2hvcHBpbmdMaXN0TmV3SXRlbUNvbXBvbmVudH0gZnJvbSAnLi9zaG9wcGluZy1saXN0LW5ldy1pdGVtLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7U2hvcHBpbmdMaXN0SXRlbUNvbXBvbmVudH0gZnJvbSAnLi9zaG9wcGluZy1saXN0LWl0ZW0uY29tcG9uZW50JztcclxuaW1wb3J0IHtMaXN0SXRlbX0gZnJvbSAnLi4vbGlzdC1pdGVtJztcclxuaW1wb3J0IHtTaG9wcGluZ0xpc3RTZXJ2aWNlfSBmcm9tICcuL3Nob3BwaW5nLWxpc3Quc2VydmljZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuXHRzZWxlY3RvcjogJ3Nob3BwaW5nLWxpc3QnLFxyXG5cdHRlbXBsYXRlOiBgXHJcblx0XHQ8c2VjdGlvbj5cclxuXHRcdFx0PHNob3BwaW5nLWxpc3QtbmV3LWl0ZW0gPjwvc2hvcHBpbmctbGlzdC1uZXctaXRlbT5cclxuXHRcdDwvc2VjdGlvbj5cclxuXHRcdDxzZWN0aW9uICpuZ0lmPVwibGlzdEl0ZW1zICE9IG51bGwgJiYgbGlzdEl0ZW1zLmxlbmd0aCA+IDBcIj5cclxuXHRcdFx0PGgzPk15IExpc3QgKGNsaWNrIHRvIGVkaXQpPC9oMz5cclxuXHRcdFx0PGRpdiBjbGFzcz1cImxpc3RcIj5cclxuXHRcdFx0XHQ8dWwgY2xhc3M9XCJsaXN0LWdyb3VwXCI+XHJcblx0XHRcdFx0XHQ8bGkgIGNsYXNzPVwibGlzdC1ncm91cC1pdGVtXCIgKm5nRm9yPVwiI2xpc3RJdGVtIG9mIGxpc3RJdGVtc1wiIChjbGljayk9XCJvblNlbGVjdChsaXN0SXRlbSlcIj5cclxuXHRcdFx0XHRcdFx0e3tsaXN0SXRlbS5uYW1lfX0gKHt7bGlzdEl0ZW0uYW1vdW50fX0pXHJcblx0XHRcdFx0XHQ8L2xpPlxyXG5cdFx0XHRcdDwvdWw+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0PC9zZWN0aW9uPlxyXG5cdFx0PHNlY3Rpb24gKm5nSWY9XCJzZWxlY3RlZEl0ZW0gIT0gbnVsbFwiPlxyXG5cdFx0XHQ8c2hvcHBpbmctbGlzdC1pdGVtIFtpdGVtXT1cInNlbGVjdGVkSXRlbVwiIChyZW1vdmVkKT1cIm9uUmVtb3ZlZCgkZXZlbnQpXCI+PC9zaG9wcGluZy1saXN0LWl0ZW0+XHJcblx0XHQ8L3NlY3Rpb24+XHJcblx0YCxcclxuXHRkaXJlY3RpdmVzOiBbU2hvcHBpbmdMaXN0TmV3SXRlbUNvbXBvbmVudCwgU2hvcHBpbmdMaXN0SXRlbUNvbXBvbmVudF0sXHJcblx0cHJvdmlkZXJzOiBbU2hvcHBpbmdMaXN0U2VydmljZV1cclxufSlcclxuZXhwb3J0IGNsYXNzIFNob3BwaW5nTGlzdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdHtcclxuXHRsaXN0SXRlbXM6IEFycmF5PExpc3RJdGVtPjtcclxuXHRzZWxlY3RlZEl0ZW0gOiBMaXN0SXRlbTtcclxuXHJcblx0Y29uc3RydWN0b3IocHJpdmF0ZSBfc2hvcHBpbmdMaXN0U2VydmljZTogU2hvcHBpbmdMaXN0U2VydmljZSl7XHJcblx0fVxyXG5cclxuXHRvblNlbGVjdChpdGVtOiBMaXN0SXRlbSkge1xyXG5cdFx0dGhpcy5zZWxlY3RlZEl0ZW0gPSBpdGVtO1xyXG5cdH1cclxuXHJcblx0b25SZW1vdmVkKGl0ZW06IExpc3RJdGVtKSB7XHJcblx0XHR0aGlzLnNlbGVjdGVkSXRlbSA9IG51bGw7XHJcblx0fVxyXG5cclxuXHRuZ09uSW5pdCgpOiBhbnl7XHJcblx0XHR0aGlzLmxpc3RJdGVtcyA9IHRoaXMuX3Nob3BwaW5nTGlzdFNlcnZpY2UuZ2V0SXRlbXMoKTtcclxuXHR9XHJcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
