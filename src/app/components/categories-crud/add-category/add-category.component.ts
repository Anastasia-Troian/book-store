import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiResponse } from 'src/app/models/apiResponse';
import { CategoryDto } from 'src/app/models/categoryDto';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit {

  newCategory: CategoryDto = {
    id: -1,
    name: '',
    books: []
  }

  constructor(private categoryService: CategoryService, private router: Router) { }

  

  ngOnInit() {
  }

  onAdd(){
    this.categoryService.addCategory(this.newCategory).subscribe((res: ApiResponse) =>{
      if(res.isSuccessful){
        console.log(res.message)
        this.router.navigate(['/book']);
      }
    })
  }

}
