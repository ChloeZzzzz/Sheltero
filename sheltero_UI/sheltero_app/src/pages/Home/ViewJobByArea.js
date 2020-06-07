import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import ButtonBase from "@material-ui/core/ButtonBase";
import Container from "@material-ui/core/Container";
import Typography from "../../components/Typography";
import { H2 } from "../../components/theme";
import {JobTable} from "../../components/JobManagement/JobTable";
// import {JobCategories} from "./Sections/JobCategories";

function ViewArea() {
    return (
        <Container>
            <br/>
            <H2>
                {window.sessionStorage.getItem("searchingArea")}
            </H2>
            <JobTable />
        </Container>
    )
}
export default (ViewArea);
