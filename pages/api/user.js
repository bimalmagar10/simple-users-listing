import axios from "axios";
export default function handler(req,res) {
	const method = req.method;
	switch(method) {
		case 'GET':
		return getAllUsers();
	}

	async function getAllUsers() {
		try {
			const users = await axios.get("https://jsonplaceholder.typicode.com/users");
			const {data} = users;
			const newUsers = data.map(user => ({...user,avatar:setAvatar(user.id)}));
			res.status(200).json({users:newUsers});
		}catch(err) {
			return res.status(500).end('Error!');
		}

	}

	function setAvatar(id) {
		switch(id){
			case 1:
				return "jake";
			case 2:
				return "jordan";
			case 3:
				return "julie";
			case 4:
				return "jenni"
			case 5:
				return "james";
			case 6:
				return "jodi";
			case 7:
				return "jon";
			case 8:
				return "jean";
			case 9:
				return "jocelyn";
			case 10:
				return "jazebelle";
			default:
				return "jed";
		}
	}
}