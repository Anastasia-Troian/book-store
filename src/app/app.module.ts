import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import  { HttpClientModule } from "@angular/common/http"

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CategoriesComponent } from './components/categories-crud/categories/categories.component';
import { from } from 'rxjs';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AddCategoryComponent } from './components/categories-crud/add-category/add-category.component';
import { FormsModule } from '@angular/forms';
import { UpdateCategoryComponent } from './components/categories-crud/update-category/update-category.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import {BrowserAnimationsModule}  from '@angular/platform-browser/animations';
import {NotifierModule, NotifierOptions} from 'angular-notifier'
import { BooksComponent } from './components/books-crud/books/books.component';
import { AddBookComponent } from './components/books-crud/add-book/add-book.component';
import { UpdateBookComponent } from './components/books-crud/update-book/update-book.component';
import { RegisterComponent } from './components/account/register/register.component';
import { LoginComponent } from './components/account/login/login.component';

const customNotifierOptions: NotifierOptions = {
  position: { horizontal: { position: 'right' }, vertical: { position: 'top' } }
};

@NgModule({
  declarations: [
    AppComponent,
    CategoriesComponent,
    AddCategoryComponent,
    UpdateCategoryComponent,

    RegisterComponent,
    LoginComponent,

    BooksComponent,
    AddBookComponent,
    UpdateBookComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    NgxSpinnerModule,
    BrowserAnimationsModule,
    NotifierModule.withConfig(customNotifierOptions)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
