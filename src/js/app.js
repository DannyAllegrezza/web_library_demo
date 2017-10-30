(function () {
    const url = "";
    var library = new Library();

    // Fetch the data so we can load it later

    HttpRequest.PerformGetRequest(url)
        .then(createBooksFromJson)
        .then(addBooksToLibrary)
        .then(setupEventListeners)
        .then(addLibraryToDOM)
        .catch(function (error) {
            console.log("An error occurred");
            console.log(error);
        });


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
        library.FilteredBooks.forEach(function (element) {
            html += `<tr>
                        <td>${element.Title}</td>
                        <td>${element.Author}</td>
                        <td>${element.Year}</td>
                        <td>${element.ISBN}</td>
                    </tr>`;
        }, this);
        tableBody.innerHTML = html;
    }

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

    function handleSearch() {
        var userQuery = document.getElementById("search-input");
        console.log(userQuery.value);
        
        library.FilterBooks(userQuery.value);
        addLibraryToDOM();

    }

    function setupEventListeners() {
        // Add event listeners to th elements so user can filter on-click
        var tableHeaders = document.querySelectorAll("a#sortable-th");
        for (var i = 0; i < tableHeaders.length; i++) {
            tableHeaders[i].addEventListener('click', function () {
                library.SortBooksByProperty(this);
                addLibraryToDOM();
            }, false);
        }
        // Add event listener to search button
        var searchButton = document.getElementById("search-form");
        searchButton.addEventListener('submit', function (e) {
            e.preventDefault();
            handleSearch();
        }, false);
        // Add event listener to input field
        var userQuery = document.getElementById("search-input");
        userQuery.addEventListener('input', handleSearch, false);
        
    }
}());