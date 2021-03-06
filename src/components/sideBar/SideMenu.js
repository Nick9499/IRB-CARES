import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const SidebarLink = styled(Link)`
    display: flex;
    color: #e1e9fc;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    list-style: none;
    height: 60px;
    text-decoration: none;
    font-size: 18px;

    &:hover {
        background: #1888ff;
        border-left: 4px solid #632ce4;
        cursor: pointer;
    }
`

const SidebarLabel = styled.span`
    margin-left: 16px;
`

const DropdownLink = styled(Link)`
    background: #414757;
    height: 60px;
    padding-left: 3rem;
    display: flex;
    align-items: center;
    text-decoration: none;
    color: #f5f5f5;
    font-size: 18px;

    &:hover {
        background: #1888ff;
        cursor: pointer;
    }
`

const SideMenu = ({ item, click }) => {
    const [subNav, setSubNav] = useState(false)

    const subNavHandler = () => setSubNav(!subNav)
    return (
        <>
            <SidebarLink to={item.path} onClick={item.subNav && subNavHandler}>
                <div className="">
                    {item.icon}
                    <SidebarLabel
                        onClick={
                            item.title === ('About Us' || 'Ways To Give')
                                ? click
                                : null
                        }
                    >
                        {item.title}
                    </SidebarLabel>
                </div>
                <div className="">
                    {item.subNav && subNav
                        ? item.iconOpened
                        : item.subNav
                        ? item.iconClosed
                        : null}
                </div>
            </SidebarLink>
            {subNav &&
                item.subNav.map((item, index) => {
                    return (
                        <DropdownLink to={item.path} key={index}>
                            <SidebarLabel>{item.title}</SidebarLabel>
                        </DropdownLink>
                    )
                })}
        </>
    )
}

export default SideMenu
