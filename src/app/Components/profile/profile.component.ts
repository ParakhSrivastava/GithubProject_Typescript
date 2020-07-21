import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../../Services/profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  profile: any;
  profiles: any;
  username: string; 

  constructor(private profileService:ProfileService) 
  {
  }

  findProfile()
  {
     this.profileService.updateProfile(this.username); 
    // console.log(this.profileService.getProfileInfo().subscribe(prof=>{
    //   console.log(prof);
    //   this.profile = prof;
    // }));

    console.log(this.profileService.getProfiles().subscribe(profiles=>{
      console.log(profiles);
      this.profiles = profiles;
    }));
  }

  ngOnInit(): void {
  }

}
