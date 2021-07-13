import dice from '../assets/images/dice.svg'
import fire from '../assets/images/fire.svg'
import padlock2 from '../assets/images/padlock2.svg'
import wave from '../assets/images/wave.svg'

const Features = () => {
	return (
		<div className=" features">
			<div className="container text-center">
				<div className="heading">
					<h2>
						Top Features <div className="heading_style"></div>
					</h2>
				</div>

				<p>
					Our Team has hand picked the best, safest and most sustainable features in the DeFi space. The enthusiastic developer is already
					working on more upcoming features that will be implanted soon.{' '}
				</p>

				<div className="buttons_row_first">
					<button>
						<img src={padlock2} alt="icon" /> <span>Locked Liquidity</span>
					</button>
					<button>
						<img src={fire} alt="icon" /> <span>Burn System</span>
					</button>
					<button>
						<img src={wave} alt="icon" /> <span>Certik Audit</span>
					</button>
				</div>

				<div className="buttons_row_second">
					<button>
						<img src={wave} alt="icon" /> <span>Ocean clean-up donations</span>
					</button>
					<button>
						<img src={dice} alt="icon" /> <span>Predicitions</span>
					</button>
				</div>
			</div>
		</div>
	)
}

export default Features
