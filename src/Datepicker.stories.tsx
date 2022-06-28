import Datepicker from './Datepicker'

export default {
	component: Datepicker,
	title: 'Datepicker',
}

const Template = args => <Datepicker {...args} />

export const Default = Template.bind({})
Default.args = {
}
