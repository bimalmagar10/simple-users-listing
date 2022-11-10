 import UsersContainer from "../components/UsersContainer";
 import FavoritesContainer from "../components/FavoritesContainer";
 import {Badge} from "antd";
 
 export const tabList = (favCount) => { 
     return [
       {
         key: 'user-lists',
         tab: 'List of Users',
       },
       {
         key: 'favorites',
         tab:<Badge count={favCount}><p style={{padding:".3rem",marginBottom:"0"}}>Favorite Users</p></Badge>,
       },
   ];
 };
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