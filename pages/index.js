import UsersContainer from "../components/UsersContainer";
export default function Home() {
//   const add = (user)  => {
//     if(users.favorites.length) {
//         const isAlreadyOnFav = users.favorites.filter(el => el.id === user.id);
//         if(isAlreadyOnFav.length){
//           const newFavorites = users.favorites.filter(el => el.id != user.id);
//           setUsers(prev => (
//             {...prev,favorites:newFavorites}
//           ))
//         } else {
//           setUsers(prev => {
//              return {...prev,favorites:prev.favorites.concat(user)}
//           })
//         }
// 
//     } else {
//       setUsers(prev => {
//         return {...prev,favorites:prev.favorites.concat(user)}
//       })
//     }
//   };
  return (
    <>
      <UsersContainer/>
    </> )
}
