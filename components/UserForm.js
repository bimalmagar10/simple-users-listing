import {Form,Input} from "antd";

const UserForm = ({user,form}) => {
	return (
		<Form
		  form={form}
		  initialValues={{
		  	name:user.name,
		  	email:user.email,
		  	phone:user.phone,
		  	website:user.website
		  }}
		>
			<Form.Item
				name="name"
				label="Name"
				rules={[
					{
						required:true,
						message:'Please enter name'
					}
					]}
			>
				<Input/>
			</Form.Item>
			<Form.Item
				name="email"
				label="Email"
				rules={[
					{
						required:true,
						message:"Please enter email!"
					}
				]}
					>
						<Input/>
			</Form.Item>
			<Form.Item
				name="phone"
				label="Phone"
				rules={[
					{
						required:true,
						message:"Please enter phone number!"
					}
				]}
			>
				<Input/>
			</Form.Item>
			<Form.Item
				name="website"
				label="Website"
				rules={[
					{
						required:true,
						message:"Please enter website!"
					}
				]}
			>
				<Input/>
			</Form.Item>

		</Form>
	);
};

export default UserForm;