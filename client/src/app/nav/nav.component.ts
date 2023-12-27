import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AccountService } from '../services/account.service';
import { Observable, of } from 'rxjs';
import { User } from '../models/user';
import { Router, RouterModule } from '@angular/router';
@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']  // Change styleUrl to styleUrls
})

export class NavComponent implements OnInit {
  model:any = {};


  dropdownVisible: boolean = false;

  constructor(public accountService:AccountService, private router:Router){}
  ngOnInit(): void {
  }

  login(){
    this.accountService.login(this.model).subscribe({
      next: () => this.router.navigateByUrl('/members'),
      error: error=> console.log(error)
      
    })
  }
  logout(){
    this.accountService.logout(); 
    this.router.navigateByUrl('/');
  }

  toggleDropdown(){
    this.dropdownVisible = !this.dropdownVisible;
  }

}
