import { Component, OnInit } from '@angular/core';
import { SessionService } from '../services/session.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  user: any;
  error: String;

  constructor(private session: SessionService) {}

  ngOnInit() {
    this.session.isLoggedIn()
      .subscribe(
        user => { this.user = user; },
        err => { this.error = err; }
      )
  }

}
