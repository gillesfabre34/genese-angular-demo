import { Component } from '@angular/core';
import { GeneseEnvironmentService } from 'genese-angular-library';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'genese-demo';


  constructor(geneseEnvironmentService: GeneseEnvironmentService) {
      geneseEnvironmentService.setEnvironment(environment.genese);
  }
}
