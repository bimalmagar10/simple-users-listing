import {Col} from "antd";
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

export default ColumnCard;