import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { UsersService } from 'src/app/users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-user',
  standalone: true,
  templateUrl: './add-user.component.html',
  styleUrl: './add-user.component.css',
  imports: [ReactiveFormsModule, RouterModule]
})
export class AddUserComponent {
  constructor(private userService: UsersService, private router: Router){}
  data : any

  form = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    gender: new FormControl('', Validators.required)
  })

  addUser(){
    this.data = this.form.value
    this.userService.addUser(this.data).subscribe(data=>{
      this.router.navigate(['/']) // redirect to homepage
    })
  }
}
