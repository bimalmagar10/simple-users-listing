import {HeartOutlined,HeartFilled} from "@ant-design/icons";
import {useUserContext} from "../context/user";
import PropTypes from "prop-types";

const Favorite = ({user}) => {
	const {users,setUsers} = useUserContext();
	const isOnFav = users.favorites.filter(el => el.id === user.id);

	const addToFav = (user)  => {
	 if(users.favorites.length) {
	     const isAlreadyOnFav = users.favorites.filter(el => el.id === user.id);
	     if(isAlreadyOnFav.length){
	       const newFavorites = users.favorites.filter(el => el.id != user.id);
	       setUsers(prev => (
	         {...prev,favorites:newFavorites}
	       ))
	     } else {
	       setUsers(prev => {
	          return {...prev,favorites:prev.favorites.concat(user)}
	       })
	     }

	 } else {
	   setUsers(prev => {
	     return {...prev,favorites:prev.favorites.concat(user)}
	   })
	 }
	};
	
	return (
		<>
		    {
		    	isOnFav.length ?
		    	(<HeartFilled
		    		className="user__favorite"
		    		onClick={() => addToFav(user)}
		    	/>):
		    	(<HeartOutlined 
					className="user__favorite"
					onClick={() => { addToFav(user)}}
				/>)
		    }
		</>
	);
};

Favorite.propTypes = {
	user:PropTypes.object.isRequired
}

export default Favorite;