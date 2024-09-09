// src/app/pages/profile/profile.component.ts
import { Component, OnInit } from '@angular/core';
import { ProfileService } from 'src/app/services/profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  profiles: any[] = [];

  constructor(private profileService: ProfileService) {}

  ngOnInit(): void {
    this.loadProfiles();
  }

  loadProfiles(): void {
    this.profileService.getProfiles().subscribe(
      (data: any[]) => {
        console.log('Profiles loaded:', data); // Agrega un console log para depuración
        this.profiles = data;
      },
      (error: any) => {
        console.error('Error fetching profiles:', error);
      }
    );
  }
}
