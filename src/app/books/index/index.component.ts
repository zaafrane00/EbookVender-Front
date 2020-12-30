import { BookserviceService } from './../../services/bookservice.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css'],
})
export class IndexComponent implements OnInit {
  googlebooks: any;
  newgooglebooks: any;
  constructor(public bookservices: BookserviceService) {
    this.googlebooks = [];
  }

  ngOnInit(): void {
    this.bookservices.getListStudent().subscribe((res) => {
      this.googlebooks = res;
      this.newgooglebooks = res;
      console.log(this.googlebooks);
    });
  }
}
