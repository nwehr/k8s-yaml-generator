const DeploymentAttributes = props => {
	const { name, setName, imagePullSecrets, setImagePullSecrets } = props

	return <fieldset class="attributes-fieldset">
		<legend>Deployment</legend>

		<label for="name">Name</label>
		<input type="text" id="name" name="name" value={name} onChange={e => setName(e.target.value)} />

		<label for="image-pull-secrets">Image Pull Secrets</label>
		<input type="text" id="image-pull-secrets" name="image-pull-secrets" value={imagePullSecrets} onChange={e => setImagePullSecrets(e.target.value)} />
		<span class="pure-form-message">Space-separated</span>
	</fieldset>
}

export default DeploymentAttributes