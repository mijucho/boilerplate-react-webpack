exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('shop').del()
    .then(function () {
      // Inserts seed entries
      return knex('shop').insert([
        {id: 1, name: 'Januray', price:60, img_url: 'cake1.jpg', description:'This beautiful flower cake is our simple and stylish signature cake, packed with yummy buttercream'},
        {id: 2, name: 'February', price:60, img_url: 'cake2.jpg', description:'This beautiful flower cake is our simple and stylish signature cake, packed with yummy buttercream'},
        {id: 3, name: 'March', price:60, img_url: 'cake3.jpg', description:'This beautiful flower cake is our simple and stylish signature cake, packed with yummy buttercream'},
        {id: 4, name: 'April', price:60, img_url: 'cake4.jpg', description:'This beautiful flower cake is our simple and stylish signature cake, packed with yummy buttercream'},
        {id: 5, name: 'May', price:60, img_url: 'cake5.jpg', description:'This beautiful flower cake is our simple and stylish signature cake, packed with yummy buttercream'},
        {id: 6, name: 'Jun', price:60, img_url: 'cake6.jpg', description:'This beautiful flower cake is our simple and stylish signature cake, packed with yummy buttercream'},
        {id: 7, name: 'July', price:60, img_url: 'cake7.jpg', description:'This beautiful flower cake is our simple and stylish signature cake, packed with yummy buttercream'},
        {id: 8, name: 'August', price:60, img_url: 'cake8.jpg', description:'This beautiful flower cake is our simple and stylish signature cake, packed with yummy buttercream'},
        {id: 9, name: 'September', price:60, img_url: 'cake9.jpg', description:'This beautiful flower cake is our simple and stylish signature cake, packed with yummy buttercream'}
      ])
    })
}

