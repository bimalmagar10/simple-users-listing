import {Col} from "antd";
import PropTypes from "prop-types";
const ColumnCard = ({children}) => (
	<Col 
		xs={{
	        span:24
	      }}
	    sm={{
	        span:8
	      }}
	    lg={{
	        span:6
	      }}
	>
		{children}
	</Col>
);

ColumnCard.propTypes = {
	children:PropTypes.node.isRequired
}

export default ColumnCard;