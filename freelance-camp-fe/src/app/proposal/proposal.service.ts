import { Injectable } from "@angular/core";
import { Http, Response, Headers, RequestOptions } from "@angular/http";
import { Observable } from "rxjs/Rx";

import { Proposal } from "./proposal";


@Injectable()
export class ProposalService {
  private proposalsUrl = 'http://localhost:3001/proposal';

  constructor(
    private http: Http
  ){}

  getProposals(): Observable<Proposal[]> {
    return this.http.get(this.proposalsUrl).map((response: Response) => <Document[]>response.json()).catch(this.handleError);
  }

  getProposal(id: number) {
    return this.http.get(this.proposalsUrl + "/" + id + '.json');
  }

  createProposal(proposal) {
    let headers = new Headers ({ 'Contente-Type': 'application/json' });
    let options = new ResquestOptions({ headers: headers});
    return this.http.post(this.proposalsUrl, JSON.stringify(proposal), { headers: headers }).map((res: Response) => res.json());
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
