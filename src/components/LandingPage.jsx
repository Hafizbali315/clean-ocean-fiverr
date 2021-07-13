import OpenBook from '../assets/images/open-book.svg'
import coin from '../assets/images/coin.svg'
import Turtle from '../assets/images/Turtle.svg'

const LandingPage = () => {
	return (
		<div className="landing_page">
			<div className="container">
				<div className="row">
					<div className="col-lg-6 col-12">
						<div className="landing_page_content">
							<div className="new_button">
								<button className="new_btn">New!</button>
							</div>

							<h1 className="mt-3">
								The first <br />
								Ocean-cleanup <br />
								DeFi project.
							</h1>

							<p>The unique Yield Platform that will transform our oceans by removing plastic.</p>

							<div className="row">
								<div className="col-lg-4 col-6">
									<button className="white_btn">
										<img src={OpenBook} alt="OpenBook" /> LitePaper
									</button>
								</div>
								<div className="col-lg-4 col-6">
									<button className="white_btn">
										<img src={coin} alt="coin" /> Donations
									</button>
								</div>
								<div className="mt-2 col-12 col-lg-8">
									<button className="white_btn">Launch App</button>
								</div>
							</div>
						</div>
					</div>
					<div className="col-lg-6 col-12 landing_page_turtle">
						<img src={Turtle} alt="turtle" />
					</div>
				</div>
			</div>
		</div>
	)
}

export default LandingPage
