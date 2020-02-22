import { Component, OnInit } from "@angular/core";
import * as ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { ContenuService } from "src/app/services/contenu.service";
import { DomSanitizer } from "@angular/platform-browser";
import { FormBuilder, FormGroup } from "@angular/forms";
import { Router } from "@angular/router";

@Component({
  selector: "app-ajouter-contenu",
  templateUrl: "./ajouter-contenu.component.html",
  styleUrls: ["./ajouter-contenu.component.css"]
})
export class AjouterContenuComponent implements OnInit {
  public Editor = ClassicEditor;
  public contenus;
  public contenu = { titre: "", description: "", bloc: { id: "" } };
  public feedBack;
  public blocs;
  uploadForm: FormGroup;
  public image;
  constructor(
    private router: Router,
    private contenuService: ContenuService,
    private formBuilder: FormBuilder,
    private sanitizer: DomSanitizer
  ) {}

  public getSantizeUrl(url) {
    return this.sanitizer.bypassSecurityTrustUrl(url);
  }

  ngOnInit() {
    this.loadBlocs();
    this.uploadForm = this.uploadForm = this.formBuilder.group({
      img: [""]
    });
  }
  test(event) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.uploadForm.get("img").setValue(file);
    }
    console.log(this.uploadForm.get("img"));
  }
  loadBlocs() {
    this.contenuService.getOnlyBlocs().subscribe(data => {
      this.blocs = data;
    });
  }

  onSubmit() {
    const formData = new FormData();
    formData.append("url", this.uploadForm.get("img").value);
    this.contenuService.ajouterContenu(this.contenu).subscribe(
      data => {
        let id: any = data;
        // this.feedBack = data;
        // alert(this.feedBack.msg);
        formData.append("id", id);
        this.contenuService.uploadContenuImg(formData).subscribe(data => {
          this.router.navigateByUrl("/contenu");
        });
      },
      err => console.log(err)
    );
  }
}
