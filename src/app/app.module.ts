import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavFileComponent } from './nav-file/nav-file.component';
import { NavConceptComponent } from './nav-concept/nav-concept.component';
import { ContentConceptComponent } from './content-concept/content-concept.component';
import { ContentConceptExampleComponent } from './content-concept-example/content-concept-example.component';
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    NavFileComponent,
    NavConceptComponent,
    ContentConceptComponent,
    ContentConceptExampleComponent
  ],
    imports: [
        BrowserModule,
        NgbModule,
        FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
