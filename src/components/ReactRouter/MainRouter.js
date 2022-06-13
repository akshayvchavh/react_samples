// installing react-router-dom
// npm install react-router-dom@5
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import AboutPage from "./AboutPage";
import ContactUs from "./ContactUs";

const MainRouter = () => {
    return (
        <Router>
            <div>
            <Navbar />
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route path="/about">
                        <AboutPage />
                    </Route>
                    <Route path="/contact">
                        <ContactUs />
                    </Route>
                </Switch>
            </div>
        </Router>
    )
}

export default MainRouter;