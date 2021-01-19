import { Component, OnInit } from "@angular/core";
import { SalariesService } from "../salaries.service";
import { FormBuilder } from "@angular/forms";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-salaries",
  templateUrl: "./salaries.component.html",
  styleUrls: ["./salaries.component.css"]
})
export class SalariesComponent implements OnInit {
  pourcentage: Number;
  taux: Number;
  checkoutForm;

  constructor(
    private formBuilder: FormBuilder,
    public salariesService: SalariesService,
    private http: HttpClient
  ) {
    this.checkoutForm = this.formBuilder.group({
      salary: ""
    });
  }

  ngOnInit() {}

  onSubmit(data) {
    var retour = this.salariesService.ReturnPourcentage(data);
    if (retour !== null) {
      this.pourcentage = retour;
      this.http
        .get("https://api.exchangerate-api.com/v4/latest/USD")
        .subscribe(result => {
          this.taux = result["rates"]["EUR"];
        });
    } else {
      this.pourcentage = null;
      alert("Une Erreur s'est produite");
    }
    this.checkoutForm.reset();
  }
}
