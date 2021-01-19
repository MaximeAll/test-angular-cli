import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";
import { YoutuberComponent } from "./youtuber/youtuber.component";
import { YoutubersService } from "./youtubers.service";
import { RouterModule } from "@angular/router";
import { AddComponent } from "./add/add.component";
import { SalariesService } from "./salaries.service";
import { SalariesComponent } from "./salaries/salaries.component";

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot([
      { path: "youtubers", component: YoutuberComponent },
      { path: "add", component: AddComponent },
      { path: "salaries", component: SalariesComponent },
      { path: "**", redirectTo: "", pathMatch: "full" }
    ])
  ],
  declarations: [
    AppComponent,
    HelloComponent,
    YoutuberComponent,
    AddComponent,
    SalariesComponent
  ],
  bootstrap: [AppComponent],
  providers: [YoutubersService, SalariesService]
})
export class AppModule {}
