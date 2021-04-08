import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { ApiCollectionResponse, ApiResponse } from 'src/app/models/apiResponse';
import { CategoryDto } from 'src/app/models/categoryDto';
import { CategoryService } from 'src/app/services/category.service';

import {NotifierService} from 'angular-notifier'

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

      categories: Array<CategoryDto>;

  constructor( private categoryService: CategoryService,
                private spinner: NgxSpinnerService,
                private notifier: NotifierService) {

   }

  ngOnInit() {
    this.spinner.show();
    this.loadCategories();
    setTimeout( () => {
      this.spinner.hide();
    }, 2000)
    
  }

  onDelete(id:number){
    this.categoryService.deleteCategory(id).subscribe((res: ApiResponse)=>{
      if(res.isSuccessful)
      {
        console.log(res.message);
        this.loadCategories();
      }
    })
  }

  loadCategories()
  {
    this.categoryService.getCategories().subscribe( (res: ApiCollectionResponse) => {
      if(res.isSuccessful){
        this.notifier.notify('success', 'OK')
        this.categories = res.data;
        console.log(res.data);
      }
    });
  }
}
