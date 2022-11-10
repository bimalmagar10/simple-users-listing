import {
	MailOutlined,
	PhoneOutlined,
	GlobalOutlined
} from "@ant-design/icons";
const UserInfo = ({user}) => (
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
);

export default UserInfo;