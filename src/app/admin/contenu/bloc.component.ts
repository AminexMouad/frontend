import { Component, OnInit } from "@angular/core";
import { ContenuService } from "src/app/services/contenu.service";
import { NgForm } from "@angular/forms";
import { Location } from "@angular/common";
import { Router } from '@angular/router';

@Component({
  selector: "app-contenu",
  templateUrl: "./bloc.component.html",
  styleUrls: ["./bloc.component.css"]
})
export class BlocComponent implements OnInit {
  public blocs: any;
  public currentDate;
  public currentBloc;
  public feedBack;
  public currentPage;
  constructor(
    private contenuService: ContenuService,
    private _location: Location,
  ) {}
  ngOnInit() {
    const date = new Date();
    const currentMonth = date.getMonth() + 1;
    this.currentDate =
      date.getDay() + "/" + currentMonth + "/" + date.getFullYear();
    this.getallblocs();
  }

  returnToPreviousPage() {
    this._location.back();

  }

  getallblocs() {
    this.contenuService.getOnlyBlocs().subscribe(
      data => {
        this.blocs = data;
      },
      err => console.log(err)
    );
  }
  ajouterBloc(bloc: NgForm) {
    console.log(bloc);
    let confirmation = confirm(`Voulez-vous vraiment ajouter ce bloc ? `);
    if (!confirmation) return;
    this.contenuService.addBloc(bloc.value).subscribe(
      () => {
        this.getallblocs();
        alert("Bloc a ete ajoutee avec succee");
        bloc.resetForm();
      },
      err => console.log(err)
    );
  }

  selectBloc(b) {
    this.currentBloc = b;
    // console.log(b);
    this.currentBloc = {
      ...this.currentBloc,
      oldOrder: b.ordre
    };
    console.log(this.currentBloc);
  }

  modifierBloc(f) {
    if (f.value.activer == 0) {
      this.currentBloc.activer = false;
    } else if (f.value.activer == 1) {
      this.currentBloc.activer = true;
    }

    let comfirmation = confirm(
      `Voulez-vous vraiment modifier ${this.currentBloc.nom}`
    );
    if (!comfirmation) return;
    this.contenuService
      .updateBloc(this.currentBloc.id, this.currentBloc)
      .subscribe(
        () => {
          this.getallblocs();
          alert("Bloc a ete modifier avec succee");
        },
        err => console.log(err)
      );
  }

  supprimerBloc(b) {
    let comfirmation = confirm(`Are you sure you want delete ${b.name}`);
    if (!comfirmation) return;
    this.contenuService.deleteBloc(b._links.self.href).subscribe(
      () => {
        alert("bloc a ete supprimee avec succee");
        this.getallblocs();
      },
      err => console.log(err)
    );
  }
}
