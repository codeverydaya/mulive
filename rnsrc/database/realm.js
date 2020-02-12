// const Realm = require('realm');
//
// let realmContext = null;
//
// const CarSchema = {
//   name: 'Car',
//   properties: {
//     make:  'string',
//     model: 'string',
//     miles: {type: 'int', default: 0},
//   }
// };
// const PersonSchema = {
//   name: 'Person',
//   properties: {
//     name:     'string',
//     birthday: 'date',
//     cars:     'Car[]',
//     picture:  'data?' // optional property
//   }
// };
//
// class DataBase{
//
//   constructor(){
//     this.init();
//   }
//
//  async init(){
//
//     if(realmContext==null){
//       realmContext = await Realm.open({schema: [CarSchema, PersonSchema]});
//     }
//    this.realm = realmContext;
//   }
//
//   async writeCar(){
//     this.realm.write(() => {
//       const myCar = this.realm.create('Car', {
//         make: 'Honda',
//         model: 'Civic',
//         miles: 1000,
//       });
//       myCar.miles += 20; // Update a property value
//     });
//   }
//
//   countCar(){
//     const cars = this.realm.objects('Car');
//     return cars.length // => 1
//   }
//
// }
//
//
// export default  new DataBase();
