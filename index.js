//Object literals: These are comma-separated lists of name-value pairs wrapped in curly braces.

// const book1 = {
//   title: 'Book One',
//   author: 'John Doe',
//   year: '2013'
// }

//If we want to create multiple object literals of the same type, we can use constructor for ease.

//Constructor:

class Book {
  constructor (title, author, year) {
    this.title = title
    this.author = author
    this.year = year
  }

  getSummary() {
    return `${this.title} is written by ${this.author} in ${this.year}`
  }
  //Once a new instance of the object is instantiated, the object will contain a property called prototype. Prototypical interitance allows objects of the same type to share a set of methods or functions assigned to the object class.

  static topStore() {
    return 'Amazon'
  }
  //we can use static methods to create methods on the entire class (similar to class methods in ruby vs instance methods)
}

const book1 = new Book('Milk & Honey', 'Rupi Kaur', '2016')

console.log(book1)

//subclasses

class Magazine extends Book {
  constructor(title, author, year, month) {
    super(title, author, year)
    this.month = month
  }
}

const mag1 = new Magazine('abc', 'Thao Pham', '1999', 'January' )

console.log(mag1.getSummary())
