/**
 * A class that represents a Library object, which itself is a 
 * collection of Books.
 */
class Library {
    constructor() {
        var self = this;
        this.Books = [];
        this.FilteredBooks = [];
        this.Count = 0;
    }

    FilterBooks(searchKey) {
        this.FilteredBooks = this.Books.filter(function (obj) {
            return Object.keys(obj).some(function (key) {
                return obj[key].includes(searchKey);
            })
        });
    }
    /**
     * Adds a single book to the Libraries collection
     * @param {*} book 
     */
    AddSingleBook(book) {
        this.Books.push(book);
        this.FilteredBooks.push(book);        
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

    /**
     * Sorts the requested property in ascending order, then sets the sort order to "Descending"
     */
    SortBooksByPropertyAscending(property) {
        let prop = property.dataset.bookatr;
        //console.log("SortBooksByPropertyAscending(): property = " + prop);
        this.Books.sort((a, b) => (a[prop] > b[prop]) ? 1 : -1);
        property.dataset.sortorder = "desc";
    }

    /**
     * Sorts the requested property in descending order, then sets the sort order to "Ascending"
     */
    SortBooksByPropertyDescending(property) {
        let prop = property.dataset.bookatr;
        //console.log("SortBooksByPropertyDescending(): property = " + prop);
        this.Books.sort((a, b) => (a[prop] > b[prop]) ? -1 : 1);
        property.dataset.sortorder = "asc";
    }

    /**
     * Sorts the internal Books collection based on attribute and requested sort order
     * @param {*} property 
     */
    SortBooksByProperty(property) {
        let prop = property.dataset.bookatr;
        let sort = property.dataset.sortorder;

        switch (sort) {
            case "asc":
                this.SortBooksByPropertyAscending(property);
                break;
            case "desc":
                this.SortBooksByPropertyDescending(property);
                break;
            default:
                this.SortBooksByPropertyAscending(property);
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
        var filteredCount = (this.FilteredBooks.length > 0) ? this.FilteredBooks.length : 0;

        return `The Library contains ${this.Count} ${book}. Currently showing ${filteredCount} / ${this.Count}.`;
    }
}