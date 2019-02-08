exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('people').del()
    .then(function () {
      // Inserts seed entries
      return knex('people').insert([
        {id: 1, name: 'Emily Slade', email:'slade_emily@gmail.com', message:''},
        {id: 2, name: 'Lisa Reed', email:'reed_lisa@gmail.com', message:''},
        {id: 3, name: 'Sharon Kim',email:'kim_sharon@gmail.com', message:''},
      ]);
    });
};
