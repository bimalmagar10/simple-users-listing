import {Row} from "antd";
import PropTypes from "prop-types";
const Layout = ({children}) =>(
	<Row gutter={[16,16]} className="container">{children}</Row>
);

Layout.propTypes = {
	children:PropTypes.array
}
export default Layout;