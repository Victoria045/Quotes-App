export class Quote {
  public upvotes:number
  public downvotes:number
  showDetails: boolean;
  
  constructor(public publisher:string, public quote:string, public author:string,public postedDate: Date){
    this.upvotes =0;
    this.downvotes =0;
    this.showDetails=false;
  }
}
