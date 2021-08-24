const faker = require('faker');

module.exports = function () {
    const data = { users: [], posts: [] };

    for (let i = 0; i < 5 ; i++) {
        data.users.push({
            id: faker.random.uuid(),
            firstName: faker.name.firstName(),
            lastName: faker.name.lastName()
        })      
    }

    for (let i = 0; i < 10 ; i++) {
        data.posts.push({
            id: faker.random.uuid(),
            title: faker.lorem.sentence(),
            content: faker.lorem.paragraph(),
            date: faker.date.past().getTime(),
            reactions: {
                eyes: 0,
                heart: 0,
                hooray: 0,
                rocket: 0,
                thumbsUp: 0
            },
            user: faker.random.arrayElement(data.users).id
        })
    }
    
    return data;
}