import React, { useState } from 'react'
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { SidebarData } from '../sideBar/SidebarData'
import logo from '../../Images/logo4.svg'
import SideMenu from './SideMenu'

const Nav = styled.div`
    background: #15171c;
    height: 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2%;
`

const NavIcons = styled(Link)`
    margin-left: 2rem;
    font-size: 2rem;
    height: 80px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    color: #f5f5f5;
`

const SidebarNav = styled.nav`
    background: #15171c;
    width: 250px;
    height: 100vh;
    display: flex;

    justify-content: center;
    position: fixed;
    top: 0;
    left: ${({ sidebar }) => (sidebar ? '0' : '-100%')};
    transition: 350ms;
    z-index: 10;
    overflow: scroll;
`

const SidebarWrap = styled.div`
    width: 100%;
`

const SideBar = () => {
    const [sidebar, setSidebar] = useState(false)

    const sidebarHandler = () => setSidebar(!sidebar)
    const slider = (
        <div className="sidebar">
            <Nav>
                <NavIcons to="#">
                    <FaIcons.FaBars onClick={sidebarHandler} />
                </NavIcons>
                <NavIcons to="/">
                    <img
                        src={logo}
                        alt="logo"
                        style={{ width: '100px' }}
                        onClick={setSidebar}
                    />
                </NavIcons>
            </Nav>
            <SidebarNav sidebar={sidebar}>
                <SidebarWrap>
                    <NavIcons to="#">
                        <AiIcons.AiOutlineClose onClick={sidebarHandler} />
                    </NavIcons>
                    {SidebarData.map((item, index) => {
                        return (
                            <SideMenu
                                item={item}
                                key={index}
                                click={sidebarHandler}
                            />
                        )
                    })}
                </SidebarWrap>
            </SidebarNav>
        </div>
    )
    return slider
}

export default SideBar
