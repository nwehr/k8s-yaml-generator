import YAML from 'yaml'

const ServiceYAML = (props) => {
	const obj = {
		kind: "Service"
		, apiVersion: "v1"
		, metadata: {
			name: props.name
		}
		, spec: {
			selector: {
				app: props.name
			}
			, ports: []
		}
	}

	for (let port of props.servicePorts.split(" ")) {
		obj.spec.ports.push({ port: port * 1 })
	}

	return <pre>
		<code>
			{
				YAML.stringify(obj)
			}
		</code>
	</pre>
}

export default ServiceYAML
