export interface SideBarLinks {
    title: string
    dot?: boolean
    icon?: string
    below?: SideBarLinks[]
    key: string
    url?: string
}

export const items = [
    {
        title: 'Accueil',
        key: '1',
        icon: 'home',
        dot: false,
        below: [
            {
                title: 'Le Groupe',
                icon: '',
                key: '11',
                dot: true,
                below: [
                    {
                        title: 'Histoire du Groupe',
                        key: '111',
                    },
                    {
                        title: 'Nos valeurs',
                        key: '112',
                    },
                    {
                        title: 'Notre stratégie',
                        key: '113',
                    },
                    {
                        title: 'Nos métiers',
                        key: '114',
                    },
                ],
            },
            {
                title: 'Nos filiales',
                icon: '',
                key: '12',
                dot: true,
                below: [
                    {
                        title: 'Histoire',
                        key: '121',
                    },
                ],
            },
            {
                title: 'Media',
                icon: '',
                key: '13',
                dot: true,
                below: [
                    {
                        title: 'Histoire',
                        key: '131',
                    },
                ],
            },
            {
                title: 'Règles et Responsabiltés',
                icon: '',
                key: '14',
                dot: true,
                below: [
                    {
                        title: 'Histoire',
                        key: '141',
                    },
                ],
            },
            {
                title: 'RSA & fondation AWB',
                icon: '',
                key: '15',
                dot: true,
                below: [
                    {
                        title: 'Histoire',
                        key: '151',
                    },
                ],
            },
            {
                title: 'Resources',
                icon: '',
                key: '16',
                dot: true,
                below: [
                    {
                        title: 'Histoire',
                        key: '161',
                    },
                ],
            },
        ],
    },
] satisfies SideBarLinks[]

export const secondItems = [
    {
        title: 'Mon courrier',
        key: '1',
        icon: 'courrier',
        dot: false,
    },
    {
        title: 'Mon teams',
        key: '2',
        icon: 'teams',
        dot: false,
    },
    {
        title: 'Mon agenda',
        key: '3',
        icon: 'agenda',
        dot: false,
    },
    {
        title: 'Mes projets',
        key: '4',
        icon: 'boost',
        dot: false,
        below: [
            {
                title: 'INTRANET',
                dot: true,
                key: '41',
            },
            {
                title: 'CIB',
                dot: true,
                key: '42',
            },
            {
                title: 'DAM',
                dot: true,
                key: '43',
            },
            {
                title: 'TPE',
                dot: true,
                key: '44',
            },
        ],
    },
    {
        title: 'Mon contenu',
        key: '5',
        icon: 'folder',
        dot: false,
    },
    {
        title: 'Flux',
        key: '3',
        icon: 'file',
        dot: false,
    },
] satisfies SideBarLinks[]
