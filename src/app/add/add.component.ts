import { Component, OnInit } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { YoutubersService } from "../youtubers.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-add",
  templateUrl: "./add.component.html",
  styleUrls: ["./add.component.css"]
})
export class AddComponent implements OnInit {
  checkoutForm;

  constructor(
    private formBuilder: FormBuilder,
    public youtubersService: YoutubersService,
    private router: Router
  ) {
    this.checkoutForm = this.formBuilder.group({
      name: "",
      followers: "",
      description: ""
    });
  }

  ngOnInit() {}

  onSubmit(data) {
    console.warn("your order has been submitted", data);
    this.youtubersService.addYoutuber(data);
    this.checkoutForm.reset();
    this.router.navigate(["/youtubers"]);
  }
}
