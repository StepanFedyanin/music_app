import React from 'react'
import MainContent from '../../Components/MainContent/MainContent'
import NavigationMenu from '../../Components/NavigationMenu/NavigationMenu'
import './MainPage.scss'
function MainPage() {
	return (
		<div className='wrapper' id='Wrapper'>
			<NavigationMenu />
			<MainContent />
		</div>
	)
}

export default MainPage