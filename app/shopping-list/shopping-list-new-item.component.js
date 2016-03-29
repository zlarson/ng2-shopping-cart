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
    var ShoppingListNewItemComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (shopping_list_service_1_1) {
                shopping_list_service_1 = shopping_list_service_1_1;
            }],
        execute: function() {
            ShoppingListNewItemComponent = (function () {
                function ShoppingListNewItemComponent(_shoppingListService) {
                    this._shoppingListService = _shoppingListService;
                    this.item = { name: 'test', amount: 0 };
                }
                ShoppingListNewItemComponent.prototype.onClick = function () {
                    this._shoppingListService.insertItem({ name: this.item.name, amount: this.item.amount });
                };
                ShoppingListNewItemComponent = __decorate([
                    core_1.Component({
                        selector: 'shopping-list-new-item',
                        template: "\n\t\t<div>\n\t\t\t<label for=\"item-name\">Name</label>\n\t\t\t<input class=\"form-control\" id=\"item-name\" [(ngModel)]=\"item.name\">\n\t\t</div>\n\t\t<div>\n\t\t\t<label for=\"item-amt\">Amount</label>\n\t\t\t<input class=\"form-control\" id=\"item-amt\" [(ngModel)]=\"item.amount\">\n\t\t</div>\n\t\t<button class=\"btn btn-success\" (click)=\"onClick()\">Add Item</button>\n\t"
                    }), 
                    __metadata('design:paramtypes', [shopping_list_service_1.ShoppingListService])
                ], ShoppingListNewItemComponent);
                return ShoppingListNewItemComponent;
            }());
            exports_1("ShoppingListNewItemComponent", ShoppingListNewItemComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNob3BwaW5nLWxpc3Qvc2hvcHBpbmctbGlzdC1uZXctaXRlbS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFrQkE7Z0JBR0Msc0NBQW9CLG9CQUF5QztvQkFBekMseUJBQW9CLEdBQXBCLG9CQUFvQixDQUFxQjtvQkFGN0QsU0FBSSxHQUFHLEVBQUMsSUFBSSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsQ0FBQyxFQUFDLENBQUM7Z0JBSWpDLENBQUM7Z0JBRUQsOENBQU8sR0FBUDtvQkFDQyxJQUFJLENBQUMsb0JBQW9CLENBQUMsVUFBVSxDQUFDLEVBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLE1BQU0sRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBQyxDQUFDLENBQUM7Z0JBQ3hGLENBQUM7Z0JBdkJGO29CQUFDLGdCQUFTLENBQUM7d0JBQ1YsUUFBUSxFQUFFLHdCQUF3Qjt3QkFDbEMsUUFBUSxFQUFFLGlZQVVUO3FCQUNELENBQUM7O2dEQUFBO2dCQVdGLG1DQUFDO1lBQUQsQ0FWQSxBQVVDLElBQUE7WUFWRCx1RUFVQyxDQUFBIiwiZmlsZSI6InNob3BwaW5nLWxpc3Qvc2hvcHBpbmctbGlzdC1uZXctaXRlbS5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XHJcbmltcG9ydCB7TGlzdEl0ZW19IGZyb20gJy4uL2xpc3QtaXRlbSc7XHJcbmltcG9ydCB7U2hvcHBpbmdMaXN0U2VydmljZX0gZnJvbSAnLi9zaG9wcGluZy1saXN0LnNlcnZpY2UnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcblx0c2VsZWN0b3I6ICdzaG9wcGluZy1saXN0LW5ldy1pdGVtJyxcclxuXHR0ZW1wbGF0ZTogYFxyXG5cdFx0PGRpdj5cclxuXHRcdFx0PGxhYmVsIGZvcj1cIml0ZW0tbmFtZVwiPk5hbWU8L2xhYmVsPlxyXG5cdFx0XHQ8aW5wdXQgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBpZD1cIml0ZW0tbmFtZVwiIFsobmdNb2RlbCldPVwiaXRlbS5uYW1lXCI+XHJcblx0XHQ8L2Rpdj5cclxuXHRcdDxkaXY+XHJcblx0XHRcdDxsYWJlbCBmb3I9XCJpdGVtLWFtdFwiPkFtb3VudDwvbGFiZWw+XHJcblx0XHRcdDxpbnB1dCBjbGFzcz1cImZvcm0tY29udHJvbFwiIGlkPVwiaXRlbS1hbXRcIiBbKG5nTW9kZWwpXT1cIml0ZW0uYW1vdW50XCI+XHJcblx0XHQ8L2Rpdj5cclxuXHRcdDxidXR0b24gY2xhc3M9XCJidG4gYnRuLXN1Y2Nlc3NcIiAoY2xpY2spPVwib25DbGljaygpXCI+QWRkIEl0ZW08L2J1dHRvbj5cclxuXHRgXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTaG9wcGluZ0xpc3ROZXdJdGVtQ29tcG9uZW50e1xyXG5cdGl0ZW0gPSB7bmFtZTogJ3Rlc3QnLCBhbW91bnQ6IDB9O1xyXG5cclxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIF9zaG9wcGluZ0xpc3RTZXJ2aWNlOiBTaG9wcGluZ0xpc3RTZXJ2aWNlKXtcclxuXHJcblx0fVxyXG5cclxuXHRvbkNsaWNrKCkge1xyXG5cdFx0dGhpcy5fc2hvcHBpbmdMaXN0U2VydmljZS5pbnNlcnRJdGVtKHtuYW1lOiB0aGlzLml0ZW0ubmFtZSwgYW1vdW50OiB0aGlzLml0ZW0uYW1vdW50fSk7XHJcblx0fVxyXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
