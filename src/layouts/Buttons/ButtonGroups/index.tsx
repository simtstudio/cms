import React, { PureComponent } from 'react'
import {
    Row,
    Col,
    Card,
    CardHeader,
    CardBody,
    ButtonDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    Button,
    ButtonGroup,
    ButtonToolbar,
    Input,
    InputGroup,
} from 'reactstrap'

interface IState {
    dropdownOpen: boolean[]
}

class ButtonGroups extends PureComponent<{}, IState> {
    constructor(props: any) {
        super(props)

        this.toggle = this.toggle.bind(this)
        this.state = {
            dropdownOpen: new Array(2).fill(false),
        }
    }

    toggle(i: number) {
        const newArray = this.state.dropdownOpen.map((element, index) => {
            return index === i ? !element : false
        })
        this.setState({
            dropdownOpen: newArray,
        })
    }

    render() {
        return (
            <div className="animated fadeIn">
                <Row>
                    <Col xs="12">
                        <Card>
                            <CardHeader>
                                <i className="fa fa-align-justify" />
                                <strong>Button Group</strong>
                                <div className="card-actions">
                                    <a
                                        href="https://reactstrap.github.io/components/button-group/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <small className="text-muted">docs</small>
                                    </a>
                                </div>
                            </CardHeader>
                            <CardBody>
                                <ButtonGroup>
                                    <Button>Left</Button>
                                    <Button>Middle</Button>
                                    <Button>Right</Button>
                                </ButtonGroup>
                            </CardBody>
                        </Card>
                        <Card>
                            <CardHeader>
                                <i className="fa fa-align-justify" />
                                <strong>Button Toolbar</strong>
                            </CardHeader>
                            <CardBody>
                                <ButtonToolbar>
                                    <ButtonGroup className="mr-2">
                                        <Button>1</Button>
                                        <Button>2</Button>
                                        <Button>3</Button>
                                        <Button>4</Button>
                                    </ButtonGroup>
                                    <ButtonGroup className="mr-2">
                                        <Button>5</Button>
                                        <Button>6</Button>
                                        <Button>7</Button>
                                    </ButtonGroup>
                                    <ButtonGroup>
                                        <Button>8</Button>
                                    </ButtonGroup>
                                </ButtonToolbar>
                            </CardBody>
                        </Card>
                        <Card>
                            <CardHeader>
                                <i className="fa fa-align-justify" />
                                <strong>Button Toolbar</strong> <small>mix with input groups</small>
                            </CardHeader>
                            <CardBody>
                                <ButtonToolbar className="mb-3">
                                    <ButtonGroup className="mr-2">
                                        <Button>1</Button>
                                        <Button>2</Button>
                                        <Button>3</Button>
                                        <Button>4</Button>
                                    </ButtonGroup>
                                    <InputGroup>
                                        <div className="input-group-prepend">
                                            <span className="input-group-text">@</span>
                                        </div>
                                        <Input placeholder="Input group example" />
                                    </InputGroup>
                                </ButtonToolbar>
                                <ButtonToolbar className="justify-content-between">
                                    <ButtonGroup>
                                        <Button>1</Button>
                                        <Button>2</Button>
                                        <Button>3</Button>
                                        <Button>4</Button>
                                    </ButtonGroup>
                                    <InputGroup>
                                        <div className="input-group-prepend">
                                            <span className="input-group-text">@</span>
                                        </div>
                                        <Input placeholder="Input group example" />
                                    </InputGroup>
                                </ButtonToolbar>
                            </CardBody>
                        </Card>
                        <Card>
                            <CardHeader>
                                <i className="fa fa-align-justify" />
                                <strong>Sizing</strong>
                            </CardHeader>
                            <CardBody>
                                <ButtonGroup size="lg">
                                    <Button>Left</Button>
                                    <Button>Middle</Button>
                                    <Button>Right</Button>
                                </ButtonGroup>
                                <hr />
                                <ButtonGroup>
                                    <Button>Left</Button>
                                    <Button>Middle</Button>
                                    <Button>Right</Button>
                                </ButtonGroup>
                                <hr />
                                <ButtonGroup size="sm">
                                    <Button>Left</Button>
                                    <Button>Middle</Button>
                                    <Button>Right</Button>
                                </ButtonGroup>
                            </CardBody>
                        </Card>
                        <Card>
                            <CardHeader>
                                <i className="fa fa-align-justify" />
                                <strong>Nesting</strong>
                            </CardHeader>
                            <CardBody>
                                <ButtonGroup>
                                    <Button>1</Button>
                                    <Button>2</Button>
                                    <ButtonDropdown
                                        isOpen={this.state.dropdownOpen[0]}
                                        toggle={() => {
                                            this.toggle(0)
                                        }}
                                    >
                                        <DropdownToggle caret>Dropdown</DropdownToggle>
                                        <DropdownMenu>
                                            <DropdownItem>Dropdown Link</DropdownItem>
                                            <DropdownItem>Dropdown Link</DropdownItem>
                                        </DropdownMenu>
                                    </ButtonDropdown>
                                </ButtonGroup>
                            </CardBody>
                        </Card>
                        <Card>
                            <CardHeader>
                                <i className="fa fa-align-justify" />
                                <strong>Vertical variation</strong>
                            </CardHeader>
                            <CardBody>
                                <ButtonGroup vertical>
                                    <Button>1</Button>
                                    <Button>2</Button>
                                    <ButtonDropdown
                                        isOpen={this.state.dropdownOpen[1]}
                                        toggle={() => {
                                            this.toggle(1)
                                        }}
                                    >
                                        <DropdownToggle caret>Dropdown</DropdownToggle>
                                        <DropdownMenu>
                                            <DropdownItem>Dropdown Link</DropdownItem>
                                            <DropdownItem>Dropdown Link</DropdownItem>
                                        </DropdownMenu>
                                    </ButtonDropdown>
                                </ButtonGroup>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default ButtonGroups
