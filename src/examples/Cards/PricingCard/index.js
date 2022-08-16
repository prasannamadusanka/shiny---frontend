import './index.css'

const handleClick=()=> {
    console.log('Button clicked!');
  };
function PricingCard( type,
    title,
    description,
    price,
    recurrency,
    mostPopular,
    data,
    handleClick) {

	
	return (
		<div className="app-wrapper">
      {
        cardsData.map(type,
            title,
            description,
            price,
            recurrency,
            mostPopular,
            data,
            handleClick => {                              
          return (
            <div className={`card pricing-card ${type}`} onClick={handleClick}>
            { (mostPopular) ? <span className="most-popular">Most Popular</span> : null }
            <div className="card-description">
			<h2>{ title }</h2>
			<p>{ description }</p>
		</div>
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
        <div className="card-features">
			<ul>
				{ 
					data.map((item, index) => {
						return (
							<li key={index}>{item}</li>
						)
					})
				}
			</ul>
		</div>
        </div>
          )
        })
      }
		</div>
	);
};

const cardsData = [
  {
    id: 1,
    type: 'free',
    title: 'Free Plan',
    description: 'Lorem ipsum',
    price: 19.99,
    recurrency: 14.99,
    mostPopular: false,
    data: ['2TB Storage', '100 E-mails']
  },
  {
    id: 2,
    type: 'basic',
    title: 'Basic Plan',
    description: 'Lorem ipsum',
    price: 29.99,
    recurrency: 24.99,
    mostPopular: false,
    data: ['2TB Storage', '200 E-mails', '10 Accounts']
  },
  {
    id: 3,
    type: 'medium',
    title: 'Medium Plan',
    description: 'Lorem ipsum',
    price: 69.99,
    recurrency: 59.99,
    mostPopular: true,
    data: ['10TB Storage', '500 E-mails', '20 Accounts', '24/7 Support']
  },
  {
    id: 4,
    type: 'pro',
    title: 'Pro Plan',
    description: 'Lorem ipsum',
    price: 99.99,
    recurrency: 84.99,
    mostPopular: false,
    data: ['50TB Storage', 'Unlimited E-mails', 'Unlimited Accounts', '24/7 Support']
  }
];
export default PricingCard;