import { useState } from 'preact/hooks'

import DeploymentAttributes from "./deploymentAttributes"
import ContainerAttributes from "./containerAttributes"
import ServiceAttributes from "./serviceAttributes"

import DeploymentYAML from "./deploymentYAML"
import ServiceYAML from "./serviceYAML"

const App = () => {
	const [name, setName] = useState("")
	const [imagePullSecrets, setImagePullSecrets] = useState("")
	const [containers, setContainers] = useState([{ name: "", image: "", envString: "" }])
	const [servicePorts, setServicePorts] = useState("8080")

	return <div id="app">
		<div class="pure-g">
			<div class="pure-u-1-3">
				<form class="pure-form pure-form-stacked" onSubmit={e => e.preventDefault()}>
					<DeploymentAttributes name={name} setName={setName} imagePullSecrets={imagePullSecrets} setImagePullSecrets={setImagePullSecrets} />

					{
						containers.map((container, index) => {
							const setContainer = (nextContainer) => {
								const nextContainers = [...containers]
								nextContainers[index] = nextContainer

								setContainers(nextContainers)
							}

							return <ContainerAttributes container={container} setContainer={setContainer} />
						})
					}

					<button class="pure-button" onClick={() => { setContainers([...containers, { name: "", image: "", envString: "" }]) }}>Add Container</button>

					<ServiceAttributes servicePorts={servicePorts} setServicePorts={setServicePorts} />
				</form>
			</div>

			<div class="pure-u-2-3">
				<DeploymentYAML name={name} containers={containers} imagePullSecrets={imagePullSecrets} />
				<ServiceYAML name={name} servicePorts={servicePorts} />
			</div>
		</div>
	</div>
}

export default App
