import {Modal} from "antd";
import {useUserContext} from "../context/user";
import {ExclamationCircleOutlined} from "@ant-design/icons";
import PropTypes from "prop-types";

const DeleteModal =({isDeleting,user,handleDelete}) => {
	const {setUsers} = useUserContext();
	const deleteUser = (user) => {
	  setUsers(prev => ({
	  	...prev,
	  	data:prev.data.filter(el => el.id !== user.id),
	  	favorites:prev.favorites.filter(el => el.id !== user.id)
	  }));
	};
	return (
		<Modal
		    centered
			open={isDeleting}
			okText="Yes"
			okType="danger"
			width={400}
			onCancel={() => handleDelete(false)}
			onOk={() => {
				deleteUser(user);
				handleDelete(false);
			}}
		>
		 <div className="user__delete">
		     <ExclamationCircleOutlined style={{color:"#fcc25d",fontSize:"2rem"}}/>
		 	<p className="user__delete--msg">Are you sure you want to delete?</p>
		 </div>
		</Modal>
	);
};
DeleteModal.propTypes = {
	isDeleting:PropTypes.bool.isRequired,
	handleDelete:PropTypes.func.isRequired,
	user:PropTypes.object.isRequired
}

export default DeleteModal;