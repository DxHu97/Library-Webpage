function findAccountById(accounts, id) {
  let accountObject = accounts.find(ids => ids.id === id)
  return accountObject
  }
function sortAccountsByLastName(accounts) {
  return accounts.sort((lastNameA, lastNameB) => lastNameA.name.last > lastNameB.name.last ? 1 : -1)
  }

function getTotalNumberOfBorrows({id}, books) {
    let result = books.reduce((acc, book) => {
      return (acc + book.borrows.filter(borrow => 
      id === borrow.id).reduce((borrowAcc, borrow) => borrowAcc + 1, 0)
    );
    }, 0);
    return result
    } 


function getBooksPossessedByAccount({id}, books, authors) {
  //find all books currently checked out by given account
  //If the book is true with match then push book into a new array
  //push author into each book object within the array then return original array to complete function
   let taken = []
  books.forEach(book=>{
    if (book.borrows.find(borrow => borrow.id === id && !borrow.returned)){
      taken.push(book);
    }
  })            
      taken.forEach(book => {
      let authorz = authors.find(matched=> book.authorId === matched.id);
      book.author = authorz
    })
  return taken
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
