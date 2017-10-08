/**
 * A class that represents a Library object, which itself is a 
 * collection of Books.
 */
class Library {
    constructor (){
        this.Books = [];
        this.Count = 0;
    }

    AddSingleBook(book){
        this.Books.push(book);
        this.Count++;
    }
    
    AddBooks(booksCollection){
        //TODO(dca): Add guard clauses to check for empty books
    }

    toString(){
        var book = (this.Count <= 1) ? "book" : "books";
        return `The Library contains ${this.Count} ${book}.`
    }
}