import { Component } from "@angular/core";
import { Proposal } from "./proposal";

@Component({
  selector: "proposal-list",
  templateUrl: "proposal-list.component.html"
})

export class ProposalListComponent {
  proposalOne: Proposal = new Proposal(1, 'Abc Company', 'http://portfolio.jordanhudgens.com', 'Ruby on Rails', 150, 120, 15, 'filiperochaprogramador@gmail.com')
  proposalTwo: Proposal = new Proposal(2, 'Cba Company', 'http://portfolio.jordanhudgens.com', 'Ruby on Rails', 150, 120, 15, 'filiperochaprogramador@gmail.com')
  proposalThree: Proposal = new Proposal(3, 'Bac Company', 'http://portfolio.jordanhudgens.com', 'Ruby on Rails', 150, 120, 15, 'filiperochaprogramador@gmail.com')

  proposals: Proposal[] = [
    this.proposalOne,
    this.proposalTwo,
    this.proposalThree
  ]
}
