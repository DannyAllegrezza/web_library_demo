/**
 * A class that represents a Book. 
 */
class Book {
    constructor(author, title, year, isbn){
        this.Author = Sanitize(author);
        this.Title = Sanitize(title);
        this.Year = Sanitize(year);
        this.ISBN = Sanitize(isbn);

        function Sanitize(prop){
            if(!prop){
                return "N/A";
            }
    
            return prop;
        }
    }

    toString(){
        return `${this.Title} by ${this.Author} published in ${this.Year} has an ISBN of ${this.ISBN}.`;
    }
}