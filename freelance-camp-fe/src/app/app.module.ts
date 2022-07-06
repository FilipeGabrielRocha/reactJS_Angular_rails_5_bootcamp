import { NgModule } from '@angular/core';

// ROTAS - DECLARATIONS
import { HomepageComponent } from './homepage/homepage.component';
import { AppComponent } from './app.component';
import { DocumentsComponent } from './documents/documents.component';
import { ProposalListComponent } from './proposal/proposal-list.component';
import { ProposalNewComponent } from './proposal/proposal-new.component';

// USO - IMPORTS
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    HomepageComponent,
    DocumentsComponent,
    ProposalListComponent,
    ProposalNewComponent
  ],
  bootstrap: [
    AppComponent
  ],
  providers: [

  ],
})
export class AppModule { }
