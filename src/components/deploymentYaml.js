import YAML from 'yaml'

const DeploymentYAML = props => {
	const { name, containers, imagePullSecrets } = props

	const obj = {
		apiVersion: "apps/v1"
		, kind: "Deployment"
		, metadata: {
			name: name
		}
		, spec: {
			replicas: 1
			, selector: {
				matchLabels: {
					app: name
				}
			}
			, strategy: {
				rollingUpate: {
					maxSurge: 1
					, maxUnavailable: 0
				}
				, type: "RollingUpdate"
			}
			, template: {
				metadata: {
					labels: {
						app: name
					}
				}
				, spec: {
					containers: []
				}
			}
		}
	}

	for (let container of containers) {
		const c = {
			image: container.image
			, name: container.name
			, imagePullPolicy: "Always"
		}

		if (container.envString !== "") {
			const env = []

			for (let kv of container.envString.split(" ")) {
				const [key, value] = kv.split("=")

				env.push({
					name: key
					, value: value
				})
			}

			c["env"] = env
		}

		obj.spec.template.spec.containers.push(c)
	}

	if (imagePullSecrets !== "") {
		obj.spec.template.spec["imagePullSecrets"] = []

		for (let name of imagePullSecrets.split(" ")) {
			obj.spec.template.spec["imagePullSecrets"].push({ name })
		}
	}

	return <pre>
		<code>
			{
				YAML.stringify(obj)
			}
		</code>
	</pre>
}

export default DeploymentYAML