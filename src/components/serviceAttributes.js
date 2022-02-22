const ServiceAttributes = props => {
	const { servicePorts, setServicePorts } = props

	return <fieldset class="attributes-fieldset">
		<legend>Service</legend>
		<label for="service-ports">Ports</label>
		<input type="text" id="service-ports" name="service-ports" value={servicePorts} onChange={e => setServicePorts(e.target.value)} />
		<span class="pure-form-message">Space-separated</span>
	</fieldset>
}

export default ServiceAttributes