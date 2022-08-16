import './index.css'
import './CardAction';
import './CardBilling';
import './CardDescription';
import './CardFeatures';
function MyCard(props) {	
const { 
    type,
    title,
    description,
    price,
    recurrency,
    mostPopular,
    data,
    clickMe
  } = props;
	
	return (
		<div className={`card pricing-card ${type}`}>
      { (mostPopular) ? <span className="most-popular">Most Popular</span> : null }
			<CardDescription title={title} description={description} />
			<CardBilling price={price} recurrency={recurrency} />
			<CardFeatures data={data} />
			<CardAction clickMe={clickMe} />
		</div>
	);

    }

    export default MyCard;