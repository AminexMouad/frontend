import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.css"]
})
export class SidebarComponent implements OnInit {
  public currentOrder;
  constructor(private router: Router) {
    this.currentOrder = this.router.url.substr(1);
  }

  ngOnInit() {}
}
