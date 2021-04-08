import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ApiCollectionResponse, ApiResponse } from 'src/app/models/apiResponse';
import { BookDto } from 'src/app/models/bookDto';
import { CategoryDto } from 'src/app/models/categoryDto';
import { BookService } from 'src/app/services/book.service';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-update-book',
  templateUrl: './update-book.component.html',
  styleUrls: ['./update-book.component.css']
})
export class UpdateBookComponent implements OnInit {
  id: string;
  newBook: BookDto = {
    id: -1,
    name: '',
    year: 0,
    author: '',
    category: ''
  }
  constructor(private bookService: BookService, 
    private route:ActivatedRoute, 
    private router: Router,
    private categoryService: CategoryService) { }

    categories: Array<CategoryDto>;
    

  ngOnInit() {
    this.categoryService.getCategories().subscribe( (res: ApiCollectionResponse) => {
      if(res.isSuccessful){
        this.categories = res.data
      }
    });
    this.id =this.route.snapshot.paramMap.get('id');
    this.bookService.getBooks().subscribe( (res: ApiCollectionResponse) => {
      if(res.isSuccessful){
        this.newBook.name = res.data.find(x=>x.id == this.id).name
        this.newBook.id = parseInt(this.id)
        this.newBook.year = res.data.find(x=>x.id == this.id).year
        this.newBook.author = res.data.find(x=>x.id == this.id).author
        this.newBook.category = res.data.find(x=>x.id == this.id).category
      }
    });
    console.log(this.id)
    console.log(this.newBook.name)
  }

  onUpdate(){
    this.bookService.updateBook(this.newBook).subscribe((res: ApiResponse) =>{
      if(res.isSuccessful){
        console.log(res.message)
        this.router.navigate(['/book']);
      }
    })
  }

}
