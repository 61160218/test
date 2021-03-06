//Load Driver
const  MongoClient  = require('mongodb').MongoClient

//Crate MongoDB Client
const url = 'mongodb+srv://superadmin:0801072815tk@cluster0.utz8k.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
const client = new MongoClient(url, {useNewUrlParser: true})

const express = require('express')
const app = express()

app.use(express.json())
let books = []

app.get('/books', (req, res) => {
    
    res.status(200).json(books)
})

app.get('/books/:id', (req, res) =>{
    
    let id = req.params.id
    
     let book = {} 

    
    res.status(200).json(book)

})

app.post('/books', (req, res) => { 

    
    let newtitle = req.body.title  
    let newprice = req.body.price 
    let newunit = req.body.unit 
    let newisbn = req.body.isbn 
    let newimageurl = req.body.imageurl 

    let newBook = {
        title: newtitle, 
        price: newprice,
        unit: newunit,
        isbn: newisbn,
        imageurl: newimageurl,
    }
    let bookID = 0

   books.push(newBook) 
   bookID = books.length - 1 

    res.status(201).json(bookID)
})

const port = 3000
app.listen(port, () => console.log(`Server started again at ${port}`))