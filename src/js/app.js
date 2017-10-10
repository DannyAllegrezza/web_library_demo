(function () {
    const url = "";
    var library = new Library();
    
    // Fetch the data so we can load it later
    HttpRequest.PerformGetRequest(url)
    .then(function(result){
        result.forEach(function(element) {
            let book = new Book(element.author, element.title, element.year, element.isbn);
            library.AddSingleBook(book);
        }, this);
        // Display to console
        library.PrintBooksToConsole();
    })
    .catch(function(error){
        console.log("An error occurred");
        console.log(error);
    });
}());