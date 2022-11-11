import {createContext,useState,useEffect,useContext} from "react";
const UserContext = createContext();

export function UserProvider({ children }){
	const [users,setUsers] = useState({});
  
	 useEffect(() => {
	 	getUsers();
	 },[])
	 const getUsers = async () => {
			const res = await fetch("https://simple-users-listing-bfiq.vercel.app/api/user");
	 	    const { users:data } = await res.json();
	 	    setUsers({data,favorites:[]});
	 };

	return (
		<UserContext.Provider
			value={{users,setUsers}}
		>
		 {children}
		</UserContext.Provider>
	);
}

export function useUserContext(){
	const context = useContext(UserContext);
	if(!context){
		throw new Error('useUserContext must be used inside a `UserProvider`');
	}
	return context;
}