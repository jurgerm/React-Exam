import { Navbar, Menu, Start, Item, Buttons, End, Logo } from "../ui/Navbar";
import { useAuth } from "../hooks/useAuth";
import { StyButton } from "../atoms/StyButton";

import NavLinkStyled from "./NavLinkStyled";

import logo from "../assets/logo.png"; // Tell webpack this JS file uses this image

export const Nav = () => {
    const auth = useAuth();

    const start = auth.token ? (
        <Start>
            <Item as="span">
                <NavLinkStyled exact to="/"
                    activeClassName="active"
                >Home</NavLinkStyled>
            </Item>

            <Item as="span">
                <NavLinkStyled to="/add"
                    activeClassName="active"
                >Add</NavLinkStyled>
            </Item>
        </Start>
    ) : (
        <Start>
            <Item as="span">
                <NavLinkStyled to="/login"
                    activeClassName="active"
                >Login</NavLinkStyled>
            </Item>

            <Item as="span">
                <NavLinkStyled to="/register"
                    activeClassName="active"
                >Register</NavLinkStyled>
            </Item>
        </Start>
    );

    const buttons = auth.token ? (
        <Buttons>
            <Item as="span">
                Welcome, {auth.email}!
            </Item>

            <Item as="span">
                <StyButton className="is-link" onClick={() => auth.logout()}>
                    Logout
                </StyButton>
            </Item>

        </Buttons>
    ) : null;

    return (
        <Navbar>
            <Logo>
                <img
                    alt="logo"
                    src={logo}
                />
            </Logo>
            <Menu>
                {start}
                <End>{buttons}</End>
            </Menu>
        </Navbar>
    );
};
