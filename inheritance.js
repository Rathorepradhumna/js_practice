class Publication{
    constructor(title,author , pubDate){
        this.title = title;
        this.author = author;
        this.pubDate = this.pubDate;
    }
    print(){
        console.log(`Title : ${this.title}
        By : ${this.author} 
        DAte : ${this.pubDate}`);
    }
}
class Book extends Publication{
    constructor(bookDetails){
     super(
         bookDetails.title,
        bookDetails.author,
        bookDetails.pubDate,
     );
     this.publisher = bookDetails.publisher;
     this.ISBN = bookDetails.ISBN;
    }
    print()
    {
        super.print();
        console.log(`
        Publisher : ${this.publisher}
        ISBN : ${this.ISBN}`);
    }
}
class BlogPost extends Publication{
    constructor(title,author,pubDate,URL)
    {
        super(title,author,pubDate,URL);
        this.URL =URL;
    }
    print(){
        super.print();
        console.log(this.URL);
    }
}
var VDKJS = new Book({
    title : "You should know js",
    author : "Pradhumna rathore",
    pubDate : "aug 2020",
    publisher : "O'Reilly" , 
    ISBN : "122345-678"
});
VDKJS.print();

var forAgainstLet = new BlogPost(
    "for and against let" , 
    "pradhumna",
    "oct 27 , 2014",
    "http://sdad.name"
);
forAgainstLet.print();