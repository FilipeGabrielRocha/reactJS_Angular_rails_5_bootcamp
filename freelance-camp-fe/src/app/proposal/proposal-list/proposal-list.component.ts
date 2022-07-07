import { Component, OnInit } from "@angular/core";
import { Proposal } from "../proposal";
import { Router } from "@angular/router";
import { Observable } from "rxjs";
import { ProposalService } from "../proposal.service";

@Component({
  selector: "proposal-list",
  templateUrl: "proposal-list.component.html",
  styleUrls: ['./proposal-list.component.css'],
  providers: [ ProposalService ]
})


export class ProposalListComponent implements OnInit {
  proposals: Proposal[];
  mode = "Observable";
  errorMessage: string | undefined;

  constructor(
    private proposalService: ProposalService,
    private router: Router
  ){}

  ngOnInit() {
    let timer = Observable.timer(0, 5000);
    timer.subscribe(() => this.getProposals());
  }

  getProposals() {
    this.proposalService.getProposals().subscribe(
      proposals => this.proposals = proposals,
      error => this.errorMessage = <any>error
    );
  }

  goToShow(proposal: Proposal): void {
    let link = ['/proposal', proposal.id];
    this.router.navigate(link);
  }

}
