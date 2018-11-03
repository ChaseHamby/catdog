import axios from 'axios';

// LONG WAY IF YOU WANT TO MANIPULATE DATA FIRST //

// const getDogs = () => {
//   return new Promise((resolve, reject) => {
//     axios.get(https://random-dogs-api.herokuapp.com/dogs/23)
//     .then((data) => {
//        const cleanData = data.data.dogs;
//       resolve(data);
//     })
//     .catch((err) => {
//       reject(err);
//     })
//   });
// }

const getDogs = () => axios.get('https://random-dogs-api.herokuapp.com/dogs/23');

export default { getDogs };
