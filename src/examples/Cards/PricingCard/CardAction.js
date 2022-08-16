import { CardActions } from '@mui/material';
import './index.css'

function CardAction({ clickMe }) {
	return (
		<div className="card-action">
			<button onClick={clickMe}>BUY NOW</button>
		</div>
	);
};

export default CardActions;