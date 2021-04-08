import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { ApiCollectionResponse, ApiResponse } from 'src/app/models/apiResponse';
import { Router } from '@angular/router';
import { BookDto } from 'src/app/models/bookDto';
import { BookService } from 'src/app/services/book.service';
import { CategoryDto } from 'src/app/models/categoryDto';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {
  newBook: BookDto = {
    id: -1,
    name: '',
    year: 0,
    author: '',
    category: ''
  }
  constructor(private bookService: BookService, 
    private router: Router,
    private categoryService: CategoryService) { }

    categories: Array<CategoryDto>;
    

  ngOnInit() {
    this.categoryService.getCategories().subscribe( (res: ApiCollectionResponse) => {
      if(res.isSuccessful){
        this.categories = res.data
      }
    });
  }

  onAdd(){
    console.log(this.newBook)
    this.bookService.addBook({
      id: this.newBook.id,
      name: this.newBook.name,
      year: Number(this.newBook.year),
      author: this.newBook.author,
      category: this.newBook.category
    }).subscribe((res: ApiResponse) =>{
      console.log("jhhjdhjhj")
      if(res.isSuccessful){
        console.log(res.message)
        this.router.navigate(['/']);
      }
    })
  }

}
