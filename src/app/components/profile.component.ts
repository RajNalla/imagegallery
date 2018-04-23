import { Component } from '@angular/core';
import { GithubService } from '../services/github.services';
@Component({
  selector: 'profile',
  templateUrl: 'profile.component.html',

})
export class ProfileComponent {
    user:any[];
    constructor(private _githubService: GithubService){
              
        
        this._githubService.getUser().subscribe(user =>{

           this.user=user;
        });
    }
    
}
