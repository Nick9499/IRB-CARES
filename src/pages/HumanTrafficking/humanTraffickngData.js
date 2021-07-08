import FolderIcon from '@material-ui/icons/Folder'
import HouseIcon from '@material-ui/icons/House'
import HomeIcon from '@material-ui/icons/Home'

export const trafficking = [
    {
        p: 'Awareness Initiatives',
        desc:
            'We at IRB Cares zealously raise awareness of the grievances of human trafficking by partnering with local alliances. We will prevent future crimes through prevention activities and our work to lessen the demand for forced labor and commercial sex. In addition to that, we will help rescue and rehabilitate present-day victims by ameliorating the identification and prosecution of local traffickers. ',
        icon: <i className="fas fa-comment-alt fa-2x"></i>,
    },
    {
        p: ' Comprehensive Care Administration',
        desc:
            'We address physical and psychological trauma through a variety of services, such as:',
        icon: <FolderIcon fontSize={'large'} />,
        sub: [
            {
                p: 'Medical and dental',
            },
            {
                p: 'Victim advocacy',
            },
            {
                p: 'Crisis intervention',
            },
            {
                p: 'Safety planning',
            },
            {
                p: 'Employment aid',
            },
            {
                p: 'Legal assistance',
            },
            {
                p: 'Translation',
            },
            {
                p: 'Job development',
            },
            {
                p: 'Repatriation',
            },
            {
                p: 'Social service benefits',
            },
            {
                p: 'Substance abuse treatment',
            },
            {
                p: 'ChildCare',
            },
        ],
    },

    {
        p: 'Transitional Housing',
        desc:
            'IRB Cares will implement transitional housing programs to offer hope to many young adults who have aged out of the foster care system. Recent eviction, domestic breakup, addiction issue, or any other housing setbacks, our temporary shelters provide homeless individuals with food and lodging while provisioning them with the necessary resources and support needed to regain stability. ',
        icon: <HouseIcon fontSize={'large'} />,
    },
    {
        p: 'Permanent Supportive Housing',
        desc:
            'Our long-term housing services range from supportive facilities for the elderly and affordable housing programs for low-income seniors to apartment assistance for vulnerable adolescents and devoted living complexes for homeless adults and families. Across our thousands of local branches, we assist those on fixed incomes, those having a hard time to rise above the poverty line, and those fighting to give their kids a safe place to call home. ',
        icon: <HomeIcon fontSize={'large'} />,
    },
    {
        p: 'Re-Entry Resources',
        desc:
            'In conjunction with providing food and lodging, our staff offers educational aid, counseling and vocational keep up to homeless people, impecunious individuals/families and vulnerable youth. We have steadfast on-site caseworkers that prepare clients to embrace responsibility, meet goals, and gain self-competence. In addition to that, even after residents secure permanent housing, we continue to assist them sustain stability via emergency food and utility backing.',
    },
]
