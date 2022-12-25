import React, { useEffect } from 'react'
import './NavigationMenu.scss'
import logo from '../../Resources/Image/logo.svg'
import { NavLink } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { changeViewSidebar, changeViewThemas } from '../../Redux/Reducer/View'
function NavigationMenu() {
	const showNav = useSelector(state => state.ViewReducer.sidebar);
	const themeGlobal = useSelector(state => state.ViewReducer.themes)
	const dispatch = useDispatch();
	const changeStateSideBar = (value) => {
		if (value) {
			document.getElementsByClassName('wrapper')[0].style = `
			padding-left: 0px;
			transition: all 0.5s;
			`
			dispatch(changeViewSidebar(true));

		} else {
			document.getElementsByClassName('wrapper')[0].style = `
			padding-left: 250px;
			transition: all 0.5s;
			`
			dispatch(changeViewSidebar(false))
		}
	}
	return (
		<div className={showNav ? "nav" : "nav__container"}>
			<div className="nav__burger" onClick={() => changeStateSideBar(false)}>
				<span></span>
			</div>
			<div className='nav__content'>
				<div className="nav__burger close" onClick={() => changeStateSideBar(true)}>
					<span></span>
				</div>
				<div className="nav__logo">
					<img src={logo} alt="logo" />
				</div>
				<div className="nav__list" onClick={(e) => e.stopPropagation()}>
					<nav>
						<ul>
							<li>
								{/* <NavLink className={({ isActive }) => isActive ? '' : ''} to="/HomePage" > */}
								<div className=''>
									{/* <img src={home} alt="home" /> */}
								</div>
								<div className=''>
									<p className=''>Главная</p>
								</div>
								{/* </NavLink> */}
							</li>
							<li>
								{/* <NavLink className={({ isActive }) => isActive ? '' : ''} to="/HomePage" > */}
								<div className=''>
									{/* <img src={home} alt="home" /> */}
								</div>
								<div className=''>
									<p className=''>Моя музыка</p>
								</div>
								{/* </NavLink> */}
							</li>
							<li>
								{/* <NavLink className={({ isActive }) => isActive ? '' : ''} to="/HomePage" > */}
								<div className=''>
									{/* <img src={home} alt="home" /> */}
								</div>
								<div className=''>
									<p className=''>О нас</p>
								</div>
								{/* </NavLink> */}
							</li>
							<li>
								<input
									className='nav__change'
									type="checkbox"
									id="highload1"
									name="highload1"
									onChange={() => themeGlobal == 'light' ? dispatch(changeViewThemas('dark')) : dispatch(changeViewThemas('light'))}
								/>
								<label htmlFor="highload1" data-onlabel="on" data-offlabel="off" className='nav__label'></label>
							</li>
						</ul>
					</nav>
				</div>
			</div>
		</div>

	)
}

export default NavigationMenu