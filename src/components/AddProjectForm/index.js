import { Component } from "react";

import {
    FormMainContainer,
    FormHeading,
    HrLine,
    Form,
    Label,
    Input,
    Add,
    Description,
} from "./styledComponents";

const ProjectsList = [
    {
        name: "NxtTrendz",
        link: "https://manojtrendzapp.ccbp.tech/",
        description:
            "Implemented Nxt Trendz application which is a clone for ECommerce applications like Amazon, Flipkart where users can login and can see list of products with search, filters, sort by, etc..",
        imageUrl: "",
    },
    {
        name: "Jobby App",
        link: "https://manojbjobbyapp.ccbp.tech/login",
        description:
            "Developed a comprehensive job search solution, Jobby App.",
    },
    {
        name: "Todos App",
        link: "https://manojtodoap.ccbp.tech/",
        description:
            "A task management solution, designed to make life easier.",
    },
];

class AddProjectFrom extends Component {
    state = { projects: ProjectsList };
    render() {
        return (
            <FormMainContainer>
                <FormHeading>Add Project</FormHeading>
                <HrLine />
                <Form>
                    <Label htmlFor="projectName">Project Name</Label>
                    <Input placeholder="Enter Project Name" id="projectName" />
                    <Label htmlFor="projectLink">Project Link</Label>
                    <Input id="projectLink" placeholder="Enter Project Link" />
                    <Label htmlFor="description">Project Name</Label>
                    <Description
                        id="description"
                        placeholder="Enter description"
                        cols="55"
                        rows="8"
                    />
                    <Add>Add</Add>
                </Form>
                <img
                    style={{ width: "100%" }}
                    src="https://fincity-assignment.vercel.app/_next/image?url=%2Fsection-bottom.png&w=1920&q=75"
                    alt="end"
                />
            </FormMainContainer>
        );
    }
}

export default AddProjectFrom;
