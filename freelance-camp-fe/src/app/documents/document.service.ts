import { Injectable } from "@angular/core";
import { Http, Response, Headers, RequestOptions } from "@angular/http";
import { Observable } from "rxjs/Rx";

import { Document } from "./documents";


@Injectable()
export class DocumentService {
  private documentsUrl = 'http://localhost:3000/freelance_documents.json';

  constructor(
    private http: Http
  ){}

  getDocuments(): Observable<Document[]> {
    return this.http.get(this.documentsUrl).map((response: Response) => <Document[]>response.json()).catch(this.handleError);
  }

  private handleError (error: Response | any) {
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}
