import { areAllEquivalent } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { Observable } from 'rxjs';
import { ApiCollectionResponse, ApiResponse } from 'src/app/models/apiResponse';
import { CategoryDto } from 'src/app/models/categoryDto';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-update-category',
  templateUrl: './update-category.component.html',
  styleUrls: ['./update-category.component.css']
})
export class UpdateCategoryComponent implements OnInit {

  id: string;
  category: CategoryDto = {
    id: -1,
    name: '',
    books: []
  }
  constructor(private categoryService: CategoryService, private route:ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.id =this.route.snapshot.paramMap.get('id');
    this.categoryService.getCategories().subscribe( (res: ApiCollectionResponse) => {
      if(res.isSuccessful){
        this.category.name = res.data.find(x=>x.id == this.id).name
        this.category.id = parseInt(this.id)
      }
    });
    console.log(this.id)
    console.log(this.category.name)
  }

  onUpdate(){
    this.categoryService.updateCategory(this.category).subscribe((res: ApiResponse) =>{
      if(res.isSuccessful){
        console.log(res.message)
        this.router.navigate(['/']);
      }
    })
  }
}
