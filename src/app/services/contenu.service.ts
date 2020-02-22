import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class ContenuService {
  public host = "http://localhost:8080";
  constructor(private http: HttpClient) {}

  public getAllBlocs() {
    return this.http.get(this.host + "/getAllBlocs");
  }
  public getOnlyBlocs() {
    return this.http.get(this.host + "/blocs?sort=ordre");
  }
  public addBloc(bloc) {
    return this.http.post(this.host + "/ajouterBloc", bloc);
  }
  public updateBloc(id, categ) {
    return this.http.put(this.host + `/modifierBloc?id=${id}`, categ);
  }

  public deleteBloc(url) {
    return this.http.delete(url);
  }

  public getContenus() {
    return this.http.get(this.host + "/contenus?projection=contenuBloc");
  }
  public getContenuParId(id) {
    return this.http.get(this.host + "/contenus/" + id);
  }
  public getBlocParContenu(url) {
    return this.http.get(url);
  }
  public getBlocParId(id) {
    return this.http.get(
      this.host + `/blocs/${id}/contenus?projection=contenuBloc`
    );
  }
  public getContenuParBloc(id) {
    return this.http.get(
      this.host + `/blocs/${id}/contenus?projection=contenuBloc`
    );
  }
  public ajouterContenu(contenu) {
    return this.http.post(this.host + "/ajouterContenu", contenu);
  }
  public updateContenu(id, contenu) {
    return this.http.put(this.host + "/modifierContenu?id=" + id, contenu);
  }

  public uploadContenuImg(img) {
    // let headers = new HttpHeaders({
    //   "Content-Type": "multipart/form-data"
    // });
    console.log(img.get("id"));
    return this.http.post(this.host + "/upload", img);
  }

  public deleteContenu(id) {
    return this.http.delete(this.host + `/supprimerContenu?id=${id}`);
  }
}
