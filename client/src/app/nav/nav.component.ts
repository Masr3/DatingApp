import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AccountService } from '../services/account.service';
import { Observable, of } from 'rxjs';
import { User } from '../models/user';
@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']  // Change styleUrl to styleUrls
})

export class NavComponent implements OnInit {
  model:any = {};


  dropdownVisible: boolean = false;

  constructor(public accountService:AccountService){}
  ngOnInit(): void {
  }

  login(){
    this.accountService.login(this.model).subscribe({
      next:response => {
        console.log(response)
      },
      error: error=> console.log(error)
      
    })
  }
  logout(){
    this.accountService.logout();     
  }

  toggleDropdown(){
    this.dropdownVisible = !this.dropdownVisible;
  }

}
