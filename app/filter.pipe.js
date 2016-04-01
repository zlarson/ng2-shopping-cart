System.register(['angular2/core'], function(exports_1, context_1) {
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
    var core_1;
    var FilterPipe;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            FilterPipe = (function () {
                function FilterPipe() {
                }
                FilterPipe.prototype.transform = function (value, args) {
                    if (value.length === 0 || args[0] === null || args[0] === '') {
                        return value;
                    }
                    var resultArray = [];
                    for (var _i = 0, value_1 = value; _i < value_1.length; _i++) {
                        var item = value_1[_i];
                        if (item.name.match('^.*' + args[0] + '.*$')) {
                            resultArray.push(item);
                        }
                    }
                    return resultArray;
                };
                FilterPipe = __decorate([
                    core_1.Pipe({
                        name: 'myFilter'
                    }), 
                    __metadata('design:paramtypes', [])
                ], FilterPipe);
                return FilterPipe;
            }());
            exports_1("FilterPipe", FilterPipe);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbHRlci5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBTUE7Z0JBQUE7Z0JBZ0JBLENBQUM7Z0JBZkEsOEJBQVMsR0FBVCxVQUFVLEtBQWlCLEVBQUUsSUFBYztvQkFDMUMsRUFBRSxDQUFBLENBQUMsS0FBSyxDQUFDLE1BQU0sS0FBSyxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLElBQUksSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQzt3QkFDN0QsTUFBTSxDQUFDLEtBQUssQ0FBQztvQkFDZCxDQUFDO29CQUVELElBQUksV0FBVyxHQUFHLEVBQUUsQ0FBQztvQkFFckIsR0FBRyxDQUFBLENBQWEsVUFBSyxFQUFMLGVBQUssRUFBTCxtQkFBSyxFQUFMLElBQUssQ0FBQzt3QkFBbEIsSUFBSSxJQUFJLGNBQUE7d0JBQ1gsRUFBRSxDQUFBLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFBLENBQUM7NEJBQzNDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7d0JBQ3pCLENBQUM7cUJBQ0Q7b0JBRUQsTUFBTSxDQUFDLFdBQVcsQ0FBQztnQkFDcEIsQ0FBQztnQkFsQkY7b0JBQUMsV0FBSSxDQUFDO3dCQUNMLElBQUksRUFBRSxVQUFVO3FCQUNoQixDQUFDOzs4QkFBQTtnQkFpQkYsaUJBQUM7WUFBRCxDQWhCQSxBQWdCQyxJQUFBO1lBaEJELG1DQWdCQyxDQUFBIiwiZmlsZSI6ImZpbHRlci5waXBlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtQaXBlLCBQaXBlVHJhbnNmb3JtfSBmcm9tICdhbmd1bGFyMi9jb3JlJztcclxuaW1wb3J0IHtMaXN0SXRlbX0gZnJvbSAnLi9saXN0LWl0ZW0nO1xyXG5cclxuQFBpcGUoe1xyXG5cdG5hbWU6ICdteUZpbHRlcidcclxufSlcclxuZXhwb3J0IGNsYXNzIEZpbHRlclBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3Jte1xyXG5cdHRyYW5zZm9ybSh2YWx1ZTogTGlzdEl0ZW1bXSwgYXJnczogc3RyaW5nW10pOiBhbnl7XHJcblx0XHRpZih2YWx1ZS5sZW5ndGggPT09IDAgfHwgYXJnc1swXSA9PT0gbnVsbCB8fCBhcmdzWzBdID09PSAnJykge1xyXG5cdFx0XHRyZXR1cm4gdmFsdWU7XHJcblx0XHR9XHJcblxyXG5cdFx0bGV0IHJlc3VsdEFycmF5ID0gW107XHJcblxyXG5cdFx0Zm9yKGxldCBpdGVtIG9mIHZhbHVlKXtcclxuXHRcdFx0aWYoaXRlbS5uYW1lLm1hdGNoKCdeLionICsgYXJnc1swXSArICcuKiQnKSl7XHJcblx0XHRcdCBcdHJlc3VsdEFycmF5LnB1c2goaXRlbSk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHRyZXR1cm4gcmVzdWx0QXJyYXk7XHJcblx0fVxyXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
