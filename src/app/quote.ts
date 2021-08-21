export class Quote {
    id:number;
    author:string;
    quote:string;
    quoteDetails:string;
    showDetails:boolean;

    constructor(id:number,author:string,quote:string, quoteDetails:string,public completeDate: Date  )
    {
        this.id = id;
this.author = author;
this.quote = quote;
this.quoteDetails = quoteDetails;
this.showDetails = false;

}
}
