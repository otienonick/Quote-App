export class Quote {
    author:string;
    quote:string;
    quoteDetails:string;
    showDetails:boolean;

    constructor(author:string,quote:string, quoteDetails:string,public completeDate: Date  )
    {
this.author = author;
this.quote = quote;
this.quoteDetails = quoteDetails;
this.showDetails = false;

}
}
