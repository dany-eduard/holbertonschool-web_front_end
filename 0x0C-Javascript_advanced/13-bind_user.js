/**
 * @description - Task 13
 * @var {object} user
 * @function logWelcomeUser - Create the welcome message
 * @param {String}  welcomeString
 * @var {String} bindLogWelcomeUser
 */
let user = {
  astrologicalSign: 'Aries',
  favoriteSport: 'Hockey',
  firstName: 'Buillaume',
  hobby: 'Calligraphy',
  lastName: 'Ialva',
  location: 'Telaviv',
  occupation: 'Engineer',
};

function logWelcomeUser(welcomeString) {
  console.log(welcomeString + ', ' + this.firstName + '. Your occupation is: ' + this.occupation);
}

let bindLogWelcomeUser = logWelcomeUser.bind(user);
bindLogWelcomeUser('Welcome');
bindLogWelcomeUser('Hello');
