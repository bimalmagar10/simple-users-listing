import {Modal,Form} from "antd";
import {useUserContext} from "../context/user";
import UserForm from "./UserForm";
import { getUpdatedUsers}  from "../utils";
import PropTypes from "prop-types";
const EditModal = ({isEditing,user,handleEdit}) => {
	const [form] = Form.useForm();
	const {users,setUsers} = useUserContext();
	return (
		<Modal
			title="Edit User"
			open={isEditing}
			onCancel={() => {
				form.resetFields();
				handleEdit(false)}
			}
			onOk = { () => {
				form
					.validateFields()
					.then(values => {
						setUsers(prev => ({
							...prev,
							data:getUpdatedUsers(users.data,user,values),
							favorites:getUpdatedUsers(users.favorites,user,values)
						}));
						handleEdit(false);
					})
					.catch(info => {
						console.error("Validate Field");
					});
				
			}}
		>
			<UserForm user={user} form={form}/>
		</Modal>
	)
};

EditModal.propTypes = {
	isEditing:PropTypes.bool.isRequired,
	handleEdit:PropTypes.func.isRequired,
	user:PropTypes.object.isRequired
}

export default EditModal;