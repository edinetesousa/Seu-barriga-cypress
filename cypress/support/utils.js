import { faker } from '@faker-js/faker';
// import 'cypress-file-upload';
    
const randomName = () => {
    return faker.person.fullName();
}

function randomEmail () {
    return faker.internet.email();
}

const randomUserName = () => {
    return faker.person.firstName();
}

const randomPassword = () => {
    return  faker.number.int({ min: 10000000, max: 99999999 });
}

const randomNumeric = (numero) => {
    return faker.random.numeric(numero)

}
module.exports = {
    randomName, randomEmail, randomUserName, randomPassword, randomNumeric
}