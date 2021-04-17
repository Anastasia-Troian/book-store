import { Component, OnInit } from '@angular/core';
import { NotifierService } from 'angular-notifier';
import { NgxSpinnerService } from 'ngx-spinner';
import { ApiCollectionResponse, ApiResponse } from 'src/app/models/apiResponse';
import { BookDto } from 'src/app/models/bookDto';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-book-category',
  templateUrl: './book-category.component.html',
  styleUrls: ['./book-category.component.css']
})
export class BookCategoryComponent implements OnInit {

  books: Array<BookDto>;
  
  category: string = localStorage.getItem("category")

  constructor( private booksService: BookService,
                private spinner: NgxSpinnerService,
                private notifier: NotifierService) {

   }

  ngOnInit() {
    this.spinner.show();
    this.loadBooks();
    setTimeout( () => {
      this.spinner.hide();
    }, 2000)
    
  }

  onDelete(id:number){
    this.booksService.deleteBook(id).subscribe((res: ApiResponse)=>{
      if(res.isSuccessful)
      {
        console.log(res.message);
        this.loadBooks();
      }
    })
  }

  loadBooks()
  {
    this.booksService.getBookCategory(this.category).subscribe( (res: ApiCollectionResponse) => {
      console.log(res.data)
      if(res.isSuccessful){
        this.notifier.notify('success', 'OK')
        this.books = res.data;
        console.log(res.data);
      }
    });
  }
}
