import {Component, NgModule} from '@angular/core';
import {TodosComponent} from './todos/todos.component';
import {BrowserModule} from '@angular/platform-browser';
import {TodoService} from './todo.service';

@NgModule({
  imports: [ BrowserModule ],
  declarations: [ AppComponent, TodosComponent ],
  bootstrap: [ AppComponent ]
})
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ TodoService]
})
export class AppComponent {
  title = 'app works!';
}
