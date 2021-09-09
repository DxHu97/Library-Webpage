function findAuthorById(authors, id) {
  let result = authors.find(author => author.id === id)
  return result
}

function findBookById(books, id) {
  return books.find(book=> book.id === id)
}

function partitionBooksByBorrowedStatus(books) {
  const returned = []
  const checkedOut = []
books.forEach(book=> {
  if (book.borrows[0].returned){
    returned.push(book)
  }
  else {
  checkedOut.push(book)
  }
})
const item = [checkedOut, returned]
return item
}
function matches(book, accounts){
  let match = accounts.find(account=> account.id === book.id)
    match['returned'] = book.returned
  return match
}

function getBorrowersForBook(book, accounts) {
  let results = []
  book.borrows.forEach(books => {
    results.push(matches(books, accounts))
  }, 0)
  return results.slice(0,10);
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};