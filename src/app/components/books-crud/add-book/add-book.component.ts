import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { ApiCollectionResponse, ApiResponse } from 'src/app/models/apiResponse';
import { Router } from '@angular/router';
import { BookDto } from 'src/app/models/bookDto';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {

  newBook: BookDto = {
    id: -1,
    name: ''
  }

  constructor(private bookService: BookService, private router: Router) { }

  

  ngOnInit() {
  }

  onAdd(){
    this.bookService.addBook(this.newBook).subscribe((res: ApiResponse) =>{
      if(res.isSuccessful){
        console.log(res.message)
        this.router.navigate(['/']);
      }
    })
  }

}
