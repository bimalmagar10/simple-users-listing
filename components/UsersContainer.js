import {useUserContext} from "../context/user";
import {Row,Col} from "antd";
import UserCard from "./UserCard";
const UsersContainer = () => {
	const {users} = useUserContext();
	return (
		<Row gutter={[16,16]} className="padding__1rem">
			{
				users?.data?.map(user => (
					<Col
						xs={{
					        span:24
					      }}
					    sm={{
					        span:8
					      }}
					    lg={{
					        span:6
					      }}
					    key={user.id}
					>
						<UserCard
							user={user}
						/>
					</Col>
				))	
			}
		</Row>
	);
};

export default UsersContainer;