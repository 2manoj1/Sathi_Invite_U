import React from 'react';

const Weadingloaction = () => {
    return ( <section className="section w-details-area center-text">
		<div className="container">
			<div className="row">
				<div className="col-sm-1"></div>
				<div className="col-sm-10">
					
					<div className="heading">
						<h2 className="title">Wedding & Reception Details</h2>
						<span className="heading-bottom"><i className="icon icon-star"></i></span>
					</div>
					
					<div className="wedding-details margin-bottom">
						
						<div className="w-detail right">
							<i className="icon icon-ciurclke"></i>
							<h4 className="title">WEDDING CEREMONY</h4>
                            <p>Thursday, February 4th, 2021</p>
                            <p><i className="icon icon-email-plane"></i></p>
                            <p>Simla, Kamalpur, Bankura, West Bengal</p>
                            <p>
							<div className="map-responsive">
								
							<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d545.7655517550089!2d86.8502654477807!3d23.291020843161217!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDE3JzI3LjEiTiA4NsKwNTEnMDIuOSJF!5e1!3m2!1sen!2sin!4v1606801168130!5m2!1sen!2sin" width="600" height="450" frameBorder="0" style={{border:0}} allowFullScreen=""></iframe>
                            </div>
							</p>

						</div> 
						
						<div className="w-detail right">
							<i className="icon icon-wine-glass"></i>
							<h4 className="title">DINNER</h4>
							<p>Time: 7PM Onwards</p>
						</div> 
						
						<div className="w-detail left">
							<i className="icon icon-cake"></i>
							<h4 className="title">RECEPTION PARTY</h4>
							<p>Friday, February 5th, 2021</p>
                            <p><i className="icon icon-email-plane"></i></p>
                            <p>Kalipur, Besora, Chhatna, Bankura, West Bengal</p>
                            <p>
							<div className="map-responsive">
							<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d272.7536121146478!2d86.95343224453882!3d23.353939354469446!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f7aa76eb7a2c85%3A0x5427e4988f6c935e!2sKalipur%2C%20West%20Bengal%20722132!5e1!3m2!1sen!2sin!4v1606802078243!5m2!1sen!2sin" width="600" height="450" frameBorder="0" style={{border:0}} allowFullScreen=""></iframe>
                                </div>
								</p>
						</div> 
						
						<div className="w-detail left">
							<i className="icon icon-wine-glass"></i>
							<h4 className="title">DINNER</h4>
							<p>Time: 7PM Onwards</p>
						</div> 
						
					</div>
					
				</div>
			</div>
		</div>
    </section>    
    );
}

export default Weadingloaction;