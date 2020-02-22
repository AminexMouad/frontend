import { Component, OnInit } from "@angular/core";
import { ContenuService } from "src/app/services/contenu.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-all-articles",
  templateUrl: "./all-articles.component.html",
  styleUrls: ["./all-articles.component.css"]
})
export class AllArticlesComponent implements OnInit {
  id;
  constructor(
    private contenuService: ContenuService,
    private activatedroute: ActivatedRoute
  ) {}
  blocs: any;
  ngOnInit() {
    this.id = this.activatedroute.snapshot.paramMap.get("id");

    this.contenuService.getBlocParId(this.id).subscribe(
      data => {
        this.blocs = data["_embedded"].contenus;

        console.log(this.blocs);
      },
      err => console.log(err)
    );
  }
}
