import { Component } from '@angular/core';
import { UsersService } from 'src/app/users.service'
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-view-user',
  standalone: true,
  templateUrl: './view-user.component.html',
  styleUrl: './view-user.component.css',
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
})
export class ViewUserComponent {
  users: any | undefined

  constructor(private userService: UsersService){}

  ngOnInit(): void {
    this.userService.getUsers().subscribe(data=>{
      this.users = data
      console.log(data)
    })
  }

  deleteUser(id: number){
    this.userService.deleteUserByID(id).subscribe(data => {
      console.log(data)
      this.ngOnInit() // refresh it

    })
  }
}
