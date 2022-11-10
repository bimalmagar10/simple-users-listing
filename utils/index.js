 import UsersContainer from "../components/UsersContainer";
 import FavoritesContainer from "../components/FavoritesContainer";
 export const tabList = [
      {
        key: 'user-lists',
        tab: 'List of Users',
      },
      {
        key: 'favorites',
        tab: 'Favorite Users',
      },
  ];
 export const contentList = {
    "user-lists":<UsersContainer/>,
    "favorites":<FavoritesContainer/>,
  };

  export const getUpdatedUsers = (prevUsers,userToBeUpdated,updatedValue) => {
    const updatedUser = prevUsers.map(user => {
            if(user.id === userToBeUpdated.id){
                return {...user,...updatedValue};
            } else {
                return user;
            }
    });
    return updatedUser;
  };