const db = require('./connection');
const { User, Product, Category } = require('../models');

db.once('open', async () => {
  await Category.deleteMany();

  const categories = await Category.insertMany([
    { name: 'Drinks' },
    { name: 'Household Supplies' },
    { name: 'Electronics' },
    { name: 'Books & Comics' },
    { name: 'Cloths' }
  ]);

  console.log('categories seeded');

  await Product.deleteMany();

  const products = await Product.insertMany([
    {
      name: 'Monster Drink',
      description:
        'An energy drink that will help you on your tired moments',
      image: 'monster.jpg',
      category: categories[0]._id,
      price: 1.99,
      quantity: 100
    },
    {
      name: 'Gatorade',
      description:
        'Energy drink recommend for people that do exercises',
      image: 'gatorade.jpg',
      category: categories[0]._id,
      price: 1.99,
      quantity: 200
    },
    {
      name: 'Fabuloso',
      category: categories[1]._id,
      description:
        'A floor cleaner that will make it shine like a dimond',
      image: 'fabuloso.jpeg',
      price: 4.99,
      quantity: 30
    },
    {
      name: 'Dish Soap',
      category: categories[1]._id,
      description:
        'Dish soap that will get your dishes without grease',
      image: 'dishsoap.jpg',
      price: 2.00,
      quantity: 30
    },
    {
      name: 'Raid',
      category: categories[1]._id,
      description:
        'Problems with Bugs, we have the solution. Raid kills all bugs',
      image: 'bugkiller.jpg',
      price: 3.50,
      quantity: 100
    },
    {
      name: 'Camera',
      category: categories[2]._id,
      description:
        'Take pictures with this camera just like Peter Parker',
      image: 'camera-spider.jpg',
      price: 399.99,
      quantity: 45
    },
    {
      name: 'PC GAMER',
      category: categories[2]._id,
      description:
        'Play your games without problems with this computer. Better processor, more memory and lot of storage space ',
      image: 'gamer.jpg',
      price: 1599.99,
      quantity: 50
    },
    {
      name: 'Smart TV',
      category: categories[2]._id,
      description:
        'What your favorite programs, movies or futbool game. Includes 3D',
      image: 'smart-tv.jpg',
      price: 699.99,
      quantity: 100
    },
    {
      name: 'IT book',
      category: categories[3]._id,
      description: 'Time to read a horror book, and nothing better than one of stephen king',
      image: 'books.jpg',
      price: 1.99,
      quantity: 100
    },
    {
      name: 'Star Wars comic',
      category: categories[3]._id,
      description:
        'Read and have fun with the new comic of star wars',
      image: 'comics.jpg',
      price: 2.99,
      quantity: 60
    },
    {
      name: 'The Batman Who Laughs',
      category: categories[3]._id,
      description:
        'Explore the dark universe of DC with their new character The batman who laughs',
      image: 'batman-comic.jpg',
      price: 2.99,
      quantity: 60
    },
    {
      name: 'Rick and Morty t-shirt',
      category: categories[4]._id,
      description:
        'Our famous Rick Sanchez will be in your chest all day',
      image: 'rick.jpg',
      price: 9.99,
      quantity: 300
    },
    {
      name: 'Darth vader t-shirt',
      category: categories[4]._id,
      description:
        'feel the dark side with our new T-shirt from star wars',
      image: 'vader.jpg',
      price: 9.99,
      quantity: 300
    }
  ]);

  console.log('products seeded');

  await User.deleteMany();

  await User.create({
    firstName: 'Bruno',
    lastName: 'Walderon',
    email: 'bce_moar_2000@gmail.com',
    password: 'bruno192000',
    orders: [
      {
        products: [products[0]._id, products[0]._id, products[1]._id]
      }
    ]
  });

  await User.create({
    firstName: 'Walter',
    lastName: 'White',
    email: 'WW2007@yahoo.com',
    password: 'lospolloshermanos01'
  });

  console.log('users seeded');

  process.exit();
});
