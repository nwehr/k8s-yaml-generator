const ContainerAttributes = props => {
	const { container, setContainer } = props

	return <fieldset class="attributes-fieldset">
		<legend>Container</legend>

		<label for="name">Name</label>
		<input type="text" id="name" name="name" value={container.name} onChange={e => setContainer({ ...container, name: e.target.value })} />

		<label for="image">Image</label>
		<input type="text" id="image" name="image" value={container.image} onChange={e => setContainer({ ...container, image: e.target.value })} />

		<label for="env-string">Env Variables</label>
		<input type="text" id="env-string" name="env-string" value={container.envString} onChange={e => setContainer({ ...container, envString: e.target.value })} />
		<span class="pure-form-message">Space-separated key-value pairs (e.g. FOO=abc BAR=123)</span>
	</fieldset>
}

export default ContainerAttributes