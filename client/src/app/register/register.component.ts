import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AccountService } from '../services/account.service';
@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  @Output() cancelRegister = new EventEmitter();
    model:any = {}

  register(){
    this.accountService.register(this.model).subscribe({
      next: () => {
        this.cancelled()
      },
      error: error=> console.log(error)
    })

  }
  cancelled(){
    this.cancelRegister.emit(false);
  }
  constructor(private accountService:AccountService){
  }
}
