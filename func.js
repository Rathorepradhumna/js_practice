function publication(title,author ,pubDate) {
    var publicAPI = {
        print() {
            
                console.log(`
                Title :${title}
                By : ${author}
                ${pubDate}
                `);
            }
        };
    return publicAPI;
}
function Book(bookDetails) {
    var pub = publication(bookDetails.title,bookDetails.author,bookDetails.publishedOn);
    var publicAPI = {
        print(){
            pub.print();
            console.log(`
            Publisher : ${bookDetails.publisher}
            ISBN : ${bookDetails.ISBN}
            `);
        }
    };
    return publicAPI;
}
function BlogPost(title, authore , pubDate,URL) {
    var pub = publication(title, author,pubDate);

    var publicAPI = {
        public(){
            pub.print();
            console.log(URL);
        }
    };
    return publicAPI;
}
var ydkjs = Book({
    title : "you dont know js",
    author : "pradhumna",
    publishedOn : "june 2014",
    publisher : "O reilly",
    ISBN : "12345-678"
});
ydkjs.print();