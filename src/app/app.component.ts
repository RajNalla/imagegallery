import { Component } from '@angular/core';
import { GithubService} from './services/github.services';
@Component({
  
  selector: 'app-root',
  template: `
  <nav class="navbar navbar-default">
  <div class="container-fluid">
    <div class="navbar-header">
      <a class="navbar-brand" href="#">
       GIT-HUB-APP
      </a>
    </div>
  </div>
</nav>
            <div class="container"><profile></profile></div>`,
  providers:[GithubService]
  
})
export class AppComponent {
  title = 'app';
}
