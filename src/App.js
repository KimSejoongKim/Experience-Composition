import React from 'react'
import FirstPage from './components/FirstPage'
import 'bootstrap/dist/css/bootstrap.min.css'


class App extends React.Component {


	constructor(props) {
		super(props)
	}

	render() {

		return <div>
			<FirstPage></FirstPage>
		</div>
	}
}

export default App