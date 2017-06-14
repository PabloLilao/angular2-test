import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent implements OnInit {

  show: boolean;
  constructor() { 
    this.show = false;
  }

  ngOnInit() {
  }
  clickHamburguesa(){
    this.show = !this.show;
    /*
    .hamburger-slim:hover:before {
  box-shadow: transparent 0 0 0 0;
  top: 50%;
  transform: rotate(225deg);
}
.hamburger-slim:hover:after {
  top: 50%;
  transform: rotate(315deg);
}
*/
  };

}
  class NgIfSimple {
  
}


