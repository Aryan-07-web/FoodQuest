const upperDiv = document.querySelector('#upper-div');
const mainDiv = document.querySelector('.container');

const GetTheAppButton = document.createElement('button');
GetTheAppButton.classList.add('upper-div-btn-1');
GetTheAppButton.innerText = 'Get the App';
upperDiv.appendChild(GetTheAppButton);

const investorRelationsButton = document.createElement('button');
investorRelationsButton.classList.add('upper-div-btn-2');
investorRelationsButton.innerText = 'Investor Relations'
upperDiv.appendChild(investorRelationsButton);

const AddRestaurantButton = document.createElement('button');
AddRestaurantButton.classList.add('upper-div-btn-3');
AddRestaurantButton.innerText = 'Add Restaurant'
upperDiv.appendChild(AddRestaurantButton);

const LogInButton = document.createElement('button');
LogInButton.classList.add('upper-div-btn-4');
LogInButton.innerText = 'Log in'
upperDiv.appendChild(LogInButton);

const SignUpButton = document.createElement('button');
SignUpButton.classList.add('upper-div-btn-5');
SignUpButton.innerText = 'Sign up'
upperDiv.appendChild(SignUpButton);

const Heading1 = document.createElement('h1');
Heading1.classList.add('Heading');
Heading1.innerText = 'Zomato';
upperDiv.appendChild(Heading1);

const subHeading1 = document.createElement('h2');
subHeading1.classList.add('SubHeading');
subHeading1.innerText = 'Discover the best food & drinks in Delhi NCR';
upperDiv.appendChild(subHeading1);

const SearchButton = document.createElement('input');
SearchButton.type = 'text';
SearchButton.placeholder = 'Search for restaurant, cuisine or a dish';
SearchButton.classList.add('Searching-btn');
upperDiv.appendChild(SearchButton);

SearchButton.addEventListener('keypress', function(event) {
  if (event.key === 'Enter') {
    const searchText = SearchButton.value;
    console.log('Search Text:', searchText); 
    SearchButton.value = ''; 
  }
});

// select the login button
const loginButton = document.querySelector('.upper-div-btn-4');
// whenever the login button is clicked
loginButton.addEventListener('click', function() {
  console.log('Login button clicked');

  document.body.innerHTML = '';
  document.body.style.backgroundColor = '#333333';
  // create a login form
  const loginForm = document.createElement('form');
  loginForm.classList.add('login-form');
  loginForm.innerHTML = `
    <button id='cross-button' onclick = 'HomePage()'>X</button>
    <h1 id='form-heading'>Login</h1>
    <input type="text" placeholder="Username" id='username'/>
    <br>
    <input type="password" placeholder="Password" id='password' />
    <br>
    <button id='form-button'onclick='CheckIfExists()'>Login</button>
    <br><br>
      <p id='logintext'>Create an account? </p><button id='other-form-link' onclick = 'FromLoginToSignUp()'>Sign up</button>
  `;
  document.body.appendChild(loginForm);
});
function HomePage() {
  const loginForm = document.querySelector('.login-form');
  loginForm.remove();
  document.body.innerHTML = ''; 
  document.body.style.backgroundColor = '#f8f8f8'; 
  document.body.appendChild(mainDiv); 
}
function CheckIfExists() {
  const username = document.querySelector('#username').value;
  const password = document.querySelector('#password').value;
  // prompt the user to enter the details
  if(username === '' || password === '') {
    alert('Please enter username and password');
    return;
  }
  // when the login procedure is successful
  if(localStorage.getItem(username) === password) {
    alert('Login successful !');
    HomePage();
    GreetUser(username);
  }
  else {
    alert('Invalid username or password');
  }
}
function GreetUser(username) {
  setTimeout(function() {
    alert('Welcome ' + username);
  }, 2000);
}
// select the signup button
const signupButton = document.querySelector('.upper-div-btn-5');
// whenever the signup button is clicked
signupButton.addEventListener('click', function() {
  console.log('Signup button clicked');

  document.body.innerHTML = '';
  document.body.style.backgroundColor = '#333333';
  // create a signup form
  const signupForm = document.createElement('form');
  signupForm.classList.add('signup-form');
  signupForm.innerHTML = `
    <button id='cross-button' onclick = 'HomePage()'>X</button>
    <h1 id='form-heading'>Sign up</h1>
    <input type="text" placeholder="Username" id='username'/>
    <br>
    <input type="text" placeholder="Email" id='email'/>
    <br>
    <input type="password" placeholder="Password" id='password' />
    <br>
    <button id='form-button'onclick='SignUpUser()'>Sign up</button>
    <br><br>
    <p id='text'>Already having an account? </p><button id='other-form-link' onclick = 'FromSignUpToLogin()'>Log in</button>
`;
document.body.appendChild(signupForm);
});
function SignUpUser() {
  const username = document.querySelector('#username').value;
  const email = document.querySelector('#email').value;
  const password = document.querySelector('#password').value;
  // prompt the user to enter the details
  if(username === '' || email === '' || password === '') {
    alert('Please enter username, email and password');
    return;
  }
  // when the signup procedure is successful
  localStorage.setItem(username, password);
  alert('Signup successful, Now you can login');
  HomePage();
}
// select the add restaurant button
const addRestaurantButton = document.querySelector('.upper-div-btn-3');
// whenever the add restaurant button is clicked
addRestaurantButton.addEventListener('click', function() {
  console.log('Add restaurant button clicked');
});

function FromLoginToSignUp(){
  const loginForm = document.querySelector('.login-form');
  loginForm.remove();
  document.body.innerHTML = '';
  document.body.style.backgroundColor = '#333333';
  // create a signup form
  signupButton.click(); // click the signup button
}
function FromSignUpToLogin(){
  const signupForm = document.querySelector('.signup-form');
  signupForm.remove();
  document.body.innerHTML = '';
  document.body.style.backgroundColor = '#333333';
  // create a login form
  loginButton.click(); // click the login button
}
// // select the investor relations button 
// const investorRelationsButton = document.querySelector('.upper-div-btn-2');
// // whenever the investor relations button is clicked
// investorRelationsButton.addEventListener('click', function() {
//   console.log('Investor relations button clicked');
// });

// select the get the app button  
const getTheAppButton = document.querySelector('.upper-div-btn-1');
// whenever the get the app button is clicked
getTheAppButton.addEventListener('click', function() {
  console.log('Get the app button clicked');
});

