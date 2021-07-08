//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const checkTitle = require(__dirname + "/checkTitle.js");


const homeStartingContent = "Lacus vel facilisis volutpat est velit egestas dui id ornare. Semper auctor neque vitae tempus quam. Sit amet cursus sit amet dictum sit amet justo. Viverra tellus in hac habitasse. Imperdiet proin fermentum leo vel orci porta. Donec ultrices tincidunt arcu non sodales neque sodales ut. Mattis molestie a iaculis at erat pellentesque adipiscing. Magnis dis parturient montes nascetur ridiculus mus mauris vitae ultricies. Adipiscing elit ut aliquam purus sit amet luctus venenatis lectus. Ultrices vitae auctor eu augue ut lectus arcu bibendum at. Odio euismod lacinia at quis risus sed vulputate odio ut. Cursus mattis molestie a iaculis at erat pellentesque adipiscing.";
const aboutContent = "Hac habitasse platea dictumst vestibulum rhoncus est pellentesque. Dictumst vestibulum rhoncus est pellentesque elit ullamcorper. Non diam phasellus vestibulum lorem sed. Platea dictumst quisque sagittis purus sit. Egestas sed sed risus pretium quam vulputate dignissim suspendisse. Mauris in aliquam sem fringilla. Semper risus in hendrerit gravida rutrum quisque non tellus orci. Amet massa vitae tortor condimentum lacinia quis vel eros. Enim ut tellus elementum sagittis vitae. Mauris ultrices eros in cursus turpis massa tincidunt dui.";
const contactContent = "Scelerisque eleifend donec pretium vulputate sapien. Rhoncus urna neque viverra justo nec ultrices. Arcu dui vivamus arcu felis bibendum. Consectetur adipiscing elit duis tristique. Risus viverra adipiscing at in tellus integer feugiat. Sapien nec sagittis aliquam malesuada bibendum arcu vitae. Consequat interdum varius sit amet mattis. Iaculis nunc sed augue lacus. Interdum posuere lorem ipsum dolor sit amet consectetur adipiscing elit. Pulvinar elementum integer enim neque. Ultrices gravida dictum fusce ut placerat orci nulla. Mauris in aliquam sem fringilla ut morbi tincidunt. Tortor posuere ac ut consequat semper viverra nam libero.";

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

const posts=[];

app.get("/", function(req, res){

  res.render('home', {
    startingContentEjs: homeStartingContent, 
    postsEjs: posts
  });
  //console.log(posts);
});

app.get("/about", function(req, res){
  res.render("about", {aboutContentEjs: aboutContent});
});

app.get("/contact", function(req, res){
  res.render("contact", {contactContentEjs: contactContent});
});

app.get("/compose", function(req, res){
  res.render("compose");
});

app.get("/posts/:postName", function(req, res){
  let title = req.params.postName;
  const checkTitleResults = checkTitle.checkTitle(title, posts);
  const checkTitleResult = checkTitleResults[0];
  //console.log(checkTitleResult);
  //console.log(res);
  if (checkTitleResult) {
    //console.log("Find the title a match: " + title);
    //title = checkTitle.formatTitle(title);
    res.render("post", {postTitleEjs: posts[checkTitleResults[1]].title, postContentEjs: posts[checkTitleResults[1]].content});
  } else {
    console.log("Cannot find the title: " + title); //TODO: will need a failure page
  }

});

app.post("/compose", function (req, res) {
  const post = {
    "title": req.body.titleContent,
    "content": req.body.postContent,
    "postID": Math.ceil(500 + Math.random()*500)
  };
  posts.push(post);
  res.redirect("/");
});



app.listen(3000, function() {
  console.log("Server started on port 3000");
});


