import { Component, ElementRef, ViewChild, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit,AfterViewInit {

  @ViewChild('navbar') navbar?: ElementRef;


  ngOnInit(){
    console.log(this.navbar);
    
    // this.navbar.style.display ="none"
  }
  ngAfterViewInit() {
}

showNavbar(){
  this.navbar?.nativeElement.classList.toggle('hide-nav')

}

}
