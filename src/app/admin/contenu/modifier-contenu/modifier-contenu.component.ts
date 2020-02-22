import { Component, OnInit } from "@angular/core";
import * as ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { ContenuService } from "src/app/services/contenu.service";
import { ActivatedRoute, Router } from "@angular/router";
@Component({
  selector: "app-modifier-contenu",
  templateUrl: "./modifier-contenu.component.html",
  styleUrls: ["./modifier-contenu.component.css"]
})
export class ModifierContenuComponent implements OnInit {
  public Editor = ClassicEditor;
  public contenu;
  public blocs;
  public feedBack;
  public id;
  constructor(
    private contenuService: ContenuService,
    private activatedroute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.id = this.activatedroute.snapshot.paramMap.get("id");
    this.loadContenu();
    this.loadBlocs();
  }
  loadBlocs() {
    this.contenuService.getAllBlocs().subscribe(data => {
      this.blocs = data;
      console.log(this.blocs);
    });
  }

  onSubmit() {
    this.contenuService.updateContenu(this.contenu.id, this.contenu).subscribe(
      data => {
        this.feedBack = data;
        alert(this.feedBack.msg);
        this.router.navigateByUrl("/contenu");
      },
      err => console.log(err)
    );
  }

  loadContenu() {
    this.contenuService.getContenuParId(this.id).subscribe(data => {
      this.contenu = data;
      this.contenuService
        .getBlocParContenu(this.contenu._links.bloc.href)
        .subscribe(data => {
          this.contenu.bloc = data;
          console.log(this.contenu.bloc);
        });
    });
  }
}
