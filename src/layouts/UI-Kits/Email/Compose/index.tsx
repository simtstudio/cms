import React, { PureComponent } from 'react'
import {
	Nav,
	NavItem,
	NavLink,
	ButtonDropdown,
	DropdownToggle,
	DropdownMenu,
	DropdownItem,
	Badge,
	Button,
	ButtonGroup,
	Form,
	FormGroup,
	Label,
	Input,
	Row,
	Col,
} from 'reactstrap'

interface IState {
	dropdownOpen: boolean
}

class Compose extends PureComponent<{}, IState> {
	constructor(props: any) {
		super(props)

		this.toggle = this.toggle.bind(this)
		this.state = {
			dropdownOpen: false,
		}
	}

	toggle() {
		this.setState({
			dropdownOpen: !this.state.dropdownOpen,
		})
	}

	render() {
		return (
			<div className="animated fadeIn">
				<div className="email-app">
					<nav>
						<a href="#/ui-kits/email/compose" className="btn btn-danger btn-block">
							New Email
						</a>
						<Nav>
							<NavItem>
								<NavLink href="#/ui-kits/email/inbox">
									<i className="fa fa-inbox" /> Inbox <Badge color="danger">4</Badge>
								</NavLink>
							</NavItem>
							<NavItem>
								<NavLink href="#">
									<i className="fa fa-star" /> Stared
								</NavLink>
							</NavItem>
							<NavItem>
								<NavLink href="#">
									<i className="fa fa-rocket" /> Sent
								</NavLink>
							</NavItem>
							<NavItem>
								<NavLink href="#">
									<i className="fa fa-trash-o" /> Trash
								</NavLink>
							</NavItem>
							<NavItem>
								<NavLink href="#">
									<i className="fa fa-bookmark" /> Important<Badge color="info">5</Badge>
								</NavLink>
							</NavItem>
							<NavItem>
								<NavLink href="#">
									<i className="fa fa-exclamation-circle" /> Spam <Badge color="danger">4</Badge>
								</NavLink>
							</NavItem>
						</Nav>
					</nav>
					<main>
						<p className="text-center">New Message</p>
						<Form>
							<FormGroup row className="mb-3">
								{/* strange reactstrap sizing for Label: className="col-2 col-sm-1 col-form-label" */}
								<Label for="to" xs={2} sm={1}>
									To:
								</Label>
								<Col xs={10} sm={11}>
									<Input type="email" id="to" placeholder="Type email" />
								</Col>
							</FormGroup>
							<FormGroup row className="mb-3">
								<Label for="cc" xs={2} sm={1}>
									CC:
								</Label>
								<Col xs={10} sm={11}>
									<Input type="email" id="cc" placeholder="Type email" />
								</Col>
							</FormGroup>
							<FormGroup row className="mb-3">
								<Label for="bcc" xs={2} sm={1}>
									BCC:
								</Label>
								<Col xs={10} sm={11}>
									<Input type="email" id="bcc" placeholder="Type email" />
								</Col>
							</FormGroup>
						</Form>
						<Row>
							<Col sm={11} className="ml-auto">
								<div className="toolbar" role="toolbar">
									<ButtonGroup>
										<Button color="light">
											<span className="fa fa-bold" />
										</Button>
										<Button color="light">
											<span className="fa fa-italic" />
										</Button>
										<Button color="light">
											<span className="fa fa-underline" />
										</Button>
									</ButtonGroup>
									<ButtonGroup>
										<Button color="light">
											<span className="fa fa-align-left" />
										</Button>
										<Button color="light">
											<span className="fa fa-align-right" />
										</Button>
										<Button color="light">
											<span className="fa fa-align-center" />
										</Button>
										<Button color="light">
											<span className="fa fa-align-justify" />
										</Button>
									</ButtonGroup>
									<ButtonGroup>
										<Button color="light">
											<span className="fa fa-indent" />
										</Button>
										<Button color="light">
											<span className="fa fa-outdent" />
										</Button>
									</ButtonGroup>
									<ButtonGroup>
										<Button color="light">
											<span className="fa fa-list-ul" />
										</Button>
										<Button color="light">
											<span className="fa fa-list-ol" />
										</Button>
									</ButtonGroup>
									<ButtonGroup>
										<Button color="light">
											<span className="fa fa-trash-o" />
										</Button>
										<Button color="light">
											<span className="fa fa-paperclip" />
										</Button>
										<ButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
											<DropdownToggle caret color="light">
												<span className="fa fa-tags" />
											</DropdownToggle>
											<DropdownMenu>
												<DropdownItem>
													add label<Badge color="danger">Home</Badge>
												</DropdownItem>
												<DropdownItem>
													add label<Badge color="info">Job</Badge>
												</DropdownItem>
												<DropdownItem>
													add label<Badge color="success">Clients</Badge>
												</DropdownItem>
												<DropdownItem>
													add label<Badge color="warning">News</Badge>
												</DropdownItem>
											</DropdownMenu>
										</ButtonDropdown>
									</ButtonGroup>
								</div>
								<FormGroup className="mt-4">
									<Input type="textarea" id="message" name="body" rows="12" placeholder="Click here to reply" />
								</FormGroup>
								<FormGroup>
									<Button type="submit" color="success">
										Send
									</Button>
									<Button type="submit" color="light">
										Draft
									</Button>
									<Button type="submit" color="danger">
										Discard
									</Button>
								</FormGroup>
							</Col>
						</Row>
					</main>
				</div>
			</div>
		)
	}
}

export default Compose
