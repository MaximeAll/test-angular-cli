import { Component } from "@angular/core";
import { YoutubersService } from "./youtubers.service";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "Mes Youtubers";
  youtubers: {
    id: number;
    name: string;
    followers: number;
    description: string;
  }[];

  constructor(public youtubersService: YoutubersService) {
    this.youtubers = youtubersService.getYoutuberList();
  }

  Sub(name) {
    alert("like " + name);
  }
}
