var books = document.querySelectorAll(".books");
console.log(books);

for (let i = 0; i < books.length; i++) {

    book = books[i];

    var tdBookYear = book.querySelector(".bookYear");
    var bookYear = tdBookYear.textContent;

    var tdMovieYear = book.querySelector(".movieYear");
    var movieYear = tdMovieYear.textContent;

    var tdGap = book.querySelector(".gap");

    var gap = movieYear - bookYear;

    tdGap.textContent = `${gap} years`;
}
