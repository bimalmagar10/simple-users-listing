import {useUserContext} from "../context/user";
import Layout from "./Layout";
import ColumnCard from "./ColumnCard";
import UserCard from "./UserCard";
import {Alert} from "antd";
const FavoritesContainer = () => {
	const {users} = useUserContext();
	return (
		<Layout>
			{
				users.favorites.length ?
				users.favorites.map(user => (
					<ColumnCard key={user.id}>
						<UserCard user={user}/>
					</ColumnCard>
				)):(<Alert showIcon={true} type="info" message="No favorite users!" style={{padding:"1rem",height:"20%",fontSize:"1.2rem"}}/>)
			}
		</Layout>
	);
}

export default FavoritesContainer;