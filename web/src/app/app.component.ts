import {Component, DoCheck, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, DoCheck {
  isLoading: boolean = false;

  ngOnInit(): void {
    setInterval(() => this.isLoading = true, 1000);
  }

  ngDoCheck() {
  }
}
