import {Row} from "antd";

const Layout = ({children}) =>(
	<Row gutter={[16,16]} className="container">{children}</Row>
);
export default Layout;