import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiResponse, ResultLoginDto } from 'src/app/models/apiResponse';
import { LoginDto } from 'src/app/models/loginDto';
import { AccountService } from 'src/app/services/account.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private accountService: AccountService, private router: Router) { }

  login: LoginDto = {
    id: -1,
    email: '',
    password: '',
  }

  ngOnInit() {
  }

  onLogin()
  {
    this.accountService.login(this.login).subscribe((res: ResultLoginDto) =>{
      if(res.isSuccessful){
        console.log(res.message)
        this.router.navigate(['/account']);
        localStorage.setItem("token",res.token)
      }
    })
  }
}
