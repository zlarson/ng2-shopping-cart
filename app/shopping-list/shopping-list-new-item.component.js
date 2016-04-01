System.register(['angular2/core', './shopping-list.service', 'angular2/common'], function(exports_1, context_1) {
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
    var core_1, shopping_list_service_1, common_1;
    var ShoppingListNewItemComponent;
    function greaterThanZero(control) {
        if (control.value <= 0) {
            return { notEnough: true };
        }
    }
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (shopping_list_service_1_1) {
                shopping_list_service_1 = shopping_list_service_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            }],
        execute: function() {
            ShoppingListNewItemComponent = (function () {
                function ShoppingListNewItemComponent(_shoppingListService, _formBuilder) {
                    this._shoppingListService = _shoppingListService;
                    this._formBuilder = _formBuilder;
                    this.item = { name: 'Apple', amount: 10 };
                }
                ShoppingListNewItemComponent.prototype.onSubmit = function () {
                    this._shoppingListService.insertItem({ name: this.item.name, amount: this.item.amount });
                };
                ShoppingListNewItemComponent.prototype.ngOnInit = function () {
                    this.myForm = this._formBuilder.group({
                        'itemName': ['', common_1.Validators.required],
                        'itemAmount': ['', common_1.Validators.compose([
                                common_1.Validators.required,
                                greaterThanZero
                            ])]
                    });
                };
                ShoppingListNewItemComponent = __decorate([
                    core_1.Component({
                        selector: 'shopping-list-new-item',
                        template: "\n\t\t<form [ngFormModel]=\"myForm\" (ngSubmit)=\"onSubmit()\">\n\t\t\t<div>\n\t\t\t\t<label for=\"item-name\">Name</label>\n\t\t\t\t<input class=\"form-control\" id=\"item-name\" [(ngModel)]=\"item.name\" [ngFormControl]=\"myForm.controls['itemName']\">\n\t\t\t</div>\n\t\t\t<div>\n\t\t\t\t<label for=\"item-amt\">Amount</label>\n\t\t\t\t<input class=\"form-control\" id=\"item-amt\" [(ngModel)]=\"item.amount\" [ngFormControl]=\"myForm.controls['itemAmount']\">\n\t\t\t</div>\n\t\t\t<button class=\"btn btn-success\" [disabled]=\"!myForm.valid\" type=\"submit\">Add Item</button>\n\t\t</form>\t\n\t"
                    }), 
                    __metadata('design:paramtypes', [shopping_list_service_1.ShoppingListService, common_1.FormBuilder])
                ], ShoppingListNewItemComponent);
                return ShoppingListNewItemComponent;
            }());
            exports_1("ShoppingListNewItemComponent", ShoppingListNewItemComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNob3BwaW5nLWxpc3Qvc2hvcHBpbmctbGlzdC1uZXctaXRlbS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7SUEwQ0EseUJBQXlCLE9BQWdCO1FBQ3hDLEVBQUUsQ0FBQSxDQUFDLE9BQU8sQ0FBQyxLQUFLLElBQUksQ0FBQyxDQUFDLENBQUEsQ0FBQztZQUN0QixNQUFNLENBQUMsRUFBQyxTQUFTLEVBQUUsSUFBSSxFQUFDLENBQUM7UUFDMUIsQ0FBQztJQUNGLENBQUM7Ozs7Ozs7Ozs7Ozs7WUF6QkQ7Z0JBSUMsc0NBQW9CLG9CQUF5QyxFQUFVLFlBQXlCO29CQUE1RSx5QkFBb0IsR0FBcEIsb0JBQW9CLENBQXFCO29CQUFVLGlCQUFZLEdBQVosWUFBWSxDQUFhO29CQUhoRyxTQUFJLEdBQUcsRUFBQyxJQUFJLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxFQUFFLEVBQUMsQ0FBQztnQkFHZ0UsQ0FBQztnQkFFcEcsK0NBQVEsR0FBUjtvQkFDQyxJQUFJLENBQUMsb0JBQW9CLENBQUMsVUFBVSxDQUFDLEVBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLE1BQU0sRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBQyxDQUFDLENBQUM7Z0JBQ3hGLENBQUM7Z0JBRUQsK0NBQVEsR0FBUjtvQkFDQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDO3dCQUNyQyxVQUFVLEVBQUUsQ0FBQyxFQUFFLEVBQUUsbUJBQVUsQ0FBQyxRQUFRLENBQUM7d0JBQ3JDLFlBQVksRUFBRSxDQUFDLEVBQUUsRUFBRSxtQkFBVSxDQUFDLE9BQU8sQ0FBQztnQ0FDckMsbUJBQVUsQ0FBQyxRQUFRO2dDQUNuQixlQUFlOzZCQUNmLENBQUMsQ0FBQztxQkFDSCxDQUFDLENBQUM7Z0JBQ0osQ0FBQztnQkFsQ0Y7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDVixRQUFRLEVBQUUsd0JBQXdCO3dCQUNsQyxRQUFRLEVBQUUsMGxCQVlUO3FCQUNELENBQUM7O2dEQUFBO2dCQW9CRixtQ0FBQztZQUFELENBbkJBLEFBbUJDLElBQUE7WUFuQkQsdUVBbUJDLENBQUEiLCJmaWxlIjoic2hvcHBpbmctbGlzdC9zaG9wcGluZy1saXN0LW5ldy1pdGVtLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBPbkluaXR9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xyXG5pbXBvcnQge0xpc3RJdGVtfSBmcm9tICcuLi9saXN0LWl0ZW0nO1xyXG5pbXBvcnQge1Nob3BwaW5nTGlzdFNlcnZpY2V9IGZyb20gJy4vc2hvcHBpbmctbGlzdC5zZXJ2aWNlJztcclxuaW1wb3J0IHtDb250cm9sR3JvdXAsIEZvcm1CdWlsZGVyLCBDb250cm9sLCBWYWxpZGF0b3JzfSBmcm9tICdhbmd1bGFyMi9jb21tb24nO1xyXG5cclxuQENvbXBvbmVudCh7XHJcblx0c2VsZWN0b3I6ICdzaG9wcGluZy1saXN0LW5ldy1pdGVtJyxcclxuXHR0ZW1wbGF0ZTogYFxyXG5cdFx0PGZvcm0gW25nRm9ybU1vZGVsXT1cIm15Rm9ybVwiIChuZ1N1Ym1pdCk9XCJvblN1Ym1pdCgpXCI+XHJcblx0XHRcdDxkaXY+XHJcblx0XHRcdFx0PGxhYmVsIGZvcj1cIml0ZW0tbmFtZVwiPk5hbWU8L2xhYmVsPlxyXG5cdFx0XHRcdDxpbnB1dCBjbGFzcz1cImZvcm0tY29udHJvbFwiIGlkPVwiaXRlbS1uYW1lXCIgWyhuZ01vZGVsKV09XCJpdGVtLm5hbWVcIiBbbmdGb3JtQ29udHJvbF09XCJteUZvcm0uY29udHJvbHNbJ2l0ZW1OYW1lJ11cIj5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHRcdDxkaXY+XHJcblx0XHRcdFx0PGxhYmVsIGZvcj1cIml0ZW0tYW10XCI+QW1vdW50PC9sYWJlbD5cclxuXHRcdFx0XHQ8aW5wdXQgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBpZD1cIml0ZW0tYW10XCIgWyhuZ01vZGVsKV09XCJpdGVtLmFtb3VudFwiIFtuZ0Zvcm1Db250cm9sXT1cIm15Rm9ybS5jb250cm9sc1snaXRlbUFtb3VudCddXCI+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1zdWNjZXNzXCIgW2Rpc2FibGVkXT1cIiFteUZvcm0udmFsaWRcIiB0eXBlPVwic3VibWl0XCI+QWRkIEl0ZW08L2J1dHRvbj5cclxuXHRcdDwvZm9ybT5cdFxyXG5cdGBcclxufSlcclxuZXhwb3J0IGNsYXNzIFNob3BwaW5nTGlzdE5ld0l0ZW1Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXR7XHJcblx0aXRlbSA9IHtuYW1lOiAnQXBwbGUnLCBhbW91bnQ6IDEwfTtcclxuXHRteUZvcm06IENvbnRyb2xHcm91cDtcclxuXHJcblx0Y29uc3RydWN0b3IocHJpdmF0ZSBfc2hvcHBpbmdMaXN0U2VydmljZTogU2hvcHBpbmdMaXN0U2VydmljZSwgcHJpdmF0ZSBfZm9ybUJ1aWxkZXI6IEZvcm1CdWlsZGVyKXsgfVxyXG5cclxuXHRvblN1Ym1pdCgpIHtcclxuXHRcdHRoaXMuX3Nob3BwaW5nTGlzdFNlcnZpY2UuaW5zZXJ0SXRlbSh7bmFtZTogdGhpcy5pdGVtLm5hbWUsIGFtb3VudDogdGhpcy5pdGVtLmFtb3VudH0pO1xyXG5cdH1cclxuXHJcblx0bmdPbkluaXQoKTphbnl7XHJcblx0XHR0aGlzLm15Rm9ybSA9IHRoaXMuX2Zvcm1CdWlsZGVyLmdyb3VwKHtcclxuXHRcdFx0J2l0ZW1OYW1lJzogWycnLCBWYWxpZGF0b3JzLnJlcXVpcmVkXSxcclxuXHRcdFx0J2l0ZW1BbW91bnQnOiBbJycsIFZhbGlkYXRvcnMuY29tcG9zZShbXHJcblx0XHRcdFx0VmFsaWRhdG9ycy5yZXF1aXJlZCxcclxuXHRcdFx0XHRncmVhdGVyVGhhblplcm9cclxuXHRcdFx0XSldXHJcblx0XHR9KTtcclxuXHR9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdyZWF0ZXJUaGFuWmVybyhjb250cm9sOiBDb250cm9sKSA6IHtbczogc3RyaW5nXTogYm9vbGVhbn0ge1xyXG5cdGlmKGNvbnRyb2wudmFsdWUgPD0gMCl7XHJcblx0XHRyZXR1cm4ge25vdEVub3VnaDogdHJ1ZX07XHJcblx0fVxyXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
