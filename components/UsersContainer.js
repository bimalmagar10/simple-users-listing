import {useUserContext} from "../context/user";
import {Col} from "antd";
import UserCard from "./UserCard";
import Layout from "./Layout";
import ColumnCard from "./ColumnCard";
const UsersContainer = () => {
	const {users} = useUserContext();
	return (
		<Layout>
			{
				users?.data?.map(user => (
					<ColumnCard key={user.id}>
						<UserCard
							user={user}
						/>
					</ColumnCard>
				))	
			}
		</Layout>
	);
};

export default UsersContainer;