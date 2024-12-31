import React, { Component } from 'react';
import { Collapse, Navbar, NavbarBrand, NavbarToggler } from 'reactstrap';
import { Link } from 'react-router-dom';
import './NavMenu.css';
import Emitter from "../EventEmitter"

export class NavMenu extends Component {
    static displayName = NavMenu.name;

    constructor (props) {
        super(props);

        this.toggleNavbar = this.toggleNavbar.bind(this);
        this.state = {
            collapsed: true
        };
    }

    toggleNavbar () {
        this.setState({
            collapsed: !this.state.collapsed
        });
    }

    render() {
        return (
            <header>
                <Navbar className="navbar-expand-sm navbar-toggleable-sm ng-white border-bottom box-shadow mb-3" container light>
                    <NavbarBrand tag={Link} to="/">Clocktower Notebook</NavbarBrand>
                    <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
                    <Collapse className="d-sm-inline-flex flex-sm-row-reverse" isOpen={!this.state.collapsed} navbar>
                        <ul className="navbar-nav flex-grow">
                            <button className="btn btn-primary" onClick={() => { Emitter.emit('TogglePopup', { name: 'charactersheet' }); } }>Characters</button>
                            <button className="btn btn-primary" onClick={() => { Emitter.emit('TogglePopup', { name: 'nightorder' }); }}>Night Order</button>
                            <button className="btn btn-primary" onClick={() => { Emitter.emit('TogglePopup', { name: 'grim' }); }}>Grim View</button>
                            <button className="btn btn-primary" onClick={() => { Emitter.emit('Clear', ''); }}>Clear Grim</button>
                            <button className="btn btn-primary" onClick={() => { Emitter.emit('TogglePopup', { name: 'reset' }); }}>Reset Grim</button>
                        </ul>
                    </Collapse>
                </Navbar>
            </header>
        );
    }
}
