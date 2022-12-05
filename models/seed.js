// dependency
const db = require('./');

const seed = [
    {
        make: 'Audi',
        model: 'RS5',
        year: 2018,
        color: 'Grey',
        description: 'Snow Monster',
        img: 'https://wheelfront.com/wp-content/uploads/formidable/8/nardo-grey-b9-rs5-with-ferrada-fr2-wheels.jpg',
        price: 90000,
        mi: 47000
    }, 
    {
        make: 'Tesla',
        model: 'Model S',
        year: 2016,
        color: 'White',
        description: 'Accident-prone',
        img: 'https://s1.cdn.autoevolution.com/images-webp/news/white-tesla-model-s-plaid-gets-an-attitude-adjustment-license-plate-reveals-its-secret-181998-7.jpg.webp',
        price: 60000,
        mi: 50000
    }, 
    {
        make: 'Ferrari',
        model: 'F8',
        year: 2020,
        color: 'Red',
        description: 'Small house on wheels',
        img: 'https://www.carscoops.com/wp-content/uploads/webp/2020/03/Ferrari-F8-Tributo-1024x555.webp',
        price: 300000,
        mi: 9000
    }
]


db.Car.deleteMany({}, (err, cars) => {
    db.Car.insertMany(seed, (err, cars) => {
    })
})