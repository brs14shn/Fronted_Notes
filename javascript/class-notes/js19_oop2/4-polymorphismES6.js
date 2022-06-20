//* ======================================================
//*     OOP -  Polymorphism(ES6)
//* ======================================================

//* Polymorphism, bir degisken, fonksiyon veya nesnenin çoklu sekiller
//* alabilmesini tanimlayan bir nesne-yonelimli programlama teknigidir.
//* Polymorphism, genellikle Overloading ve Overriding(Parentın bir fonksiyonu ezilir) gibi alt kavramlar
//* ile bilinir.

class Book {
  constructor(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
  }
  getSummary() {
    return `${this.title} was written by ${this.author} in ${this.year} `};
  setPrice(price){
      const taxRate=1.1;
      this.price=(price*taxRate).toFixed(2)
    }
  }


//? instance
const book1 = new Book('Kasagi', 'Omer Seyfettin', 1920);
const book2 = new Book('Sinekli Bakkal', 'H.Edip Adıvar', 1910);
console.log(book1);

//? Sub-Class tanimlamasi
class Magazine extends Book {
  constructor(title, author, year, month) {
    //! Book'un constructor'i cagrildi
    super(title, author, year); //! Book'un prototpye kopyalnmis oldu
    this.month = month;
  }
  //! overrided 
  getSummary(){
    return `${this.title} was written by ${this.author} in ${this.year} in ${this.month} `;

  }
  setPrice(price,taxRate){
   //! parametre sayılarının farklı olması 
    this.price=(price*taxRate).toFixed(2)
  }
}

const mag1 = new Magazine('Kasagi', 'Omer Seyfettin', 1940, 'Nov');
console.log(mag1);
console.log(mag1.getSummary());//* kalıtım olduğundan gelir
console.log(mag1.setPrice())
mag1.setPrice(100,1.2);
console.log(mag1);