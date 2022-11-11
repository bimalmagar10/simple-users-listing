import {useState} from "react";
import {Card} from "antd";
import {
	EditOutlined,
	DeleteFilled,
} from "@ant-design/icons";
import EditModal from "./EditModal";
import DeleteModal from "./DeleteModal";
import Favorite from "./Favorite";
import UserInfo from "./UserInfo";
import PropTypes from "prop-types";
const UserCard = ({user}) => {
	const [editing,setEditing] = useState(false) ;
	const [deleting,setDeleting] = useState(false);

	const handleEdit = (value) => {
		setEditing(value);
	}
	const handleDelete = (value) => {
		setDeleting(value);
	};
	return (
		<Card
			style={{
				width:"100%"
			}}
			cover={
				<picture>
					<img
					alt="This is me"
					  src={`https://joeschmoe.io/api/v1/${user.avatar}`}
					  width={280}
					  height={200}
					/>
				</picture>
			}
		    actions={[
		    	<Favorite key={user.id} user={user}/>,
		    	<EditOutlined key={user.id} onClick={() => handleEdit(true)}/>,
		    	<DeleteFilled key={user.id} onClick={() => handleDelete(true)}/>
		    ]}
		>
		  <UserInfo user={user}/>
		  <EditModal 
		  	isEditing={editing}
		  	user={user}
		  	handleEdit={handleEdit}
		  />
		  <DeleteModal
		    isDeleting={deleting}
		    user={user}
		    handleDelete={handleDelete}
		  />
		</Card>
	);
}

UserCard.propTypes = {
	user:PropTypes.object.isRequired
}

export default UserCard;