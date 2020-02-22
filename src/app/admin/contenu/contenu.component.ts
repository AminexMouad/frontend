import { Component, OnInit } from "@angular/core";
import { ContenuService } from "src/app/services/contenu.service";
import { Location } from "@angular/common";

@Component({
  selector: "app-contenu",
  templateUrl: "./contenu.component.html",
  styleUrls: ["./contenu.component.css"]
})
export class ContenuComponent implements OnInit {
  public contenus;
  public blocs;
  public feedBack;
  public currentContent;
  constructor(
    private contenuService: ContenuService,
    private _location: Location
  ) {}

  ngOnInit() {
    this.loadContent();
    this.loadBlocs();
  }
  returnToPreviousPage() {
    this._location.back();
  }
  loadContent() {
    this.contenuService.getContenus().subscribe(data => {
      this.contenus = data;
    });
  }
  filterbyType(event) {
    if (event.target.value == 0) {
      this.loadContent();
    } else {
      this.contenuService.getContenuParBloc(event.target.value).subscribe(
        data => {
          this.contenus = data;
        },
        err => console.log(err)
      );
    }
  }
  loadBlocs() {
    this.contenuService.getAllBlocs().subscribe(data => {
      this.blocs = data;
    });
  }

  supprimerContenu(c) {
    let comfirmation = confirm(`Are you sure you want delete ${c.titre}`);
    if (!comfirmation) return;
    this.contenuService.deleteContenu(c.id).subscribe(
      data => {
        this.feedBack = data;
        alert(this.feedBack.msg);
        this.loadContent();
      },
      err => console.log(err)
    );
  }
}
