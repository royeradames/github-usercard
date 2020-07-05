import axios from 'axios';
/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
    https://api.github.com/users/austinkelsay
*/
//list of users to make a card off
const followersArray = ['royeradames', 'austinkelsay','tetondan', 'dustinmyers', 'justsml', 'luishrd', 'bigknell'];

//getting users information, and adding it to the dom
followersArray.forEach( item =>{
  axios.get(`https://api.github.com/users/${item}`)
  .then( response =>{
    let card = cards(response.data);
    document.querySelector('.cards').appendChild(card);
  });

})
/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3.
*/

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/
function cards(data){

//initializing card components
  const newCard = document.createElement('div');
  newCard.classList.add('card');

  const img = document.createElement('img');
  img.src = data.avatar_url;

  const cardInfo = document.createElement('div');
  cardInfo.classList.add('card-info');

  const name = document.createElement('h3');
  name.textContent = data.name;
  name.classList.add('name');

  const userName = document.createElement('p')
  userName.classList.add('user-name')
  userName.textContent = data.login;

  const location = document.createElement('p')
  location.textContent = data.location;
  
  const profile = document.createElement('p')
  profile.textContent = 'Profile: ';
  const profileLink = document.createElement('a')
  profileLink.href = data.html_url;
  profileLink.target = `_blank`;
  profileLink.textContent = `Address to users github page.`;
  

  const followers = document.createElement('p');
  followers.textContent = `Followers: ${data.followers}`;

  const following = document.createElement('p')
  following.textContent = `Following: ${data.following}`;
  
  
  const bio = document.createElement('p')
  //if there is no bio say that is coming soon
  if(data.bio === null){
    console.log('in null')
    bio.textContent = `Bio: Coming soon.`;
  }else{
    bio.textContent = `Bio: ${data.bio}`;
  }
  

  //assembling components
  newCard.appendChild(img);
  newCard.appendChild(cardInfo);
    cardInfo.appendChild(name);
    cardInfo.appendChild(userName);
    cardInfo.appendChild(location);
    cardInfo.appendChild(profile);
      profile.appendChild(profileLink);
    cardInfo.appendChild(followers);
    cardInfo.appendChild(following);
    cardInfo.appendChild(bio);

  return newCard;
}
/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/



/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

    <div class="card">
      <img src={image url of user} />
      <div class="card-info">
        <h3 class="name">{users name}</h3>
        <p class="username">{users user name}</p>
        <p>Location: {users location}</p>
        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>
*/

/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
