const MobileMenu = ({ setShowMobileMenu }) => {
	return (
		<div className="mobile_menu_overlay">
			<div className="close_btn" onClick={() => setShowMobileMenu(false)}>
				{' '}
				X{' '}
			</div>
			<div className="mobile_menu">
				<ul>
					<li>Home</li>
					<li>Dashboard</li>
					<li>Project</li>
					<li>Roadmap</li>
					<li>Features</li>
					<li>Audit</li>

					<li>
						<button style={{ background: '#DBEAF1', color: '#1F1F1F' }}>White Paper</button>
					</li>
					<li>
						<button style={{ background: '#2787B7', color: '#FFFFFF' }}>Launch App</button>
					</li>
				</ul>
			</div>
		</div>
	)
}

export default MobileMenu
