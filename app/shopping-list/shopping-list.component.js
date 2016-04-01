System.register(['angular2/core', './shopping-list-new-item.component', './shopping-list-item.component', '../filter.pipe', './shopping-list.service'], function(exports_1, context_1) {
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
    var core_1, shopping_list_new_item_component_1, shopping_list_item_component_1, filter_pipe_1, shopping_list_service_1;
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
            function (filter_pipe_1_1) {
                filter_pipe_1 = filter_pipe_1_1;
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
                        template: "\n\t\t<section>\n\t\t\t<shopping-list-new-item ></shopping-list-new-item>\n\t\t</section>\n\t\t<section *ngIf=\"listItems != null && listItems.length > 0\">\n\t\t\t<h3>My List (click to edit)</h3>\n\t\t\tFilter:\n\t\t\t<input type=\"text\" #filter (keyup)=\"0\" />\n\t\t\t<div class=\"list\">\n\t\t\t{{listItems.length}}\n\t\t\t\t<ul class=\"list-group\">\n\t\t\t\t\t<li  class=\"list-group-item\" *ngFor=\"#listItem of listItems | myFilter:filter.value\" (click)=\"onSelect(listItem)\">\n\t\t\t\t\t\t{{listItem.name}} ({{listItem.amount}})\n\t\t\t\t\t</li>\n\t\t\t\t</ul>\n\t\t\t</div>\n\t\t</section>\n\t\t<section *ngIf=\"selectedItem != null\">\n\t\t\t<shopping-list-item [item]=\"selectedItem\" (removed)=\"onRemoved($event)\"></shopping-list-item>\n\t\t</section>\n\t",
                        directives: [shopping_list_new_item_component_1.ShoppingListNewItemComponent, shopping_list_item_component_1.ShoppingListItemComponent],
                        providers: [shopping_list_service_1.ShoppingListService],
                        pipes: [filter_pipe_1.FilterPipe]
                    }), 
                    __metadata('design:paramtypes', [shopping_list_service_1.ShoppingListService])
                ], ShoppingListComponent);
                return ShoppingListComponent;
            }());
            exports_1("ShoppingListComponent", ShoppingListComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNob3BwaW5nLWxpc3Qvc2hvcHBpbmctbGlzdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFrQ0E7Z0JBSUMsK0JBQW9CLG9CQUF5QztvQkFBekMseUJBQW9CLEdBQXBCLG9CQUFvQixDQUFxQjtnQkFDN0QsQ0FBQztnQkFFRCx3Q0FBUSxHQUFSLFVBQVMsSUFBYztvQkFDdEIsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUM7Z0JBQzFCLENBQUM7Z0JBRUQseUNBQVMsR0FBVCxVQUFVLElBQWM7b0JBQ3ZCLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDO2dCQUMxQixDQUFDO2dCQUVELHdDQUFRLEdBQVI7b0JBQ0MsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsb0JBQW9CLENBQUMsUUFBUSxFQUFFLENBQUM7Z0JBQ3ZELENBQUM7Z0JBNUNGO29CQUFDLGdCQUFTLENBQUM7d0JBQ1YsUUFBUSxFQUFFLGVBQWU7d0JBQ3pCLFFBQVEsRUFBRSx1d0JBb0JUO3dCQUNELFVBQVUsRUFBRSxDQUFDLCtEQUE0QixFQUFFLHdEQUF5QixDQUFDO3dCQUNyRSxTQUFTLEVBQUUsQ0FBQywyQ0FBbUIsQ0FBQzt3QkFDaEMsS0FBSyxFQUFFLENBQUMsd0JBQVUsQ0FBQztxQkFDbkIsQ0FBQzs7eUNBQUE7Z0JBbUJGLDRCQUFDO1lBQUQsQ0FsQkEsQUFrQkMsSUFBQTtZQWxCRCx5REFrQkMsQ0FBQSIsImZpbGUiOiJzaG9wcGluZy1saXN0L3Nob3BwaW5nLWxpc3QuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIE9uSW5pdH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XHJcbmltcG9ydCB7U2hvcHBpbmdMaXN0TmV3SXRlbUNvbXBvbmVudH0gZnJvbSAnLi9zaG9wcGluZy1saXN0LW5ldy1pdGVtLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7U2hvcHBpbmdMaXN0SXRlbUNvbXBvbmVudH0gZnJvbSAnLi9zaG9wcGluZy1saXN0LWl0ZW0uY29tcG9uZW50JztcclxuaW1wb3J0IHtMaXN0SXRlbX0gZnJvbSAnLi4vbGlzdC1pdGVtJztcclxuaW1wb3J0IHtGaWx0ZXJQaXBlfSBmcm9tICcuLi9maWx0ZXIucGlwZSc7XHJcbmltcG9ydCB7U2hvcHBpbmdMaXN0U2VydmljZX0gZnJvbSAnLi9zaG9wcGluZy1saXN0LnNlcnZpY2UnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcblx0c2VsZWN0b3I6ICdzaG9wcGluZy1saXN0JyxcclxuXHR0ZW1wbGF0ZTogYFxyXG5cdFx0PHNlY3Rpb24+XHJcblx0XHRcdDxzaG9wcGluZy1saXN0LW5ldy1pdGVtID48L3Nob3BwaW5nLWxpc3QtbmV3LWl0ZW0+XHJcblx0XHQ8L3NlY3Rpb24+XHJcblx0XHQ8c2VjdGlvbiAqbmdJZj1cImxpc3RJdGVtcyAhPSBudWxsICYmIGxpc3RJdGVtcy5sZW5ndGggPiAwXCI+XHJcblx0XHRcdDxoMz5NeSBMaXN0IChjbGljayB0byBlZGl0KTwvaDM+XHJcblx0XHRcdEZpbHRlcjpcclxuXHRcdFx0PGlucHV0IHR5cGU9XCJ0ZXh0XCIgI2ZpbHRlciAoa2V5dXApPVwiMFwiIC8+XHJcblx0XHRcdDxkaXYgY2xhc3M9XCJsaXN0XCI+XHJcblx0XHRcdHt7bGlzdEl0ZW1zLmxlbmd0aH19XHJcblx0XHRcdFx0PHVsIGNsYXNzPVwibGlzdC1ncm91cFwiPlxyXG5cdFx0XHRcdFx0PGxpICBjbGFzcz1cImxpc3QtZ3JvdXAtaXRlbVwiICpuZ0Zvcj1cIiNsaXN0SXRlbSBvZiBsaXN0SXRlbXMgfCBteUZpbHRlcjpmaWx0ZXIudmFsdWVcIiAoY2xpY2spPVwib25TZWxlY3QobGlzdEl0ZW0pXCI+XHJcblx0XHRcdFx0XHRcdHt7bGlzdEl0ZW0ubmFtZX19ICh7e2xpc3RJdGVtLmFtb3VudH19KVxyXG5cdFx0XHRcdFx0PC9saT5cclxuXHRcdFx0XHQ8L3VsPlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdDwvc2VjdGlvbj5cclxuXHRcdDxzZWN0aW9uICpuZ0lmPVwic2VsZWN0ZWRJdGVtICE9IG51bGxcIj5cclxuXHRcdFx0PHNob3BwaW5nLWxpc3QtaXRlbSBbaXRlbV09XCJzZWxlY3RlZEl0ZW1cIiAocmVtb3ZlZCk9XCJvblJlbW92ZWQoJGV2ZW50KVwiPjwvc2hvcHBpbmctbGlzdC1pdGVtPlxyXG5cdFx0PC9zZWN0aW9uPlxyXG5cdGAsXHJcblx0ZGlyZWN0aXZlczogW1Nob3BwaW5nTGlzdE5ld0l0ZW1Db21wb25lbnQsIFNob3BwaW5nTGlzdEl0ZW1Db21wb25lbnRdLFxyXG5cdHByb3ZpZGVyczogW1Nob3BwaW5nTGlzdFNlcnZpY2VdLFxyXG5cdHBpcGVzOiBbRmlsdGVyUGlwZV1cclxufSlcclxuZXhwb3J0IGNsYXNzIFNob3BwaW5nTGlzdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdHtcclxuXHRsaXN0SXRlbXM6IEFycmF5PExpc3RJdGVtPjtcclxuXHRzZWxlY3RlZEl0ZW0gOiBMaXN0SXRlbTtcclxuXHJcblx0Y29uc3RydWN0b3IocHJpdmF0ZSBfc2hvcHBpbmdMaXN0U2VydmljZTogU2hvcHBpbmdMaXN0U2VydmljZSl7XHJcblx0fVxyXG5cclxuXHRvblNlbGVjdChpdGVtOiBMaXN0SXRlbSkge1xyXG5cdFx0dGhpcy5zZWxlY3RlZEl0ZW0gPSBpdGVtO1xyXG5cdH1cclxuXHJcblx0b25SZW1vdmVkKGl0ZW06IExpc3RJdGVtKSB7XHJcblx0XHR0aGlzLnNlbGVjdGVkSXRlbSA9IG51bGw7XHJcblx0fVxyXG5cclxuXHRuZ09uSW5pdCgpOiBhbnl7XHJcblx0XHR0aGlzLmxpc3RJdGVtcyA9IHRoaXMuX3Nob3BwaW5nTGlzdFNlcnZpY2UuZ2V0SXRlbXMoKTtcclxuXHR9XHJcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
