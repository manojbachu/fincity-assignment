import { Component } from "react";
import Profile from "./components/Profile";
import AddProjectForm from "./components/AddProjectForm";
import Projects from "./components/Projects";

import "./App.css";

class App extends Component {
    render() {
        return (
            <>
                <Profile />
                <AddProjectForm />
                <Projects />
            </>
        );
    }
}
export default App;
