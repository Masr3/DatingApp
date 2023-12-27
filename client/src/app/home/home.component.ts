import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from '../register/register.component';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RegisterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  registerMode = false;
  users:any
  constructor(private http:HttpClient){

  }


  ngOnInit(): void {
      this.getUsers()
  }

    cancelRegisterMode(event:boolean){
      this.registerMode = event;
    }

  registerToggle(){
    this.registerMode = !this.registerMode; 
  }
  getUsers(){
    this.http.get("https:localhost:5001/api/users")
      .subscribe({
        next: res=> this.users = res,
        error: err=>console.log(err),
        complete: () => console.log("Se completo el request")
        
        
      })
  }
}
