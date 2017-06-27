function pet() {
  console.log('small white')
}

class NoReturn {
  show() {
  	pet()
  }
}

const noReturn = new NoReturn()
noReturn.show()
