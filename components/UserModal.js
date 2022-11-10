import {Modal,Form} from "antd";
import {useUserContext} from "../context/user";
import UserForm from "./UserForm";
const UserModal = ({isEditing,user,handleEditing}) => {
	const [form] = Form.useForm();
	const {users,setUsers} = useUserContext();
	return (
		<Modal
			title="Edit User"
			open={isEditing}
			onCancel={() => {
				form.resetFields();
				handleEditing(false)}
			}
			onOk = { () => {
				form
					.validateFields()
					.then(values => {
						const editedUser = users.data.map(el => {
							if(el.id === user.id){
								return {...el,...values};
							} else {
								return el;
							}
						});
						setUsers(prev => ({
							...prev,data:editedUser
						}));
						handleEditing(false);
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

export default UserModal;