function getTotalBooksCount(books) {
  let counter = 0
  books.forEach(book => counter += 1)
  return counter
}

function getTotalAccountsCount(accounts) {
  let counter = 0
  accounts.forEach(account => counter += 1 )
  return counter
}

function getBooksBorrowedCount(books) {
let counter = 0
books.forEach(book => {
  if (book.borrows[0].returned === false)counter++
  })
  return counter
}

function getMostCommonGenres(books) {
  let mostCommon = []
  books.map((book)=> book.genre).forEach(genres=> {
   const genreExist = mostCommon.findIndex((exist)=> exist.name === genres);
   if (genreExist >= 0){
     mostCommon[genreExist].count += 1
   }
   else {
     mostCommon.push({name: genres, count: 1});
   }
  } );
  mostCommon.sort((genreA, genreB) => genreA.count > genreB.count ? -1 : 1);
  return (mostCommon.slice(0,5));
}

function getMostPopularBooks(books) {
  let mostPopB = []
  books.forEach(book=> {
      const amounts = book.borrows.length
      mostPopB.push({name: book.title, count: amounts});
  })
  mostPopB.sort((countA, countB) => countA.count > countB.count ? -1 : 1);
  return (mostPopB.slice(0,5));
}

function getBorrowersForBook(book, accounts) {
  let results = []
  book.borrows.forEach(books => {
    results.push(matches(books, accounts))
  }, 0)
  return results.slice(0,10);
}

function getMostPopularAuthors(books, authors) {
  const authorList = books.reduce((acc, {authorId, borrows}) => {
  const object = authors.find(author=> author.id === authorId)
  const name = `${object.name.first} ${object.name.last}`
  const count = borrows.length
  const authorExists = acc.find(writer => writer.name === name)
  if (authorExists){
    authorExists.count += count
  }
  else {
    const newAuthor = {name, count};
    acc.push(newAuthor)
  }
  return acc;
}, []);
authorList.sort((countA, countB)=> countB.count - countA.count)
return authorList.slice(0,5);
}
module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
