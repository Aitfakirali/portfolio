import type { Meta } from '@storybook/react'

import { Header } from './Header'

const meta: Meta<typeof Header> = {
    title: 'Widgets/Header',
    component: Header,
}

export default meta

export const HeaderExample = () => {
    return <Header show={true} handleShow={() => {}} />
}
