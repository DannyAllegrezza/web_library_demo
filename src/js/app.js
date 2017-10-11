(function () {
    const url = "";
    var library = new Library();

    // Fetch the data so we can load it later
    HttpRequest.PerformGetRequest(url)
        .then(createBooksFromJson)
        .then(addBooksToLibrary)
        .then(addLibraryToDOM)
        .catch(function (error) {
            console.log("An error occurred");
            console.log(error);
        });

    function createBooksFromJson(json) {
        var booksCollection = [];

        var books = new Promise(function (resolve, reject) {
            if (json == null) {
                reject(Error("JSON was null"));
            }

            json.forEach(function (element) {
                let book = new Book(element.author, element.title, element.year, element.isbn);
                booksCollection.push(book);
            }, this);
        });

        return booksCollection;
    }

    function addBooksToLibrary(booksCollection) {
        library.AddBooks(booksCollection);
    }

    function addLibraryToDOM() {
        // Update the title
        let title = document.getElementById('title');
        title.innerHTML = library.toString();

        let tableBody = document.getElementById('table-body');
        let html = '';
        // Create rows to put inside the table
        library.Books.forEach(function (element) {
            html += `<tr>
                        <td>${element.Title}</td>
                        <td>${element.Author}</td>
                        <td>${element.Year}</td>
                        <td>${element.ISBN}</td>
                    </tr>`;
        }, this);
        tableBody.innerHTML = html;
    }
}());