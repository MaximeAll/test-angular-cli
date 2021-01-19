import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { YoutubersService } from "../youtubers.service";

@Component({
  selector: "app-youtuber",
  templateUrl: "./youtuber.component.html",
  styleUrls: ["./youtuber.component.css"]
})
export class YoutuberComponent implements OnInit {
  @Output() notify = new EventEmitter();

  @Input() title: string;

  youtubers: {
    id: number;
    name: string;
    followers: number;
    description: string;
  }[];

  constructor(public youtubersService: YoutubersService) {
    this.youtubers = youtubersService.getYoutuberList();
  }

  ngOnInit() {
    //this.youtubers = history.state.data;
  }

  Sub(name) {
    alert("like " + name);
  }
}
