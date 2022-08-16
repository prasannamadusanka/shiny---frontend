import './index.css'

function CardBilling({ price, recurrency }) {
	return (
		<div className="card-billing">
			<p>
				<strong className="price">$ { price }</strong>
        <strong> / mo.</strong>
			</p>
			<p>
				<span className="recurrency">
					Billed Anually or	$ { recurrency }/monthly
				</span>
			</p>
		</div>
	);
};
export default CardBilling;