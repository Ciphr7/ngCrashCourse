import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodosComponent } from './components/todos/todos.component';
import { TodoItemComponent } from './components/todo-item/todo-item.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { AddTodoComponent } from './components/add-todo/add-todo.component';
import { AngularFireModule } from '@angular/fire';

// 2. Add your credentials from step 1
const firebaseConfig = {
  apiKey: "AIzaSyB2lyBCJ2xtQOMht6eeG_IctFM8MqpnrIo",
  authDomain: "todong-bca0a.firebaseapp.com",
  databaseURL: "https://todong-bca0a.firebaseio.com",
  projectId: "todong-bca0a",
  storageBucket: "todong-bca0a.appspot.com",
  messagingSenderId: "220409417657",
  appId: "1:220409417657:web:50c7b7b1611d420e1af068",
  measurementId: "G-1QZWE4T00H"
};

@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    TodoItemComponent,
    HeaderComponent,
    AddTodoComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    HttpClientModule,
    FormsModule,
    AngularFireModule.initializeApp(firebaseConfig),


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
