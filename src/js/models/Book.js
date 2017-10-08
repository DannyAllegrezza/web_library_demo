/**
 * A class that represents a Book. 
 */
class Book {
    constructor(author, title, year, isbn){
        this.Author = author;
        this.Title = title;
        this.Year = year;
        this.ISBN = isbn;
    }

    toString(){
        return `${this.Title} by ${this.Author} published in ${this.Year} has an ISBN of ${this.ISBN}.`;
    }
}