import image1 from '../assets/images/image1.svg'
import image1Icons from '../assets/images/image1Icons.svg'
import padlock from '../assets/images/padlock.svg'

const HighlightedPoints = () => {
	return (
		<div className="my-5 highlight_points">
			<div className="container">
				<div className="row">
					<div className="col-lg-6 col-12" style={{ position: 'relative' }}>
						<img src={image1} alt="image1" />
						<img className="image_icons" src={image1Icons} alt="image1" />
					</div>
					<div className="col-lg-6 col-12">
						<div className="highlight_points_content">
							<div className="row">
								<div className="col-4 col-lg-2 number_container me-4">
									<h1> 1 </h1>
								</div>
								<div className="col-lg-10 col-8 content">
									<h6>Visit cleanocean.fi</h6>
									<p className="mt-3">
										Visit our platform at cleanocean.fi, read our documentation and study everything before joining our delicious pools.
									</p>

									<h5 className="mt-5">Farm Now</h5>
								</div>
							</div>
						</div>

						<div className="mt-5 highlight_points_content">
							<div className="row">
								<div className="col-4 col-lg-2 number_container me-4">
									<h1> 2 </h1>
								</div>
								<div className="col-lg-10 col-8 content">
									<h6>Stake CSEA Tokens</h6>
									<p className="mt-3">Purchase tokens from our platform and stake them in our farms and pools to receive rewards.</p>
								</div>
							</div>
						</div>

						<div className="mt-5 highlight_points_content">
							<div className="row">
								<div className="col-4 col-lg-2 number_container me-4">
									<h1> 3 </h1>
								</div>
								<div className="col-lg-10 col-8 content">
									<h6>Help your Oceans</h6>
									<p className="mt-3">
										By holding your tokens in our farms you’ll be rewarded with CSEA (CleanSea) tokens and you’ll be helping your oceans by
										donations to ocean cleanup programs. Check ‘Donations’ to see our latest aid, all transparent and available on the
										blockchain.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className="mt-5 row">
					<div className="mt-5 col-lg-6">
						<div className="content">
							<div className="highlighted_btn_text">
								<button>New!</button>
								<p>The first ocean cleanup platform!</p>
							</div>
							<h6 className="mt-4">Fighting Ocean pollution usingcutting-edge technology </h6>
							<p className="mt-5">
								Our vision is to build a strong community that grows together in order to solve real-life issues. Ocean clean-up uses 1/3
								(one third) of the transaction fees to donate to ocean clean-up projects. For more info about our Partner please have a look
								at our GitBook.
							</p>
						</div>
					</div>
				</div>

				<div className="mt-5 row">
					<div className="col-lg-6"></div>
					<div className="mt-5 col-lg-6">
						<div className="mt-5 content">
							<h6>Your Safety is our concern!</h6>
							<p className="mt-5">
								We have hired multiple auditing companies to thoroughly check our codes! Different companies same outcome! Please check our
								audit reports for more information!{' '}
							</p>

							<div className=" custom_margin row">
								<div className="col-8">
									<div className="row">
										<div className="col">
											<button>No Migrator Code</button>
										</div>
										<div className="col">
											<button>No Backdoor</button>
										</div>
									</div>
									<div className="mt-3 row">
										<div className="col">
											<button>Verified Contracts </button>
										</div>
										<div className="col">
											<button>Open Source </button>
										</div>
									</div>
								</div>
								<div className="col-4">
									<img className="padlock_img" src={padlock} alt="padlock" />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default HighlightedPoints
