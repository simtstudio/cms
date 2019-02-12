import React, { PureComponent } from 'react'
import { injectIntl, InjectedIntlProps } from 'react-intl'

class Colors extends PureComponent<InjectedIntlProps> {
	render() {
		const { intl } = this.props
		return (
			<div className="animated fadeIn">
				<div className="card">
					<div className="card-header">
						<i className="icon-drop" /> {intl.formatMessage({ id: 'ThemeColors' })}
					</div>
					<div className="card-body">
						<div className="row">
							<div className="col-md-4">
								<div className="p-3 mb-3 bg-primary">Primary</div>
							</div>
							<div className="col-md-4">
								<div className="p-3 mb-3 bg-secondary">Secondary</div>
							</div>
							<div className="col-md-4">
								<div className="p-3 mb-3 bg-success">Success</div>
							</div>
							<div className="col-md-4">
								<div className="p-3 mb-3 bg-danger">Danger</div>
							</div>
							<div className="col-md-4">
								<div className="p-3 mb-3 bg-warning">Warning</div>
							</div>
							<div className="col-md-4">
								<div className="p-3 mb-3 bg-info">Info</div>
							</div>
							<div className="col-md-4">
								<div className="p-3 mb-3 bg-light">Light</div>
							</div>
							<div className="col-md-4">
								<div className="p-3 mb-3 bg-dark">Dark</div>
							</div>
						</div>
					</div>
				</div>
				<div className="card">
					<div className="card-header">
						<i className="icon-drop" /> {intl.formatMessage({ id: 'AdditionalColors' })}
					</div>
					<div className="card-body">
						<div className="row">
							<div className="col-md-4">
								<div className="p-3 mb-3 bg-blue">Blue</div>
							</div>
							<div className="col-md-4">
								<div className="p-3 mb-3 bg-indigo">Indigo</div>
							</div>
							<div className="col-md-4">
								<div className="p-3 mb-3 bg-purple">Purple</div>
							</div>
							<div className="col-md-4">
								<div className="p-3 mb-3 bg-pink">Pink</div>
							</div>
							<div className="col-md-4">
								<div className="p-3 mb-3 bg-red">Red</div>
							</div>
							<div className="col-md-4">
								<div className="p-3 mb-3 bg-orange">Orange</div>
							</div>
							<div className="col-md-4">
								<div className="p-3 mb-3 bg-yellow">Yellow</div>
							</div>
							<div className="col-md-4">
								<div className="p-3 mb-3 bg-green">Green</div>
							</div>
							<div className="col-md-4">
								<div className="p-3 mb-3 bg-teal">Teal</div>
							</div>
							<div className="col-md-4">
								<div className="p-3 mb-3 bg-cyan">Cyan</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default injectIntl(Colors)
