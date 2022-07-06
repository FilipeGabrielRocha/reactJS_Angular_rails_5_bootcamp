import { Component } from "@angular/core";
import { Document } from "./documents";

@Component({
  selector: 'documents',
  templateUrl: './documents.component.html'
})

export class DocumentsComponent {
  pageTitle: string = "Document Dashboard"
  documents: Document[] = [
    {
      title: "My First Doc",
      description: "Qualquer coisa",
      file_url: "http://google.com",
      updated_at: "11/11/16",
      image_url: "http://google.com"
    },
    {
      title: "My Second Doc",
      description: "Qualquer coisa",
      file_url: "http://google.com",
      updated_at: "11/11/16",
      image_url: "http://google.com"
    },
    {
      title: "My Last Doc",
      description: "Qualquer coisa",
      file_url: "http://google.com",
      updated_at: "11/11/16",
      image_url: "http://google.com"
    }
  ]
}
