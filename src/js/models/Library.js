/**
 * A class that represents a Library object, which itself is a 
 * collection of Books.
 */
class Library {
    constructor() {
        var self = this;
        this.Books = [];
        this.Count = 0;
    }

    /**
     * Adds a single book to the Libraries collection
     * @param {*} book 
     */
    AddSingleBook(book) {
        this.Books.push(book);
        this.Count++;
    }

    /**
     * Adds a collection of books to the Library
     * @param {*} booksCollection 
     */
    AddBooks(booksCollection) {
        //TODO(dca): Add guard clauses to check for empty books
        booksCollection.forEach(function (book) {
            this.AddSingleBook(book);
        }, this);
    }

    SortBooksByProperty(property) {
        let prop = property.text.toLowerCase();
        switch (prop) {
            case "title":
                console.log("title clicked");
                break;
            case "author":
                console.log("author clicked");
                break;
            case "year published":
                console.log("year published clicked");
                break;
            case "isbn":
                console.log("isbn clicked");
                break;
            default:
                break;
        }
    }

    PrintBooksToConsole() {
        this.Books.forEach(function (book) {
            console.log(book);
        }, this);
    }

    toString() {
        var book = (this.Count <= 1) ? "book" : "books";
        return `The Library contains ${this.Count} ${book}.`;
    }
}