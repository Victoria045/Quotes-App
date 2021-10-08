export class Quote {
  public upvotes:number
  public downvotes:number
  showDetails: boolean;
  // constructor(public name:string, public author:string,public description:string,public postedDate: Date)
  constructor(public publisher:string, public quote:string, public author:string,public postedDate: Date){
    this.upvotes =0;
    this.downvotes =0;
    this.showDetails=false;
  }
}
