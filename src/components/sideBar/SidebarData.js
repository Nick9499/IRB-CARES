import React from 'react'

import * as RiIcons from 'react-icons/ri'

export const SidebarData = [
    {
        title: 'What We Do',
        path: '#',

        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,
        subNav: [
            {
                title: 'Life Skills To Escape Poverty',
                path: '/life',
            },
            {
                title: 'Job Training',
                path: '/jobtraining',
            },
            {
                title: 'Baby Turtles Preservation ',
                path: '/babyturtlespreservation',
            },
            {
                title: 'Human Trafficking Solutions',
                path: '/humantraffickingsolutions',
            },
            {
                title: 'Summer Camps',
                path: '/summercamps',
            },
            {
                title: 'Veteran Help ',
                path: '/veteranhelp',
            },
            {
                title: 'Accommodations for the Aging',
                path: '/accommodationsfortheaging',
            },
            {
                title: 'Domestic Abuse',
                path: '/domesticabuse',
            },
            {
                title: 'After-School Programs',
                path: '/afterschoolprograms',
            },
        ],
    },

    {
        title: 'About Us',
        path: '/about',
    },
    {
        title: 'Ways To Give',
        path: '/waystogive',
    },
]
