import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user-handler',
  templateUrl: './user-handler.component.html',
  styleUrls: ['./user-handler.component.css']
})
export class UserHandlerComponent implements OnInit {

  constructor(private router:Router, private route: ActivatedRoute) { }

  login() {
    this.router.navigate(['login'], {relativeTo: this.route});
  }

  register() {
    this.router.navigate(['register'], {relativeTo: this.route});
  }

  ngOnInit(): void {
  }

}
