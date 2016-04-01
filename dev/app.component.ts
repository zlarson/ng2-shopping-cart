import {Component} from 'angular2/core';
import {ShoppingListComponent} from './shopping-list/shopping-list.component';

@Component({
    selector: 'my-app',
    template: `
        <nav class="navbar navbar-default navbar-inverse navbar-fixed-top">
		  <div class="container">
		    <div class="navbar-header">		      
		      <a class="navbar-brand" href="#">Shopping List</a>
		    </div>
		  </div>
		</nav>
        <div class="container">
        	<shopping-list></shopping-list>
        </div>
    `,
    directives: [ShoppingListComponent]
})
export class AppComponent {

}
