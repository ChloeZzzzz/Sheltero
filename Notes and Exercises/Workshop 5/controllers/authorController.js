const mongoose = require("mongoose");

// import author model
const Author = mongoose.model("author");

const db = mongoose.connection;

    
// function to handle a request to get all authors
const getAllAuthors = async (req, res) => {
  try {
    const all_authors = await Author.find();
    return res.send(all_authors);
  } catch (err) {
    res.status(400);
    return res.send("Database query failed");
  }
};

// function to modify author by ID
const updateAuthor = async (req, res) => {
  try{
    const new_author = await new Author.findOneAndUpdate({_id: req.params.id},{
      first_name: req.body.author_fn,
      last_name: req.body.author_ln,
    });
    console.log(new_author);
   }
   catch(err){
    res.status(400);
    return res.send("Database query failed");
   }
   res.redirect('/');
};

// function to add author
const addAuthor = async (req, res) => {
 try{
    db.once("open",()=>{
      const new_author = new Author({
        first_name: req.body.author_fn,
        last_name: req.body.author_ln,
      });
      new_author.save((err,res)=>{
        if(err){
          console.log(err);
          return res.send("Something went wrong :(");
        }
        console.log(new_author._id+"have been saved to DB");
      });
    })
 }
 catch(err){
  res.status(400);
  return res.send("Database query failed");
 }
 res.redirect('/');
};

// function to get author by id
const getAuthorByID = async (req, res) => {
  try{
    const search_id = req.params.id;
    const author = await Author.findById(search_id);
    return res.send(author);
  }
  catch(err){
    res.status(400);
    return res.send("Database query failed");
  }

};

// remember to export the functions
module.exports = {
  getAllAuthors,
  getAuthorByID,
  addAuthor,
  updateAuthor
};
