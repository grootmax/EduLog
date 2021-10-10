// Firebase Config
var firebaseConfig = {
  apiKey: "AIzaSyAhj3X8tJMsff7fb49ARWg6F3kHWMdr3zY",
  authDomain: "blog-82e13.firebaseapp.com",
  projectId: "blog-82e13",
  storageBucket: "blog-82e13.appspot.com",
  messagingSenderId: "667486544559",
  appId: "1:667486544559:web:cf0c9fe41e518694f5ea5a"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

let postCollection = document.querySelector("#posts-collection");

const db = firebase.firestore();

function createPost(title, time, content) {
  let div = document.createElement("div");
  div.setAttribute("class", "col-md-4");

  let h2 = document.createElement("h2");
  let p = document.createElement("p");
  let small = document.createElement("small");

  h2.textContent = title;
  small.textContent = time;
  p.textContent = content;

  div.appendChild(h2);
  div.appendChild(small);
  div.appendChild(p);

  postCollection.appendChild(div);
}

// Get Posts
function getPosts() {
  db.collection("posts")
    .get()
    .then(snapshot => {
      snapshot.docs.forEach(docs => {
        createPost(
          docs.data().postName,
          docs.data().createdAt,
          docs.data().postContent
        );
      });
    })
    .catch(err => {
      console.log(err);
    });
}

getPosts();
