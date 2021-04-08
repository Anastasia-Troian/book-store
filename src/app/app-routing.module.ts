import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCategoryComponent } from './components/categories-crud/add-category/add-category.component';
import { CategoriesComponent } from './components/categories-crud/categories/categories.component';
import { UpdateCategoryComponent } from './components/categories-crud/update-category/update-category.component';

import { BooksComponent } from './components/books-crud/books/books.component';
import { AddBookComponent } from './components/books-crud/add-book/add-book.component';
import { UpdateBookComponent } from './components/books-crud/update-book/update-book.component';
import { RegisterComponent } from './components/account/register/register.component';
import { LoginComponent } from './components/account/login/login.component';

const routes: Routes = [
  {path: '', component:CategoriesComponent},
  {
    path: 'category',
    children: [
      {path: '', component:CategoriesComponent},
      {path: 'add', component:AddCategoryComponent},
      {path: 'update/:id', component:UpdateCategoryComponent}
    ]
  },
  {
    path: 'account',
    children: [
      {path: '', component:CategoriesComponent},
      {path: 'register', component:RegisterComponent},
      {path: 'login', component:LoginComponent}
    ]
  },
  {
    path: 'book',
    children: [
      {path: '', component:BooksComponent},
      {path: 'add', component:AddBookComponent},
      {path: 'update/:id', component:UpdateBookComponent}
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
