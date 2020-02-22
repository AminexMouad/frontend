import { Component, OnInit } from "@angular/core";
import { ContenuService } from "../services/contenu.service";

@Component({
  selector: "app-main",
  templateUrl: "./main.component.html",
  styleUrls: ["./main.component.css"]
})
export class MainComponent implements OnInit {
  constructor(private contenuService: ContenuService) {}
  blocs: any;
  ngOnInit() {
    this.contenuService.getAllBlocs().subscribe(
      data => {
        this.blocs = data;

        console.log(this.blocs);
      },
      err => console.log(err)
    );
  }
}
