import { Component, NgModule, OnInit } from '@angular/core';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
@NgModule({
  imports: [],
  exports: [NavbarComponent],
  declarations: [NavbarComponent],
  providers: [],
  bootstrap: [NavbarComponent]
})
export class NavbarModule { }

