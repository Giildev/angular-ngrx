import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { todoReducer } from './app/todo/todo.reducer';

bootstrapApplication(AppComponent, {
  providers: [
    provideStore({ todos: todoReducer }),
    provideEffects(),
    provideStoreDevtools({ maxAge: 25, logOnly: false })
  ]
}).catch(err => console.error(err));