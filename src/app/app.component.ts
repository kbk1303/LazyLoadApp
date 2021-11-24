import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'LazyLoadApp';

  userClicked: boolean = false;

  constructor(private router: Router, private route: ActivatedRoute) { }

  open() {
    this.userClicked = true;
    console.log('open..')
    this.router.navigate(['userhandler'], {relativeTo: this.route});
  }

 
}
