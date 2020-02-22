import { Component, OnInit, Sanitizer } from "@angular/core";
import { ContenuService } from "src/app/services/contenu.service";
import { ActivatedRoute, Router } from "@angular/router";
import { DomSanitizer } from "@angular/platform-browser";

@Component({
  selector: "app-article",
  templateUrl: "./article.component.html",
  styleUrls: ["./article.component.css"]
})
export class ArticleComponent implements OnInit {
  contenu;
  id;
  image;
  constructor(
    private contenuService: ContenuService,
    private activatedroute: ActivatedRoute,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit() {
    this.id = this.activatedroute.snapshot.paramMap.get("id");
    this.loadContenu();
  }

  loadContenu() {
    this.contenuService.getContenuParId(this.id).subscribe(data => {
      this.contenu = data;
      this.image = this.sanitizer.bypassSecurityTrustStyle(
        `url(${this.contenu.imageUrl})`
      );
    });
  }
}
