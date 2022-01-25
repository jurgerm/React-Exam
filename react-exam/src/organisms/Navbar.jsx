import { Navbar, Menu, Start, Item, Buttons, End } from "../ui/Navbar";
import { useAuth } from "../hooks/useAuth";
import { Button } from "../ui/Button";
import { StyButton } from "../atoms/StyButton";
import NavLink from "./NavLink";


import logo from "../assets/logo.png"; // Tell webpack this JS file uses this image




export const Nav = () => {
    const auth = useAuth();

    const start = auth.token ? (
        <Start>
            <Item as="span">
                <NavLink to="/">Home</NavLink>
            </Item>

            <Item as="span">
                <NavLink to="/add">Add</NavLink>
            </Item>
        </Start>
    ) : null

    const buttons = auth.token ? (
        <Buttons>
            <Item as="span">
                Welcome, {auth.username}!
            </Item>
            <Item as="span">
                <Button className="is-link" onClick={() => auth.logout()}>
                    Logout
                </Button>
            </Item>
        </Buttons>
    ) : (
        <Buttons>
            <StyButton>
                <Item as="span">
                        <NavLink className="button is-primary" to="/login">
                        Login
                        </NavLink>

                </Item>
            </StyButton>


            <StyButton>

                <Item as="span">
                        <NavLink className="button is-primary" to="/register">
                        Register
                    </NavLink>
                </Item>
            </StyButton>
        </Buttons>


    );

    return (
        <Navbar>
            <img
                alt="logo"
                src={logo}
            />
            <Menu>

                {start}
                <End>{buttons}</End>
            </Menu>
        </Navbar>
    );
};


