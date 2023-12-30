import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AccountService } from '../services/account.service';
import {ToastrService} from "ngx-toastr";
@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  @Output() cancelRegister = new EventEmitter();
    model:any = {}

  register(){
    this.accountService.register(this.model).subscribe({
      next: () => {
        this.cancelled()
      },
      error: error=> this.toastr.error("error")
    })

  }
  cancelled(){
    this.cancelRegister.emit(false);
  }
  constructor(private accountService:AccountService, private toastr:ToastrService){
  }
}
