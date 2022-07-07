import { Component } from "@angular/core";
import { Document } from "./documents";

@Component({
  selector: 'documents',
  templateUrl: './documents.component.html',
  styleUrls: ["./documents.component.css"]
})

export class DocumentsComponent {
  pageTitle: string = "Document Dashboard"
  documents: Document[] = [
    {
      title: "My First Doc",
      description: "Qualquer coisa",
      file_url: "https://tiwebdesign.com.br/imagens/ckeditor/08-01-2018-11-11-27-freelancer.jpg",
      updated_at: "11/11/16",
      image_url: "https://tiwebdesign.com.br/imagens/ckeditor/08-01-2018-11-11-27-freelancer.jpg"
    },
    {
      title: "My Second Doc",
      description: "Qualquer coisa",
      file_url: "http://google.com",
      updated_at: "11/11/16",
      image_url: "https://tiwebdesign.com.br/imagens/ckeditor/08-01-2018-11-11-27-freelancer.jpg"
    },
    {
      title: "My Last Doc",
      description: "Qualquer coisa",
      file_url: "http://google.com",
      updated_at: "11/11/16",
      image_url: "https://tiwebdesign.com.br/imagens/ckeditor/08-01-2018-11-11-27-freelancer.jpg"
    }
  ]
}
