import { Component, OnInit, Input, TemplateRef } from '@angular/core';
import{FormBuilder, FormGroup, Validators} from '@angular/forms'
import { Subscription } from 'rxjs';
import {ProfileServiceService}  from '../../app/profile-service/profile-service.service';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';


@Component({
  selector: 'app-profile-list',
  templateUrl: './profile-list.component.html',
  styleUrls: ['./profile-list.component.scss']
})
export class ProfileListComponent implements OnInit {

  title: string;
  userData:  any;
  user: any
  modalRef: BsModalRef;
  userFlag = false;
  notEmptyPost=true;
  notscrolly=true;
  
  public count =1;

  constructor( private search  : ProfileServiceService,private modalService: BsModalService) {   }
      
  searchUser(){
    this.search.getUsers(this.title).subscribe((result:any) => 
    {
      this.userData = result.items; })
      this.userFlag= true;}

  sort(){
      this.search.getSortUser(this.title).subscribe((result:any) => {
      this.userData = result; })
  }
  sort1(){    
    this.search.getSortUser1(this.title).subscribe((result:any) => {
      this.userData = result; })}

  onDetails(template : TemplateRef<any>, username  : any ){
      
     console.log(username);
      this.search.getUsername(username).subscribe((result : any) =>{
         this.user= result;
      })
      this.modalRef = this.modalService.show(template);
  
  }
  //implementation here
  onScroll(){
     if(this.notscrolly && this.notEmptyPost){
           this.notscrolly=false;
           this.loadNextPost();
     }
   }
  loadNextPost(){
      this.count=this.count+1; 
      this.search.getnextpage(this.title,this.count).subscribe((result:any )=>{
        const newPost = result;
        if(newPost.length == 0 ){
          this.notEmptyPost=false;
        }
        Array.prototype.push.apply(this.userData,newPost.items);
        this.notscrolly=true;
      });

  }
  ngOnInit(): void {
  }


}
