import { Component } from '@angular/core';
import { ApiService } from './services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'book-store';

  // constructor(private apiService: ApiService){
  //   const token = localStorage.getItem('token');
  //   if(token!==null){
  //     this.isLoggedIn = true;
  //     this.isAdmin = this.apiService.isAdmin();
  //   }else{
  //     this.isLoggedIn = false;
  //   }

  //   this.apiService.loginStatus.subscribe((status)=>{
  //     this.isLoggedIn = status;
  //     this.isAdmin = this.apiService.IsAdmin();
  //   })
  // }

}
