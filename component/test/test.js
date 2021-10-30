import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import Link from "next/link";
import { useRouter } from "next/router";

function Test() {
  const router = useRouter();
  return (
    <Navbar bg="dark" variant="dark" sticky="top" expand="sm" collapseOnSelect>
      <Container>
        <Navbar.Brand>hello</Navbar.Brand>

        <Navbar.Toggle className="coloring">
        <div >:</div>
        </Navbar.Toggle>
        <Navbar.Collapse
          dir="rtl"
          style={{
            marginRight: "10px",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Nav
            className="mx-auto"
            style={{
              justifyContent: "center",
              alignContent: "center",
              alignItems: "center",
            }}
          >
            <NavDropdown title="Products">
              <NavDropdown.Item href="#products/tea">Tea</NavDropdown.Item>
              <NavDropdown.Item href="#products/coffee">
                Coffee
              </NavDropdown.Item>
              <NavDropdown.Item href="#products/chocolate">
                Chocolate
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#products/promo">Promo</NavDropdown.Item>
            </NavDropdown>
            <Link href="/" passHref={true}>
              <Nav.Link active={router.pathname === "/"}> Home </Nav.Link>
            </Link>
            <Link href="/news" passHref={true}>
              <Nav.Link active={router.pathname === "/news"}>News</Nav.Link>
            </Link>
            <Link href="/youtube" passHref={true}>
              <Nav.Link active={router.pathname === "/youtube"}>Youtube</Nav.Link>
            </Link>
            <Link href="/Blog" passHref={true}>
              <Nav.Link active={router.pathname === "/blog"}>Blog</Nav.Link>
            </Link>
            <Link href="/abute" passHref={true}>
              <Nav.Link active={router.pathname === "/abute"}>Abute</Nav.Link>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Test;
