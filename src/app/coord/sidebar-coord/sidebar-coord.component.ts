import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
@Component({
  selector: 'app-sidebar-coord',
  templateUrl: './sidebar-coord.component.html',
  styleUrls: ['./sidebar-coord.component.css']
})
export class SidebarCoordComponent implements OnInit {
  constructor() { }

  ngOnInit() {
    $("#menu-toggle").click(function(e) {
      e.preventDefault();
      $("#wrapper").toggleClass("active");
});
  }

}
