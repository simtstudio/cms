import React from 'react'
import { Row, Col, Card, CardHeader, CardBody, FormGroup, Label, FormText, InputGroup } from 'reactstrap'
import { TextMask, InputAdapter } from 'react-text-mask-hoc'

// React DateRangePicker
import 'react-dates/initialize'
import { DateRangePicker, FocusedInputShape, OrientationShape, OpenDirectionShape } from 'react-dates'
import 'react-dates/lib/css/_datepicker.css'
import './react_dates_overrides.css'

// React select
import * as States from './data/states'
import Select from 'react-select'
import '../../../scss/vendors/react-select/react-select.scss'
import moment from 'moment'

const options: any[] = States.US

interface IState {
	value: any[]
	windowWidth: number
	orientation: OrientationShape
	openDirection: OpenDirectionShape
	startDate: moment.Moment | null
	endDate: moment.Moment | null
	focusedInput: FocusedInputShape | null
}

class AdvancedForms extends React.Component<{}, IState> {
	constructor(props: any) {
		super(props)
		this.saveChanges = this.saveChanges.bind(this)
		this.updateDimensions = this.updateDimensions.bind(this)

		this.state = {
			value: [{ value: 'UT', label: 'Utah' }, { value: 'OH', label: 'Ohio' }],
			windowWidth: window.innerWidth,
			orientation: 'vertical',
			openDirection: 'down',
			startDate: moment(),
			endDate: moment(),
			focusedInput: 'startDate',
		}
	}

	componentDidMount() {
		this.updateDimensions()
		window.addEventListener('resize', this.updateDimensions)
	}

	componentWillUnmount() {
		window.removeEventListener('resize', this.updateDimensions)
	}

	saveChanges(value: Array<any>, action: any) {
		this.setState({ value })
	}

	updateDimensions() {
		const windowWidth = window.innerWidth
		this.setState(state => {
			return {
				windowWidth: windowWidth,
				orientation: windowWidth < 620 ? 'vertical' : 'horizontal',
				openDirection: windowWidth < 620 ? 'up' : 'down',
			}
		})
	}

	render() {
		return (
			<div className="animated fadeIn">
				<Row>
					<Col sm={12} md={6} style={{ flexBasis: 'auto' }}>
						<Card>
							<CardHeader>
								<i className="icon-note" />
								<strong>Masked Input</strong> <small>React Text Mask</small>
							</CardHeader>
							<CardBody>
								<FormGroup>
									<Label>Date input</Label>
									<InputGroup>
										<div className="input-group-prepend">
											<span className="input-group-text">
												<i className="fa fa-calendar" />
											</span>
										</div>
										<TextMask
											mask={[/\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/]}
											Component={InputAdapter}
											className="form-control"
										/>
									</InputGroup>
									<FormText color="muted">ex. 99/99/9999</FormText>
								</FormGroup>
								<FormGroup>
									<Label>Phone input</Label>
									<InputGroup>
										<div className="input-group-prepend">
											<span className="input-group-text">
												<i className="fa fa-phone" />
											</span>
										</div>
										<TextMask
											mask={['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]}
											Component={InputAdapter}
											className="form-control"
										/>
									</InputGroup>
									<FormText color="muted">ex. (999) 999-9999</FormText>
								</FormGroup>
								<FormGroup>
									<Label>Taxpayer Identification Numbers</Label>
									<InputGroup>
										<div className="input-group-prepend">
											<span className="input-group-text">
												<i className="fa fa-usd" />
											</span>
										</div>
										<TextMask
											mask={[/\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/]}
											Component={InputAdapter}
											className="form-control"
										/>
									</InputGroup>
									<FormText color="muted">ex. 99-9999999</FormText>
								</FormGroup>
								<FormGroup>
									<Label>Social Security Number</Label>
									<InputGroup>
										<div className="input-group-prepend">
											<span className="input-group-text">
												<i className="fa fa-male" />
											</span>
										</div>
										<TextMask
											mask={[/\d/, /\d/, /\d/, '-', /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]}
											Component={InputAdapter}
											className="form-control"
										/>
									</InputGroup>
									<FormText color="muted">ex. 999-99-9999</FormText>
								</FormGroup>
								<FormGroup>
									<Label>Eye Script</Label>
									<InputGroup>
										<div className="input-group-prepend">
											<span className="input-group-text">
												<i className="fa fa-asterisk" />
											</span>
										</div>
										<TextMask
											mask={['~', /\d/, '.', /\d/, /\d/, ' ', '~', /\d/, '.', /\d/, /\d/, ' ', /\d/, /\d/, /\d/]}
											Component={InputAdapter}
											className="form-control"
										/>
									</InputGroup>
									<FormText color="muted">ex. ~9.99 ~9.99 999</FormText>
								</FormGroup>
								<FormGroup>
									<Label>Credit Card Number</Label>
									<InputGroup>
										<div className="input-group-prepend">
											<span className="input-group-text">
												<i className="fa fa-credit-card" />
											</span>
										</div>
										<TextMask
											mask={[
												/\d/,
												/\d/,
												/\d/,
												/\d/,
												' ',
												/\d/,
												/\d/,
												/\d/,
												/\d/,
												' ',
												/\d/,
												/\d/,
												/\d/,
												/\d/,
												' ',
												/\d/,
												/\d/,
												/\d/,
												/\d/,
											]}
											Component={InputAdapter}
											className="form-control"
										/>
									</InputGroup>
									<FormText color="muted">ex. 9999 9999 9999 9999</FormText>
								</FormGroup>
							</CardBody>
						</Card>
					</Col>
					<Col sm={12} md={6}>
						<Card>
							<CardHeader>
								<i className="icon-note" />
								<strong>React-Select</strong>
								<div className="card-actions">
									<a href="github.com/JedWatson/react-select">
										<small className="text-muted">docs</small>
									</a>
								</div>
							</CardHeader>
							<CardBody>
								<Select name="form-field-name2" value={this.state.value} options={options} onChange={this.saveChanges} isMulti />
							</CardBody>
						</Card>
						<Card>
							<CardHeader>
								<i className="icon-calendar" />
								<strong>React-Dates</strong>
								<div className="card-actions">
									<a href="https://github.com/airbnb/react-dates">
										<small className="text-muted">docs</small>
									</a>
								</div>
							</CardHeader>
							<CardBody>
								<DateRangePicker
									startDate={this.state.startDate}
									startDateId="startDate"
									endDate={this.state.endDate}
									endDateId="endDate"
									onDatesChange={({ startDate, endDate }) => this.setState({ startDate, endDate })}
									focusedInput={this.state.focusedInput}
									onFocusChange={(focusedInput: FocusedInputShape | null) => this.setState({ focusedInput })}
									orientation={this.state.orientation}
									openDirection={this.state.openDirection}
								/>
							</CardBody>
						</Card>
					</Col>
				</Row>
			</div>
		)
	}
}

export default AdvancedForms
