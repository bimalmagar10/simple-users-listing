import {useState,useEffect} from "react";
import {Card,Modal} from "antd";
import {
	HeartOutlined,
	EditOutlined,
	DeleteFilled,
	MailOutlined,
	PhoneOutlined,
	GlobalOutlined
} from "@ant-design/icons";
import EditModal from "./EditModal";
import DeleteModal from "./DeleteModal";
import Favorite from "./Favorite";

const UserCard = ({user}) => {
	const [editing,setEditing] = useState(false) ;
	const [deleting,setDeleting] = useState(false);

	const handleEditing = (value) => {
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
				<img
				  width="280"
				  height="200"
				  alt="This is me"
				  src={`https://joeschmoe.io/api/v1/${user.avatar}`}
				/>
			}
		    actions={[
		    	<Favorite user={user}/>,
		    	<EditOutlined onClick={() => handleEditing(true)}/>,
		    	<DeleteFilled onClick={() => handleDelete(true)}/>
		    ]}
		>
		  <div className="user__details">
		    <h1 className="user__details--title">{user.name}</h1>
		  	<div className="user__details--item">
		  		<MailOutlined />
		  		<p className="user__details--text">{user.email}</p>
		  	</div>
		  	<div className="user__details--item">
		  		<PhoneOutlined />
		  		<p className="user__details--text">{user.phone}</p>
		  	</div>
		  	<div className="user__details--item">
		  		<GlobalOutlined />
		  		<p className="user__details--text">http://{user.website}</p>
		  	</div>
		  </div>
		  <EditModal 
		  	isEditing={editing}
		  	user={user}
		  	handleEditing={handleEditing}
		  />
		  <DeleteModal
		    isDeleting={deleting}
		    user={user}
		    handleDelete={handleDelete}
		  />
		</Card>
	);
}

export default UserCard;