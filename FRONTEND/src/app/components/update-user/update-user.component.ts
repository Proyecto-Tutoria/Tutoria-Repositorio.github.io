import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { UsersService } from 'src/app/users.service';

@Component({
  selector: 'app-update-user',
  standalone: true,
  templateUrl: './update-user.component.html',
  styleUrl: './update-user.component.css',
  imports: [ReactiveFormsModule, RouterModule]
})
export class UpdateUserComponent {
  user: any
  data: any

  constructor(private userService: UsersService, private route: ActivatedRoute, private router: Router){}

  ngOnInit(): void{
    let id = this.route.snapshot.params['id']
    this.userService.getUserByID(id).subscribe(data=> {
      this.user = data
      console.log(data)
    })
  }

  form = new FormGroup({
     name: new FormControl('', Validators.required),
     email: new FormControl('', Validators.required)
  })

  submit(){
    this.data = this.form.value
    this.user.name = this.data.name
    this.user.email = this.data.email
    console.log(this.data)

    this.userService.updateUser(this.user?.id, this.user).subscribe(data =>{
      console.log(data)
    })

    this.router.navigate(['/'])
  }

}
