import type { Meta, StoryObj } from '@storybook/react'

import { SideBar } from './SideBar'

const meta: Meta<typeof SideBar> = {
    title: 'Widgets/SideBar',
    component: SideBar,
}
export default meta
type Story = StoryObj<typeof SideBar>

export const SideBarExample: Story = {
    render: () => <SideBar show={true} />,
}
