import React, { Component } from "react";
import { useState, useEffect } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import Paper from "@mui/material/Paper";
import TableContainer from "@mui/material/TableContainer";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import TableBody from "@mui/material/TableBody";
import Box from "@mui/material/Box";

class MyDashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded1: false,
      expanded2: false,
      drawerOpen: false,
      currentPage: "home",
    };
    this.handleChange1 = this.handleChange1.bind(this);
    this.handleChange2 = this.handleChange2.bind(this);
  }

  componentDidMount() {
    const script = document.createElement("script");
    script.src = "https://public.tableau.com/javascripts/api/viz_v1.js";
    script.async = true;
    document.body.appendChild(script);
  }

  handleChange1() {
    this.setState({
      expanded1: !this.state.expanded1,
    });
  }

  handleChange2() {
    this.setState({
      expanded2: !this.state.expanded2,
    });
  }

  handleDrawerClick = () => {
    this.setState((prevState) => ({
      drawerOpen: !prevState.drawerOpen,
    }));
  };

  handleHomeClick = () => {
    this.setState(
      {
        currentPage: "home",
      }
    );
  };

  handleHospitalStaysClick = () => {
    this.setState(
      {
        currentPage: "hospitalStays",
      }
    );
  };

  handleFoodScarcityClick = () => {
    this.setState(
      {
        currentPage: "foodScarcity",
      }
    );
  };

  handleIncomeClick = () => {
    this.setState(
      {
        currentPage: "incomeUnemployment",
      }
    );
  };

  handleOnsiteWorkClick = () => {
    this.setState(
      {
        currentPage: "onsiteWork",
      }
    );
  };

  handleRuralUrbanClick = () => {
    this.setState(
      {
        currentPage: "ruralUrban",
      }
    );
  };

  handleVaxClick = () => {
    this.setState(
      {
        currentPage: "vax",
      }
    );
  };

  handleMiscClick = () => {
    this.setState(
      {
        currentPage: "misc",
      }
    );
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.currentPage !== this.state.currentPage) {
      const script = document.createElement("script");
      script.src = "https://public.tableau.com/javascripts/api/viz_v1.js";
      script.async = true;
      document.body.appendChild(script);
    }
  }

  render() {
    const drawerWidth = 230;
    return (
      <React.Fragment>
        <Drawer variant="persistent" anchor="left" open={this.state.drawerOpen}>
          <IconButton onClick={this.handleDrawerClick}>
            <ChevronLeftIcon />
          </IconButton>
          <List>
            {[
              "Home",
              "Food Scarcity",
              "Hospitalization",
              "Income and Unemployment",
              "Onsite Work",
              "Rural/Urban Regions",
              "Vaccinations",
              "Miscellaneous",
            ].map((text) => (
              <ListItem key={text} disablePadding>
                <ListItemButton
                  onClick={
                    text === "Home"
                      ? this.handleHomeClick
                      : text === "Hospitalization"
                      ? this.handleHospitalStaysClick
                      : text === "Food Scarcity"
                      ? this.handleFoodScarcityClick
                      : text === "Income and Unemployment"
                      ? this.handleIncomeClick
                      : text === "Onsite Work"
                      ? this.handleOnsiteWorkClick
                      : text === "Rural/Urban Regions"
                      ? this.handleRuralUrbanClick
                      : text === "Vaccinations"
                      ? this.handleVaxClick
                      : text === "Miscellaneous"
                      ? this.handleMiscClick
                      : undefined
                  }
                >
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Drawer>
        <div style={{ marginLeft: this.state.drawerOpen ? drawerWidth : 0 }}>
          <div
            style={{
              backgroundColor: "#AC2B37",
              color: "#FFFFFF",
              padding: "10px",
              display: "flex",
              alignItems: "center",
            }}
          >
            {!this.state.drawerOpen && (
              <IconButton onClick={this.handleDrawerClick}>
                <MenuIcon />
              </IconButton>
            )}
            <Typography variant="h4" onClick={this.handleHomeClick}>
              COVID-MQP
            </Typography>
          </div>
          {this.state.currentPage === "home" ? (
            <div>
              <Box padding={2}>
                <Typography variant="h6">
                  Answering Unique Questions Pertaining to the COVID-19 Pandemic
                </Typography>
                <Typography variant="subtitle1">
                  Worcester Polytechnic Institute - Major Qualifying Project
                </Typography>
                <Typography variant="subtitle2">
                  Dates: August 24, 2022 - April 21, 2023
                </Typography>
              </Box>

              <Box padding={2}>
                <Typography variant="h6">Team Members:</Typography>
                <TableContainer component={Paper}>
                  <Table>
                    <TableHead>
                      <TableRow>
                        <TableCell><b>Name</b></TableCell>
                        <TableCell><b>Major(s)</b></TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      <TableRow>
                        <TableCell>Steven Tran</TableCell>
                        <TableCell>Computer Science & Data Science</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Dylan Shanes</TableCell>
                        <TableCell>Computer Science</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Tia Mehta</TableCell>
                        <TableCell>Computer Science</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </TableContainer>
              </Box>

              <Box padding={2}>
                <Typography variant="h6">Advisor:</Typography>
                <TableContainer component={Paper}>
                  <Table>
                    <TableHead>
                      <TableRow>
                        <TableCell><b>Name</b></TableCell>
                        <TableCell><b>Role</b></TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      <TableRow>
                        <TableCell>Torumoy Ghoshal</TableCell>
                        <TableCell>
                          Assistant Teaching Professor - Data Science Program
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </TableContainer>
              </Box>

              <Box padding={2}>
                {" "}
                <Typography variant="h6"> Questions </Typography>
                <TableContainer component={Paper}>
                  <Table>
                    <TableHead>
                      <TableRow>
                        <TableCell><b>Question #</b></TableCell>
                        <TableCell><b>Question</b></TableCell>
                        <TableCell><b>Category</b></TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      <TableRow>
                        <TableCell>1</TableCell>
                        <TableCell>
                          Is there a discrepancy in COVID-19 deaths per state
                          when comparing urban and rural regions?
                        </TableCell>
                        <TableCell>Rural/Urban Regions</TableCell>{" "}
                      </TableRow>{" "}
                      <TableRow>
                        {" "}
                        <TableCell>2</TableCell>{" "}
                        <TableCell>
                          Is there a connection between COVID-19 deaths and
                          county income?
                        </TableCell>{" "}
                        <TableCell>Income and Unemployment</TableCell>{" "}
                      </TableRow>{" "}
                      <TableRow>
                        {" "}
                        <TableCell>3</TableCell>{" "}
                        <TableCell>
                          Is there a relationship between vaccinations and type
                          of region (rural or urban)?
                        </TableCell>{" "}
                        <TableCell>Rural/Urban Regions</TableCell>{" "}
                      </TableRow>{" "}
                      <TableRow>
                        {" "}
                        <TableCell>4</TableCell>{" "}
                        <TableCell>
                          Do payments to rural and non-rural areas have an
                          impact on the number of deaths in those regions?
                        </TableCell>{" "}
                        <TableCell>Rural/Urban Regions</TableCell>{" "}
                      </TableRow>{" "}
                      <TableRow>
                        {" "}
                        <TableCell>5</TableCell>{" "}
                        <TableCell>
                          Do states where there is a higher percentage of people
                          who have difficulty paying for household expenses have
                          a higher number of hospital deaths?
                        </TableCell>{" "}
                        <TableCell>Income and Unemployment</TableCell>{" "}
                      </TableRow>{" "}
                      <TableRow>
                        {" "}
                        <TableCell>6</TableCell>{" "}
                        <TableCell>
                          Is there a connection between household telehealth and
                          place of death?
                        </TableCell>{" "}
                        <TableCell>Miscellaneous</TableCell>{" "}
                      </TableRow>
                      <TableRow>
                        {" "}
                        <TableCell>7</TableCell>{" "}
                        <TableCell>
                          How have the age groups affected by COVID-19 changed
                          over the course of the pandemic?
                        </TableCell>{" "}
                        <TableCell>Miscellaneous</TableCell>{" "}
                      </TableRow>{" "}
                      <TableRow>
                        {" "}
                        <TableCell>8</TableCell>{" "}
                        <TableCell>
                          What is the connection between state populations,
                          population densities, and COVID-19 deaths?
                        </TableCell>{" "}
                        <TableCell>Miscellaneous</TableCell>{" "}
                      </TableRow>{" "}
                      <TableRow>
                        {" "}
                        <TableCell>9</TableCell>{" "}
                        <TableCell>
                          Does the percentage of adults fully vaccinated in a
                          state affect the excess deaths from COVID-19?
                        </TableCell>{" "}
                        <TableCell>Vaccinations</TableCell>{" "}
                      </TableRow>{" "}
                      <TableRow>
                        {" "}
                        <TableCell>10</TableCell>{" "}
                        <TableCell>
                          How has food scarcity changed in the United States
                          throughout the course of the pandemic?
                        </TableCell>{" "}
                        <TableCell>Food Scarcity</TableCell>{" "}
                      </TableRow>{" "}
                      <TableRow>
                        {" "}
                        <TableCell>11</TableCell>{" "}
                        <TableCell>
                          How does food scarcity in America relate to the
                          COVID-19 deaths in each state?
                        </TableCell>{" "}
                        <TableCell>Food Scarcity</TableCell>{" "}
                      </TableRow>{" "}
                      <TableRow>
                        {" "}
                        <TableCell>12</TableCell>{" "}
                        <TableCell>
                          Which states have the highest percentage of onsite
                          workers?
                        </TableCell>{" "}
                        <TableCell>Onsite Work</TableCell>{" "}
                      </TableRow>{" "}
                      <TableRow>
                        {" "}
                        <TableCell>13</TableCell>{" "}
                        <TableCell>
                          How has the number of people working onsite changed
                          throughout the pandemic?
                        </TableCell>{" "}
                        <TableCell>Onsite Work</TableCell>{" "}
                      </TableRow>{" "}
                      <TableRow>
                        {" "}
                        <TableCell>14</TableCell>{" "}
                        <TableCell>
                          How has each state changed in terms of percentage of
                          people working onsite throughout the pandemic?
                        </TableCell>{" "}
                        <TableCell> Onsite Work </TableCell>{" "}
                      </TableRow>{" "}
                      <TableRow>
                        {" "}
                        <TableCell> 15 </TableCell>{" "}
                        <TableCell>
                          {" "}
                          How much of the older population receives an
                          additional booster vaccine after the first ?{" "}
                        </TableCell>{" "}
                        <TableCell> Vaccinations </TableCell>{" "}
                      </TableRow>{" "}
                      <TableRow>
                        {" "}
                        <TableCell> 16 </TableCell>{" "}
                        <TableCell>
                          {" "}
                          On average , what date did each state close their
                          schools ?{" "}
                        </TableCell>{" "}
                        <TableCell> Miscellaneous </TableCell>{" "}
                      </TableRow>
                      <TableRow>
                        {" "}
                        <TableCell> 17 </TableCell>{" "}
                        <TableCell>
                          {" "}
                          What is the relation between deaths involving COVID -
                          19 and average income in each county from 2019 , 2020
                          , and 2021 ?{" "}
                        </TableCell>
                        <TableCell>Income and Unemployment</TableCell>{" "}
                      </TableRow>
                      <TableRow>
                        {" "}
                        <TableCell>18</TableCell>{" "}
                        <TableCell>
                          What is the effect on state mandated restaurant action
                          on food scarcity during the COVID-19 pandemic?
                        </TableCell>{" "}
                        <TableCell>Food Scarcity</TableCell>{" "}
                      </TableRow>{" "}
                      <TableRow>
                        {" "}
                        <TableCell>19</TableCell>{" "}
                        <TableCell>
                          How does unemployment during the COVID-19 pandemic
                          relate to food scarcity in each state?
                        </TableCell>{" "}
                        <TableCell>Food Scarcity</TableCell>{" "}
                      </TableRow>{" "}
                      <TableRow>
                        {" "}
                        <TableCell>20</TableCell>{" "}
                        <TableCell>
                          How does state income impact food scarcity during
                          COVID-19?
                        </TableCell>{" "}
                        <TableCell>Food Scarcity</TableCell>{" "}
                      </TableRow>{" "}
                      <TableRow>
                        {" "}
                        <TableCell>21</TableCell>{" "}
                        <TableCell>
                          How does the Social Vulnerability Index per county
                          relate to the income per county during COVID-19?
                        </TableCell>{" "}
                        <TableCell>Income and Unemployment</TableCell>{" "}
                      </TableRow>{" "}
                      <TableRow>
                        {" "}
                        <TableCell>22</TableCell>{" "}
                        <TableCell>
                          How has the average length of hospital stays changed
                          throughout the COVID-19 pandemic between age groups?
                        </TableCell>{" "}
                        <TableCell>Hospitalization</TableCell>{" "}
                      </TableRow>{" "}
                      <TableRow>
                        {" "}
                        <TableCell>23</TableCell>{" "}
                        <TableCell>
                          How has the average length of hospital stays changed
                          throughout the COVID-19 pandemic changed depending on
                          whether a person was discharged alive or dead?
                        </TableCell>{" "}
                        <TableCell> Hospitalization </TableCell>{" "}
                      </TableRow>{" "}
                      <TableRow>
                        {" "}
                        <TableCell> 24 </TableCell>{" "}
                        <TableCell>
                          {" "}
                          How did unemployment during the COVID - 19 pandemic
                          affect mental health help ?{" "}
                        </TableCell>{" "}
                        <TableCell> Income and Unemployment </TableCell>{" "}
                      </TableRow>{" "}
                    </TableBody>
                  </Table>
                </TableContainer>
              </Box>
            </div>
          ) : this.state.currentPage === "hospitalStays" ? (
            <div>
              {this.state.currentPage === "hospitalStays" && (
                <Accordion
                  key="hospitalDischarge"
                  expanded={this.state.expanded1}
                  onChange={this.handleChange1}
                >
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <Typography variant="h6">
                      Change in Average Length of Hospital Stays Based on
                      Discharge Status
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <div
                      className="tableauPlaceholder"
                      id="viz1681880993682"
                      style={{
                        position: "relative",
                        width: "100%",
                        height: "100%",
                        overflow: "auto",
                      }}
                    >
                      <noscript>
                        <a href="#">
                          <img
                            alt="Change in Average Length of Hospital Stays Based on Discharge Status "
                            src="https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;Av&#47;AvgLengthOfStaysDischargeStatus&#47;Sheet1&#47;1_rss.png"
                            style={{ border: "none" }}
                          />
                        </a>
                      </noscript>
                      <object
                        className="tableauViz"
                        style={{ width: "100%", height: "800px" }}
                      >
                        <param
                          name="host_url"
                          value="https%3A%2F%2Fpublic.tableau.com%2F"
                        />
                        <param name="embed_code_version" value="3" />
                        <param name="site_root" value="" />
                        <param
                          name="name"
                          value="AvgLengthOfStaysDischargeStatus&#47;Sheet1"
                        />
                        <param name="tabs" value="no" />
                        <param name="toolbar" value="yes" />
                        <param
                          name="static_image"
                          value="https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;Av&#47;AvgLengthOfStaysDischargeStatus&#47;Sheet1&#47;1.png"
                        />
                        <param name="animate_transition" value="yes" />
                        <param name="display_static_image" value="yes" />
                        <param name="display_spinner" value="yes" />
                        <param name="display_overlay" value="yes" />
                        <param name="display_count" value="yes" />
                        <param name="language" value="en-US" />
                      </object>
                    </div>
                  </AccordionDetails>
                </Accordion>
              )}
              <Accordion
                key="hospitalAge"
                expanded={this.state.expanded2}
                onChange={this.handleChange2}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel2a-content"
                  id="panel2a-header"
                >
                  <Typography variant="h6">
                    Change in Average Length of Hospital Stays Based on Age
                    Group
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <div
                    className="tableauPlaceholder"
                    id="viz1681932596699"
                    style={{
                      position: "relative",
                      width: "100%",
                      height: "100%",
                      overflow: "auto",
                    }}
                  >
                    <noscript>
                      <a href="#">
                        <img
                          alt="Change in Average Length of Hospital Stays Based on Age Group "
                          src="https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;Av&#47;AvgLengthOfStaysAge&#47;Sheet1&#47;1_rss.png"
                          style="border: none"
                        />
                      </a>
                    </noscript>
                    <object
                      class="tableauViz"
                      style={{ width: "100%", height: "800px" }}
                    >
                      <param
                        name="host_url"
                        value="https%3A%2F%2Fpublic.tableau.com%2F"
                      />
                      <param name="embed_code_version" value="3" />
                      <param name="site_root" value="" />
                      <param
                        name="name"
                        value="AvgLengthOfStaysAge&#47;Sheet1"
                      />
                      <param name="tabs" value="no" />
                      <param name="toolbar" value="yes" />
                      <param
                        name="static_image"
                        value="https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;Av&#47;AvgLengthOfStaysAge&#47;Sheet1&#47;1.png"
                      />
                      <param name="animate_transition" value="yes" />
                      <param name="display_static_image" value="yes" />
                      <param name="display_spinner" value="yes" />
                      <param name="display_overlay" value="yes" />
                      <param name="display_count" value="yes" />
                      <param name="language" value="en-US" />
                    </object>
                  </div>
                </AccordionDetails>
              </Accordion>
            </div>
            ) : this.state.currentPage === "foodScarcity" ? (
              <div>
              {this.state.currentPage === "hospitalStays" && (
                <Accordion
                  key="hospitalDischarge"
                  expanded={this.state.expanded1}
                  onChange={this.handleChange1}
                >
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <Typography variant="h6">
                      Change in Average Length of Hospital Stays Based on
                      Discharge Status
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <div
                      className="tableauPlaceholder"
                      id="viz1681880993682"
                      style={{
                        position: "relative",
                        width: "100%",
                        height: "100%",
                        overflow: "auto",
                      }}
                    >
                      <noscript>
                        <a href="#">
                          <img
                            alt="Change in Average Length of Hospital Stays Based on Discharge Status "
                            src="https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;Av&#47;AvgLengthOfStaysDischargeStatus&#47;Sheet1&#47;1_rss.png"
                            style={{ border: "none" }}
                          />
                        </a>
                      </noscript>
                      <object
                        className="tableauViz"
                        style={{ width: "100%", height: "800px" }}
                      >
                        <param
                          name="host_url"
                          value="https%3A%2F%2Fpublic.tableau.com%2F"
                        />
                        <param name="embed_code_version" value="3" />
                        <param name="site_root" value="" />
                        <param
                          name="name"
                          value="AvgLengthOfStaysDischargeStatus&#47;Sheet1"
                        />
                        <param name="tabs" value="no" />
                        <param name="toolbar" value="yes" />
                        <param
                          name="static_image"
                          value="https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;Av&#47;AvgLengthOfStaysDischargeStatus&#47;Sheet1&#47;1.png"
                        />
                        <param name="animate_transition" value="yes" />
                        <param name="display_static_image" value="yes" />
                        <param name="display_spinner" value="yes" />
                        <param name="display_overlay" value="yes" />
                        <param name="display_count" value="yes" />
                        <param name="language" value="en-US" />
                      </object>
                    </div>
                  </AccordionDetails>
                </Accordion>
              )}
              <Accordion
                key="hospitalAge"
                expanded={this.state.expanded2}
                onChange={this.handleChange2}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel2a-content"
                  id="panel2a-header"
                >
                  <Typography variant="h6">
                    Change in Average Length of Hospital Stays Based on Age
                    Group
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <div
                    className="tableauPlaceholder"
                    id="viz1681932596699"
                    style={{
                      position: "relative",
                      width: "100%",
                      height: "100%",
                      overflow: "auto",
                    }}
                  >
                    <noscript>
                      <a href="#">
                        <img
                          alt="Change in Average Length of Hospital Stays Based on Age Group "
                          src="https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;Av&#47;AvgLengthOfStaysAge&#47;Sheet1&#47;1_rss.png"
                          style="border: none"
                        />
                      </a>
                    </noscript>
                    <object
                      class="tableauViz"
                      style={{ width: "100%", height: "800px" }}
                    >
                      <param
                        name="host_url"
                        value="https%3A%2F%2Fpublic.tableau.com%2F"
                      />
                      <param name="embed_code_version" value="3" />
                      <param name="site_root" value="" />
                      <param
                        name="name"
                        value="AvgLengthOfStaysAge&#47;Sheet1"
                      />
                      <param name="tabs" value="no" />
                      <param name="toolbar" value="yes" />
                      <param
                        name="static_image"
                        value="https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;Av&#47;AvgLengthOfStaysAge&#47;Sheet1&#47;1.png"
                      />
                      <param name="animate_transition" value="yes" />
                      <param name="display_static_image" value="yes" />
                      <param name="display_spinner" value="yes" />
                      <param name="display_overlay" value="yes" />
                      <param name="display_count" value="yes" />
                      <param name="language" value="en-US" />
                    </object>
                  </div>
                </AccordionDetails>
              </Accordion>
            </div>
              ) : this.state.currentPage === "incomeUnemployment" ? (
                <div>
              {this.state.currentPage === "hospitalStays" && (
                <Accordion
                  key="hospitalDischarge"
                  expanded={this.state.expanded1}
                  onChange={this.handleChange1}
                >
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <Typography variant="h6">
                      Change in Average Length of Hospital Stays Based on
                      Discharge Status
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <div
                      className="tableauPlaceholder"
                      id="viz1681880993682"
                      style={{
                        position: "relative",
                        width: "100%",
                        height: "100%",
                        overflow: "auto",
                      }}
                    >
                      <noscript>
                        <a href="#">
                          <img
                            alt="Change in Average Length of Hospital Stays Based on Discharge Status "
                            src="https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;Av&#47;AvgLengthOfStaysDischargeStatus&#47;Sheet1&#47;1_rss.png"
                            style={{ border: "none" }}
                          />
                        </a>
                      </noscript>
                      <object
                        className="tableauViz"
                        style={{ width: "100%", height: "800px" }}
                      >
                        <param
                          name="host_url"
                          value="https%3A%2F%2Fpublic.tableau.com%2F"
                        />
                        <param name="embed_code_version" value="3" />
                        <param name="site_root" value="" />
                        <param
                          name="name"
                          value="AvgLengthOfStaysDischargeStatus&#47;Sheet1"
                        />
                        <param name="tabs" value="no" />
                        <param name="toolbar" value="yes" />
                        <param
                          name="static_image"
                          value="https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;Av&#47;AvgLengthOfStaysDischargeStatus&#47;Sheet1&#47;1.png"
                        />
                        <param name="animate_transition" value="yes" />
                        <param name="display_static_image" value="yes" />
                        <param name="display_spinner" value="yes" />
                        <param name="display_overlay" value="yes" />
                        <param name="display_count" value="yes" />
                        <param name="language" value="en-US" />
                      </object>
                    </div>
                  </AccordionDetails>
                </Accordion>
              )}
              <Accordion
                key="hospitalAge"
                expanded={this.state.expanded2}
                onChange={this.handleChange2}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel2a-content"
                  id="panel2a-header"
                >
                  <Typography variant="h6">
                    Change in Average Length of Hospital Stays Based on Age
                    Group
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <div
                    className="tableauPlaceholder"
                    id="viz1681932596699"
                    style={{
                      position: "relative",
                      width: "100%",
                      height: "100%",
                      overflow: "auto",
                    }}
                  >
                    <noscript>
                      <a href="#">
                        <img
                          alt="Change in Average Length of Hospital Stays Based on Age Group "
                          src="https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;Av&#47;AvgLengthOfStaysAge&#47;Sheet1&#47;1_rss.png"
                          style="border: none"
                        />
                      </a>
                    </noscript>
                    <object
                      class="tableauViz"
                      style={{ width: "100%", height: "800px" }}
                    >
                      <param
                        name="host_url"
                        value="https%3A%2F%2Fpublic.tableau.com%2F"
                      />
                      <param name="embed_code_version" value="3" />
                      <param name="site_root" value="" />
                      <param
                        name="name"
                        value="AvgLengthOfStaysAge&#47;Sheet1"
                      />
                      <param name="tabs" value="no" />
                      <param name="toolbar" value="yes" />
                      <param
                        name="static_image"
                        value="https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;Av&#47;AvgLengthOfStaysAge&#47;Sheet1&#47;1.png"
                      />
                      <param name="animate_transition" value="yes" />
                      <param name="display_static_image" value="yes" />
                      <param name="display_spinner" value="yes" />
                      <param name="display_overlay" value="yes" />
                      <param name="display_count" value="yes" />
                      <param name="language" value="en-US" />
                    </object>
                  </div>
                </AccordionDetails>
              </Accordion>
            </div>
                ) : this.state.currentPage === "onsiteWork" ? (
                  <div>
              {this.state.currentPage === "hospitalStays" && (
                <Accordion
                  key="hospitalDischarge"
                  expanded={this.state.expanded1}
                  onChange={this.handleChange1}
                >
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <Typography variant="h6">
                      Change in Average Length of Hospital Stays Based on
                      Discharge Status
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <div
                      className="tableauPlaceholder"
                      id="viz1681880993682"
                      style={{
                        position: "relative",
                        width: "100%",
                        height: "100%",
                        overflow: "auto",
                      }}
                    >
                      <noscript>
                        <a href="#">
                          <img
                            alt="Change in Average Length of Hospital Stays Based on Discharge Status "
                            src="https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;Av&#47;AvgLengthOfStaysDischargeStatus&#47;Sheet1&#47;1_rss.png"
                            style={{ border: "none" }}
                          />
                        </a>
                      </noscript>
                      <object
                        className="tableauViz"
                        style={{ width: "100%", height: "800px" }}
                      >
                        <param
                          name="host_url"
                          value="https%3A%2F%2Fpublic.tableau.com%2F"
                        />
                        <param name="embed_code_version" value="3" />
                        <param name="site_root" value="" />
                        <param
                          name="name"
                          value="AvgLengthOfStaysDischargeStatus&#47;Sheet1"
                        />
                        <param name="tabs" value="no" />
                        <param name="toolbar" value="yes" />
                        <param
                          name="static_image"
                          value="https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;Av&#47;AvgLengthOfStaysDischargeStatus&#47;Sheet1&#47;1.png"
                        />
                        <param name="animate_transition" value="yes" />
                        <param name="display_static_image" value="yes" />
                        <param name="display_spinner" value="yes" />
                        <param name="display_overlay" value="yes" />
                        <param name="display_count" value="yes" />
                        <param name="language" value="en-US" />
                      </object>
                    </div>
                  </AccordionDetails>
                </Accordion>
              )}
              <Accordion
                key="hospitalAge"
                expanded={this.state.expanded2}
                onChange={this.handleChange2}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel2a-content"
                  id="panel2a-header"
                >
                  <Typography variant="h6">
                    Change in Average Length of Hospital Stays Based on Age
                    Group
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <div
                    className="tableauPlaceholder"
                    id="viz1681932596699"
                    style={{
                      position: "relative",
                      width: "100%",
                      height: "100%",
                      overflow: "auto",
                    }}
                  >
                    <noscript>
                      <a href="#">
                        <img
                          alt="Change in Average Length of Hospital Stays Based on Age Group "
                          src="https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;Av&#47;AvgLengthOfStaysAge&#47;Sheet1&#47;1_rss.png"
                          style="border: none"
                        />
                      </a>
                    </noscript>
                    <object
                      class="tableauViz"
                      style={{ width: "100%", height: "800px" }}
                    >
                      <param
                        name="host_url"
                        value="https%3A%2F%2Fpublic.tableau.com%2F"
                      />
                      <param name="embed_code_version" value="3" />
                      <param name="site_root" value="" />
                      <param
                        name="name"
                        value="AvgLengthOfStaysAge&#47;Sheet1"
                      />
                      <param name="tabs" value="no" />
                      <param name="toolbar" value="yes" />
                      <param
                        name="static_image"
                        value="https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;Av&#47;AvgLengthOfStaysAge&#47;Sheet1&#47;1.png"
                      />
                      <param name="animate_transition" value="yes" />
                      <param name="display_static_image" value="yes" />
                      <param name="display_spinner" value="yes" />
                      <param name="display_overlay" value="yes" />
                      <param name="display_count" value="yes" />
                      <param name="language" value="en-US" />
                    </object>
                  </div>
                </AccordionDetails>
              </Accordion>
            </div>
                  ) : this.state.currentPage === "ruralUrban" ? (
                    <div>
              {this.state.currentPage === "hospitalStays" && (
                <Accordion
                  key="hospitalDischarge"
                  expanded={this.state.expanded1}
                  onChange={this.handleChange1}
                >
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <Typography variant="h6">
                      Change in Average Length of Hospital Stays Based on
                      Discharge Status
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <div
                      className="tableauPlaceholder"
                      id="viz1681880993682"
                      style={{
                        position: "relative",
                        width: "100%",
                        height: "100%",
                        overflow: "auto",
                      }}
                    >
                      <noscript>
                        <a href="#">
                          <img
                            alt="Change in Average Length of Hospital Stays Based on Discharge Status "
                            src="https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;Av&#47;AvgLengthOfStaysDischargeStatus&#47;Sheet1&#47;1_rss.png"
                            style={{ border: "none" }}
                          />
                        </a>
                      </noscript>
                      <object
                        className="tableauViz"
                        style={{ width: "100%", height: "800px" }}
                      >
                        <param
                          name="host_url"
                          value="https%3A%2F%2Fpublic.tableau.com%2F"
                        />
                        <param name="embed_code_version" value="3" />
                        <param name="site_root" value="" />
                        <param
                          name="name"
                          value="AvgLengthOfStaysDischargeStatus&#47;Sheet1"
                        />
                        <param name="tabs" value="no" />
                        <param name="toolbar" value="yes" />
                        <param
                          name="static_image"
                          value="https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;Av&#47;AvgLengthOfStaysDischargeStatus&#47;Sheet1&#47;1.png"
                        />
                        <param name="animate_transition" value="yes" />
                        <param name="display_static_image" value="yes" />
                        <param name="display_spinner" value="yes" />
                        <param name="display_overlay" value="yes" />
                        <param name="display_count" value="yes" />
                        <param name="language" value="en-US" />
                      </object>
                    </div>
                  </AccordionDetails>
                </Accordion>
              )}
              <Accordion
                key="hospitalAge"
                expanded={this.state.expanded2}
                onChange={this.handleChange2}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel2a-content"
                  id="panel2a-header"
                >
                  <Typography variant="h6">
                    Change in Average Length of Hospital Stays Based on Age
                    Group
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <div
                    className="tableauPlaceholder"
                    id="viz1681932596699"
                    style={{
                      position: "relative",
                      width: "100%",
                      height: "100%",
                      overflow: "auto",
                    }}
                  >
                    <noscript>
                      <a href="#">
                        <img
                          alt="Change in Average Length of Hospital Stays Based on Age Group "
                          src="https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;Av&#47;AvgLengthOfStaysAge&#47;Sheet1&#47;1_rss.png"
                          style="border: none"
                        />
                      </a>
                    </noscript>
                    <object
                      class="tableauViz"
                      style={{ width: "100%", height: "800px" }}
                    >
                      <param
                        name="host_url"
                        value="https%3A%2F%2Fpublic.tableau.com%2F"
                      />
                      <param name="embed_code_version" value="3" />
                      <param name="site_root" value="" />
                      <param
                        name="name"
                        value="AvgLengthOfStaysAge&#47;Sheet1"
                      />
                      <param name="tabs" value="no" />
                      <param name="toolbar" value="yes" />
                      <param
                        name="static_image"
                        value="https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;Av&#47;AvgLengthOfStaysAge&#47;Sheet1&#47;1.png"
                      />
                      <param name="animate_transition" value="yes" />
                      <param name="display_static_image" value="yes" />
                      <param name="display_spinner" value="yes" />
                      <param name="display_overlay" value="yes" />
                      <param name="display_count" value="yes" />
                      <param name="language" value="en-US" />
                    </object>
                  </div>
                </AccordionDetails>
              </Accordion>
            </div>
                    ) : this.state.currentPage === "vax" ? (
                      <div>
              {this.state.currentPage === "hospitalStays" && (
                <Accordion
                  key="hospitalDischarge"
                  expanded={this.state.expanded1}
                  onChange={this.handleChange1}
                >
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <Typography variant="h6">
                      Change in Average Length of Hospital Stays Based on
                      Discharge Status
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <div
                      className="tableauPlaceholder"
                      id="viz1681880993682"
                      style={{
                        position: "relative",
                        width: "100%",
                        height: "100%",
                        overflow: "auto",
                      }}
                    >
                      <noscript>
                        <a href="#">
                          <img
                            alt="Change in Average Length of Hospital Stays Based on Discharge Status "
                            src="https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;Av&#47;AvgLengthOfStaysDischargeStatus&#47;Sheet1&#47;1_rss.png"
                            style={{ border: "none" }}
                          />
                        </a>
                      </noscript>
                      <object
                        className="tableauViz"
                        style={{ width: "100%", height: "800px" }}
                      >
                        <param
                          name="host_url"
                          value="https%3A%2F%2Fpublic.tableau.com%2F"
                        />
                        <param name="embed_code_version" value="3" />
                        <param name="site_root" value="" />
                        <param
                          name="name"
                          value="AvgLengthOfStaysDischargeStatus&#47;Sheet1"
                        />
                        <param name="tabs" value="no" />
                        <param name="toolbar" value="yes" />
                        <param
                          name="static_image"
                          value="https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;Av&#47;AvgLengthOfStaysDischargeStatus&#47;Sheet1&#47;1.png"
                        />
                        <param name="animate_transition" value="yes" />
                        <param name="display_static_image" value="yes" />
                        <param name="display_spinner" value="yes" />
                        <param name="display_overlay" value="yes" />
                        <param name="display_count" value="yes" />
                        <param name="language" value="en-US" />
                      </object>
                    </div>
                  </AccordionDetails>
                </Accordion>
              )}
              <Accordion
                key="hospitalAge"
                expanded={this.state.expanded2}
                onChange={this.handleChange2}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel2a-content"
                  id="panel2a-header"
                >
                  <Typography variant="h6">
                    Change in Average Length of Hospital Stays Based on Age
                    Group
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <div
                    className="tableauPlaceholder"
                    id="viz1681932596699"
                    style={{
                      position: "relative",
                      width: "100%",
                      height: "100%",
                      overflow: "auto",
                    }}
                  >
                    <noscript>
                      <a href="#">
                        <img
                          alt="Change in Average Length of Hospital Stays Based on Age Group "
                          src="https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;Av&#47;AvgLengthOfStaysAge&#47;Sheet1&#47;1_rss.png"
                          style="border: none"
                        />
                      </a>
                    </noscript>
                    <object
                      class="tableauViz"
                      style={{ width: "100%", height: "800px" }}
                    >
                      <param
                        name="host_url"
                        value="https%3A%2F%2Fpublic.tableau.com%2F"
                      />
                      <param name="embed_code_version" value="3" />
                      <param name="site_root" value="" />
                      <param
                        name="name"
                        value="AvgLengthOfStaysAge&#47;Sheet1"
                      />
                      <param name="tabs" value="no" />
                      <param name="toolbar" value="yes" />
                      <param
                        name="static_image"
                        value="https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;Av&#47;AvgLengthOfStaysAge&#47;Sheet1&#47;1.png"
                      />
                      <param name="animate_transition" value="yes" />
                      <param name="display_static_image" value="yes" />
                      <param name="display_spinner" value="yes" />
                      <param name="display_overlay" value="yes" />
                      <param name="display_count" value="yes" />
                      <param name="language" value="en-US" />
                    </object>
                  </div>
                </AccordionDetails>
              </Accordion>
            </div>
                      ) : this.state.currentPage === "misc" ? (
                        <div>
              {this.state.currentPage === "hospitalStays" && (
                <Accordion
                  key="hospitalDischarge"
                  expanded={this.state.expanded1}
                  onChange={this.handleChange1}
                >
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <Typography variant="h6">
                      Change in Average Length of Hospital Stays Based on
                      Discharge Status
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <div
                      className="tableauPlaceholder"
                      id="viz1681880993682"
                      style={{
                        position: "relative",
                        width: "100%",
                        height: "100%",
                        overflow: "auto",
                      }}
                    >
                      <noscript>
                        <a href="#">
                          <img
                            alt="Change in Average Length of Hospital Stays Based on Discharge Status "
                            src="https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;Av&#47;AvgLengthOfStaysDischargeStatus&#47;Sheet1&#47;1_rss.png"
                            style={{ border: "none" }}
                          />
                        </a>
                      </noscript>
                      <object
                        className="tableauViz"
                        style={{ width: "100%", height: "800px" }}
                      >
                        <param
                          name="host_url"
                          value="https%3A%2F%2Fpublic.tableau.com%2F"
                        />
                        <param name="embed_code_version" value="3" />
                        <param name="site_root" value="" />
                        <param
                          name="name"
                          value="AvgLengthOfStaysDischargeStatus&#47;Sheet1"
                        />
                        <param name="tabs" value="no" />
                        <param name="toolbar" value="yes" />
                        <param
                          name="static_image"
                          value="https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;Av&#47;AvgLengthOfStaysDischargeStatus&#47;Sheet1&#47;1.png"
                        />
                        <param name="animate_transition" value="yes" />
                        <param name="display_static_image" value="yes" />
                        <param name="display_spinner" value="yes" />
                        <param name="display_overlay" value="yes" />
                        <param name="display_count" value="yes" />
                        <param name="language" value="en-US" />
                      </object>
                    </div>
                  </AccordionDetails>
                </Accordion>
              )}
              <Accordion
                key="hospitalAge"
                expanded={this.state.expanded2}
                onChange={this.handleChange2}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel2a-content"
                  id="panel2a-header"
                >
                  <Typography variant="h6">
                    Change in Average Length of Hospital Stays Based on Age
                    Group
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <div
                    className="tableauPlaceholder"
                    id="viz1681932596699"
                    style={{
                      position: "relative",
                      width: "100%",
                      height: "100%",
                      overflow: "auto",
                    }}
                  >
                    <noscript>
                      <a href="#">
                        <img
                          alt="Change in Average Length of Hospital Stays Based on Age Group "
                          src="https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;Av&#47;AvgLengthOfStaysAge&#47;Sheet1&#47;1_rss.png"
                          style="border: none"
                        />
                      </a>
                    </noscript>
                    <object
                      class="tableauViz"
                      style={{ width: "100%", height: "800px" }}
                    >
                      <param
                        name="host_url"
                        value="https%3A%2F%2Fpublic.tableau.com%2F"
                      />
                      <param name="embed_code_version" value="3" />
                      <param name="site_root" value="" />
                      <param
                        name="name"
                        value="AvgLengthOfStaysAge&#47;Sheet1"
                      />
                      <param name="tabs" value="no" />
                      <param name="toolbar" value="yes" />
                      <param
                        name="static_image"
                        value="https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;Av&#47;AvgLengthOfStaysAge&#47;Sheet1&#47;1.png"
                      />
                      <param name="animate_transition" value="yes" />
                      <param name="display_static_image" value="yes" />
                      <param name="display_spinner" value="yes" />
                      <param name="display_overlay" value="yes" />
                      <param name="display_count" value="yes" />
                      <param name="language" value="en-US" />
                    </object>
                  </div>
                </AccordionDetails>
              </Accordion>
            </div>
          ) : null}
        </div>
      </React.Fragment>
    );
  }
}

export default MyDashboard;
