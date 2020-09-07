import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Navbar, Nav } from "react-bootstrap";

import Trade from "./pages/Trade";
import Dashboard from "./pages/Dashboard";
import About from "./pages/About";

import "./App.css";

export default function App() {
  return (
    <Router>
      <div className="App">
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="/">Totle Sample</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/trade">Trade</Nav.Link>
            <Nav.Link href="/dashboard">Dashboard</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
          </Nav>
        </Navbar>

        <div className="App-content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/trade">
              <Trade />
            </Route>
            <Route path="/dashboard">
              <Dashboard />
            </Route>
            <Route path="/about">
              <About />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

//crypto Lorem Ipsum taken from https://placehodler.shapelabs.co/
const Home = () => (
  <div>
    <h2>Welcome!</h2>
    <div>
      <p>
        ICO based on few centralised exchange at many IPO, yet Cardano looked at
        the <em>efficient</em> bear when Mt. Gox accompanied by many
        considerable shitcoin. When Solidity proves a proof of work{" "}
        <a href="https://example.com">during</a> a{" "}
        <em>delegated proof-of-stake, Decred left few</em> mnemonic phrase,
        however, Golem mining many algo-traded <em>crypto-jacking!</em> Since
        Augur halving some dormant moon, SHA 256{" "}
        <a href="https://example.com">sharded the constant</a> turing-complete
        after a bear trap. Although Cardano managed a <strong>efficient</strong>{" "}
        digital signature during a chain, ICO thinking many burned moon, for{" "}
        <strong>although</strong> they generates some trusted{" "}
        <a href="https://example.com">multi signature, EOS surrendered</a> lots
        of permissioned ledger behind few digital identity.
      </p>
    </div>
  </div>
);
