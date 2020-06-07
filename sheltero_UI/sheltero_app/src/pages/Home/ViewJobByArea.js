import React from "react";
import Container from "@material-ui/core/Container";
import { H2 } from "../../components/theme";
import {JobTable} from "../../components/JobManagement/JobTable";
// import {JobCategories} from "./Sections/JobCategories";

function ViewArea() {
    return (
        <Container>
            <br/>
            <H2>
                Melbourne - CBD
            </H2>
            <JobTable />
        </Container>
    )
}
export default (ViewArea);
