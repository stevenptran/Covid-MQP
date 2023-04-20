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
import Button from "@mui/material/Button";
import GitHubIcon from "@mui/icons-material/GitHub";
import Slide from '@mui/material/Slide';

class MyDashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded1: false,
      expanded2: false,
      expanded3: false,
      expanded4: false,
      expanded5: false,
      expanded6: false,
      expanded7: false,
      expanded8: false,
      expanded9: false,
      expanded10: false,
      expanded11: false,
      expanded12: false,
      expanded13: false,
      expanded14: false,
      expanded15: false,
      expanded16: false,
      expanded17: false,
      expanded18: false,
      drawerOpen: false,
      currentPage: "home",
      selectedPage: "Home",
    };
    this.handleChange1 = this.handleChange1.bind(this);
    this.handleChange2 = this.handleChange2.bind(this);
    this.handleChange3 = this.handleChange3.bind(this);
    this.handleChange4 = this.handleChange4.bind(this);
    this.handleChange5 = this.handleChange5.bind(this);
    this.handleChange6 = this.handleChange6.bind(this);
    this.handleChange7 = this.handleChange7.bind(this);
    this.handleChange8 = this.handleChange8.bind(this);
    this.handleChange9 = this.handleChange9.bind(this);
    this.handleChange10 = this.handleChange10.bind(this);
    this.handleChange11 = this.handleChange11.bind(this);
    this.handleChange12 = this.handleChange12.bind(this);
    this.handleChange13 = this.handleChange13.bind(this);
    this.handleChange14 = this.handleChange14.bind(this);
    this.handleChange15 = this.handleChange15.bind(this);
    this.handleChange16 = this.handleChange16.bind(this);
    this.handleChange17 = this.handleChange17.bind(this);
    this.handleChange18 = this.handleChange18.bind(this);
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

  handleChange3() {
    this.setState({
      expanded3: !this.state.expanded3,
    });
  }

  handleChange4() {
    this.setState({
      expanded4: !this.state.expanded4,
    });
  }

  handleChange5() {
    this.setState({
      expanded5: !this.state.expanded5,
    });
  }

  handleChange6() {
    this.setState({
      expanded6: !this.state.expanded6,
    });
  }

  handleChange7() {
    this.setState({
      expanded7: !this.state.expanded7,
    });
  }

  handleChange8() {
    this.setState({
      expanded8: !this.state.expanded8,
    });
  }

  handleChange9() {
    this.setState({
      expanded9: !this.state.expanded9,
    });
  }

  handleChange10() {
    this.setState({
      expanded10: !this.state.expanded10,
    });
  }

  handleChange11() {
    this.setState({
      expanded11: !this.state.expanded11,
    });
  }

  handleChange12() {
    this.setState({
      expanded12: !this.state.expanded12,
    });
  }

  handleChange13() {
    this.setState({
      expanded13: !this.state.expanded13,
    });
  }

  handleChange14() {
    this.setState({
      expanded14: !this.state.expanded14,
    });
  }

  handleChange15() {
    this.setState({
      expanded15: !this.state.expanded15,
    });
  }

  handleChange16() {
    this.setState({
      expanded16: !this.state.expanded16,
    });
  }

  handleChange17() {
    this.setState({
      expanded17: !this.state.expanded17,
    });
  }

  handleChange18() {
    this.setState({
      expanded18: !this.state.expanded18,
    });
  }

  handleDrawerClick = () => {
    this.setState((prevState) => ({
      drawerOpen: !prevState.drawerOpen,
    }));
  };

  resetExpandedStates() {
    this.setState({
      expanded1: false,
      expanded2: false,
      expanded3: false,
      expanded4: false,
      expanded5: false,
      expanded6: false,
      expanded7: false,
      expanded8: false,
      expanded9: false,
      expanded10: false,
      expanded11: false,
      expanded12: false,
      expanded13: false,
      expanded14: false,
      expanded15: false,
      expanded16: false,
      expanded17: false,
      expanded18: false
    });
  }

  handleHomeClick = () => {
    this.resetExpandedStates();
    this.setState(
      {
        currentPage: "home",
        selectedPage: "Home",
      }
    );
  };

  handleHospitalStaysClick = () => {
    this.resetExpandedStates();
    this.setState(
      {
        currentPage: "hospitalStays",
        selectedPage: "Hospitalization",
      }
    );
  };

  handleFoodScarcityClick = () => {
    this.resetExpandedStates();
    this.setState(
      {
        currentPage: "foodScarcity",
        selectedPage: "Food Scarcity",
      }
    );
  };

  handleIncomeClick = () => {
    this.resetExpandedStates();
    this.setState(
      {
        currentPage: "incomeUnemployment",
        selectedPage: "Income and Unemployment",
      }
    );
  };

  handleOnsiteWorkClick = () => {
    this.resetExpandedStates();
    this.setState(
      {
        currentPage: "onsiteWork",
        selectedPage: "Onsite Work",
      }
    );
  };

  handleRuralUrbanClick = () => {
    this.resetExpandedStates();
    this.setState(
      {
        currentPage: "ruralUrban",
        selectedPage: "Rural/Urban Regions",
      }
    );
  };

  handleVaxClick = () => {
    this.resetExpandedStates();
    this.setState(
      {
        currentPage: "vax",
        selectedPage: "Vaccinations",
      }
    );
  };

  handleMiscClick = () => {
    this.resetExpandedStates();
    this.setState(
      {
        currentPage: "misc",
        selectedPage: "Miscellaneous",
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

  state = {
    hoveredRow: null,
  };

  handleRowHover = (index) => {
    this.setState({ hoveredRow: index });
  };

  handleRowLeave = () => {
    this.setState({ hoveredRow: null });
  };

  render() {
    const drawerWidth = 230;
    const { hoveredRow } = this.state;
    return (
      <React.Fragment>
        <Drawer variant="persistent" anchor="left" open={this.state.drawerOpen}>
          <IconButton style={{ width: '100%', height: '6%' }} onClick={this.handleDrawerClick}>
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
              <ListItem key={text} disablePadding style={text === this.state.selectedPage ? { borderTop: "1px solid black", borderBottom: "1px solid black" } : undefined}>
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
                  <ListItemText primary={text} className={text === "Home" ? "my-bold-class" : undefined} />
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
                <MenuIcon style={{ color: 'white' }} />
              </IconButton>
            )}
            <Typography variant="h4" style={{ marginLeft: 10 }} onClick={this.handleHomeClick}>
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
  <a href="https://github.com/stevenptran/Covid-MQP" target="_blank" rel="noopener noreferrer">
    <Button variant="contained" style={{ backgroundColor: '#333' }}>
      <GitHubIcon style={{ marginRight: '8px' }}/>
      GitHub Repo
    </Button>
  </a>
</Box>
              <Box padding={2}>
                <Typography variant="h6">Team Members:</Typography>
                <TableContainer component={Paper}>
                  <Table>
                    <TableHead style={{ backgroundColor: 'rgba(240, 128, 128, 0.2)' }}>
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
                    <TableHead style={{ backgroundColor: 'rgba(240, 128, 128, 0.2)' }}>
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
                <Typography variant="h6"> Questions: </Typography>
                <TableContainer component={Paper}>
                  <Table>
                    <TableHead style={{ backgroundColor: 'rgba(240, 128, 128, 0.2)' }}>
                      <TableRow>
                        <TableCell><b>Question #</b></TableCell>
                        <TableCell><b>Question</b></TableCell>
                        <TableCell><b>Category</b></TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      <TableRow onClick={this.handleRuralUrbanClick} onMouseEnter={() => this.handleRowHover(0)}
                onMouseLeave={this.handleRowLeave}
                sx={{ bgcolor: 0 === hoveredRow ? 'rgba(0, 0, 0, 0.04)' : 'inherit' }}>
                        <TableCell>1</TableCell>
                        <TableCell>
                          Is there a discrepancy in COVID-19 deaths per state
                          when comparing urban and rural regions?
                        </TableCell>
                        <TableCell>Rural/Urban Regions</TableCell>{" "}
                      </TableRow>{" "}
                      <TableRow onClick={this.handleIncomeClick} onMouseEnter={() => this.handleRowHover(1)}
                onMouseLeave={this.handleRowLeave}
                sx={{ bgcolor: 1 === hoveredRow ? 'rgba(0, 0, 0, 0.04)' : 'inherit' }}>
                        {" "}
                        <TableCell>2</TableCell>{" "}
                        <TableCell>
                          Is there a connection between COVID-19 deaths and
                          county income?
                        </TableCell>{" "}
                        <TableCell>Income and Unemployment</TableCell>{" "}
                      </TableRow>{" "}
                      <TableRow onClick={this.handleVaxClick} onMouseEnter={() => this.handleRowHover(2)}
                onMouseLeave={this.handleRowLeave}
                sx={{ bgcolor: 2 === hoveredRow ? 'rgba(0, 0, 0, 0.04)' : 'inherit' }}>
                        {" "}
                        <TableCell>3</TableCell>{" "}
                        <TableCell>
                          Is there a relationship between vaccinations and type
                          of region (rural or urban)?
                        </TableCell>{" "}
                        <TableCell>Vaccinations</TableCell>{" "}
                      </TableRow>{" "}
                      <TableRow onClick={this.handleRuralUrbanClick} onMouseEnter={() => this.handleRowHover(3)} onMouseLeave={this.handleRowLeave} sx={{ bgcolor: 3 === hoveredRow ? 'rgba(0, 0, 0, 0.04)' : 'inherit' }}>
                        {" "}
                        <TableCell>4</TableCell>{" "}
                        <TableCell>
                          Do payments to rural and non-rural areas have an
                          impact on the number of deaths in those regions?
                        </TableCell>{" "}
                        <TableCell>Rural/Urban Regions</TableCell>{" "}
                      </TableRow>{" "}
                      <TableRow onClick={this.handleIncomeClick} onMouseEnter={() => this.handleRowHover(4)} onMouseLeave={this.handleRowLeave} sx={{ bgcolor: 4 === hoveredRow ? 'rgba(0, 0, 0, 0.04)' : 'inherit' }}>
                        {" "}
                        <TableCell>5</TableCell>{" "}
                        <TableCell>
                          Do states where there is a higher percentage of people
                          who have difficulty paying for household expenses have
                          a higher number of hospital deaths?
                        </TableCell>{" "}
                        <TableCell>Income and Unemployment</TableCell>{" "}
                      </TableRow>{" "}
                      <TableRow onClick={this.handleMiscClick} onMouseEnter={() => this.handleRowHover(5)} onMouseLeave={this.handleRowLeave} sx={{ bgcolor: 5 === hoveredRow ? 'rgba(0, 0, 0, 0.04)' : 'inherit' }}>
                        {" "}
                        <TableCell>6</TableCell>{" "}
                        <TableCell>
                          Is there a connection between household telehealth and
                          place of death?
                        </TableCell>{" "}
                        <TableCell>Miscellaneous</TableCell>{" "}
                      </TableRow>
                      <TableRow onClick={this.handleMiscClick} onMouseEnter={() => this.handleRowHover(6)} onMouseLeave={this.handleRowLeave} sx={{ bgcolor: 6 === hoveredRow ? 'rgba(0, 0, 0, 0.04)' : 'inherit' }}>
                        {" "}
                        <TableCell>7</TableCell>{" "}
                        <TableCell>
                          How have the age groups affected by COVID-19 changed
                          over the course of the pandemic?
                        </TableCell>{" "}
                        <TableCell>Miscellaneous</TableCell>{" "}
                      </TableRow>{" "}
                      <TableRow onClick={this.handleMiscClick} onMouseEnter={() => this.handleRowHover(7)} onMouseLeave={this.handleRowLeave} sx={{ bgcolor: 7 === hoveredRow ? 'rgba(0, 0, 0, 0.04)' : 'inherit' }}>
                        {" "}
                        <TableCell>8</TableCell>{" "}
                        <TableCell>
                          What is the connection between state populations,
                          population densities, and COVID-19 deaths?
                        </TableCell>{" "}
                        <TableCell>Miscellaneous</TableCell>{" "}
                      </TableRow>{" "}
                      <TableRow onClick={this.handleVaxClick} onMouseEnter={() => this.handleRowHover(8)} onMouseLeave={this.handleRowLeave} sx={{ bgcolor: 8 === hoveredRow ? 'rgba(0, 0, 0, 0.04)' : 'inherit' }}>
                        {" "}
                        <TableCell>9</TableCell>{" "}
                        <TableCell>
                          Does the percentage of adults fully vaccinated in a
                          state affect the excess deaths from COVID-19?
                        </TableCell>{" "}
                        <TableCell>Vaccinations</TableCell>{" "}
                      </TableRow>{" "}
                      <TableRow onClick={this.handleFoodScarcityClick} onMouseEnter={() => this.handleRowHover(9)} onMouseLeave={this.handleRowLeave} sx={{ bgcolor: 9 === hoveredRow ? 'rgba(0, 0, 0, 0.04)' : 'inherit' }}>
                        {" "}
                        <TableCell>10</TableCell>{" "}
                        <TableCell>
                          How has food scarcity changed in the United States
                          throughout the course of the pandemic?
                        </TableCell>{" "}
                        <TableCell>Food Scarcity</TableCell>{" "}
                      </TableRow>{" "}
                      <TableRow onClick={this.handleFoodScarcityClick} onMouseEnter={() => this.handleRowHover(10)} onMouseLeave={this.handleRowLeave} sx={{ bgcolor: 10 === hoveredRow ? 'rgba(0, 0, 0, 0.04)' : 'inherit' }}>
                        {" "}
                        <TableCell>11</TableCell>{" "}
                        <TableCell>
                          How does food scarcity in America relate to the
                          COVID-19 deaths in each state?
                        </TableCell>{" "}
                        <TableCell>Food Scarcity</TableCell>{" "}
                      </TableRow>{" "}
                      <TableRow onClick={this.handleOnsiteWorkClick} onMouseEnter={() => this.handleRowHover(11)} onMouseLeave={this.handleRowLeave} sx={{ bgcolor: 11 === hoveredRow ? 'rgba(0, 0, 0, 0.04)' : 'inherit' }}>
                        {" "}
                        <TableCell>12</TableCell>{" "}
                        <TableCell>
                          Which states have the highest percentage of onsite
                          workers?
                        </TableCell>{" "}
                        <TableCell>Onsite Work</TableCell>{" "}
                      </TableRow>{" "}
                      <TableRow onClick={this.handleOnsiteWorkClick} onMouseEnter={() => this.handleRowHover(12)} onMouseLeave={this.handleRowLeave} sx={{ bgcolor: 12 === hoveredRow ? 'rgba(0, 0, 0, 0.04)' : 'inherit' }}>
                        {" "}
                        <TableCell>13</TableCell>{" "}
                        <TableCell>
                          How has the number of people working onsite changed
                          throughout the pandemic?
                        </TableCell>{" "}
                        <TableCell>Onsite Work</TableCell>{" "}
                      </TableRow>{" "}
                      <TableRow onClick={this.handleOnsiteWorkClick} onMouseEnter={() => this.handleRowHover(13)} onMouseLeave={this.handleRowLeave} sx={{ bgcolor: 13 === hoveredRow ? 'rgba(0, 0, 0, 0.04)' : 'inherit' }}>
                        {" "}
                        <TableCell>14</TableCell>{" "}
                        <TableCell>
                          How has each state changed in terms of percentage of
                          people working onsite throughout the pandemic?
                        </TableCell>{" "}
                        <TableCell> Onsite Work </TableCell>{" "}
                      </TableRow>{" "}
                      <TableRow onClick={this.handleVaxClick} onMouseEnter={() => this.handleRowHover(14)} onMouseLeave={this.handleRowLeave} sx={{ bgcolor: 14 === hoveredRow ? 'rgba(0, 0, 0, 0.04)' : 'inherit' }}>
                        {" "}
                        <TableCell> 15 </TableCell>{" "}
                        <TableCell>
                          {" "}
                          How much of the older population receives an
                          additional booster vaccine after the first?{" "}
                        </TableCell>{" "}
                        <TableCell> Vaccinations </TableCell>{" "}
                      </TableRow>{" "}
                      <TableRow onClick={this.handleMiscClick} onMouseEnter={() => this.handleRowHover(15)} onMouseLeave={this.handleRowLeave} sx={{ bgcolor: 15 === hoveredRow ? 'rgba(0, 0, 0, 0.04)' : 'inherit' }}>
                        {" "}
                        <TableCell> 16 </TableCell>{" "}
                        <TableCell>
                          {" "}
                          On average, what date did each state close their
                          schools?{" "}
                        </TableCell>{" "}
                        <TableCell> Miscellaneous </TableCell>{" "}
                      </TableRow>
                      <TableRow onClick={this.handleIncomeClick} onMouseEnter={() => this.handleRowHover(16)} onMouseLeave={this.handleRowLeave} sx={{ bgcolor: 16 === hoveredRow ? 'rgba(0, 0, 0, 0.04)' : 'inherit' }}>
                        {" "}
                        <TableCell> 17 </TableCell>{" "}
                        <TableCell>
                          {" "}
                          What is the relation between deaths involving COVID-19 and average income in each county from 2019, 2020, and 2021?{" "}
                        </TableCell>
                        <TableCell>Income and Unemployment</TableCell>{" "}
                      </TableRow>
                      <TableRow onClick={this.handleFoodScarcityClick} onMouseEnter={() => this.handleRowHover(17)} onMouseLeave={this.handleRowLeave} sx={{ bgcolor: 17 === hoveredRow ? 'rgba(0, 0, 0, 0.04)' : 'inherit' }}>
                        {" "}
                        <TableCell>18</TableCell>{" "}
                        <TableCell>
                          What is the effect on state mandated restaurant action
                          on food scarcity during the COVID-19 pandemic?
                        </TableCell>{" "}
                        <TableCell>Food Scarcity</TableCell>{" "}
                      </TableRow>{" "}
                      <TableRow onClick={this.handleFoodScarcityClick} onMouseEnter={() => this.handleRowHover(18)} onMouseLeave={this.handleRowLeave} sx={{ bgcolor: 18 === hoveredRow ? 'rgba(0, 0, 0, 0.04)' : 'inherit' }}>
                        {" "}
                        <TableCell>19</TableCell>{" "}
                        <TableCell>
                          How does unemployment during the COVID-19 pandemic
                          relate to food scarcity in each state?
                        </TableCell>{" "}
                        <TableCell>Food Scarcity</TableCell>{" "}
                      </TableRow>{" "}
                      <TableRow onClick={this.handleFoodScarcityClick} onMouseEnter={() => this.handleRowHover(19)} onMouseLeave={this.handleRowLeave} sx={{ bgcolor: 19 === hoveredRow ? 'rgba(0, 0, 0, 0.04)' : 'inherit' }}>
                        {" "}
                        <TableCell>20</TableCell>{" "}
                        <TableCell>
                          How does state income impact food scarcity during
                          COVID-19?
                        </TableCell>{" "}
                        <TableCell>Food Scarcity</TableCell>{" "}
                      </TableRow>{" "}
                      <TableRow onClick={this.handleIncomeClick} onMouseEnter={() => this.handleRowHover(20)} onMouseLeave={this.handleRowLeave} sx={{ bgcolor: 20 === hoveredRow ? 'rgba(0, 0, 0, 0.04)' : 'inherit' }}>
                        {" "}
                        <TableCell>21</TableCell>{" "}
                        <TableCell>
                          How does the Social Vulnerability Index per county
                          relate to the income per county during COVID-19?
                        </TableCell>{" "}
                        <TableCell>Income and Unemployment</TableCell>{" "}
                      </TableRow>{" "}
                      <TableRow onClick={this.handleHospitalStaysClick} onMouseEnter={() => this.handleRowHover(21)} onMouseLeave={this.handleRowLeave} sx={{ bgcolor: 21 === hoveredRow ? 'rgba(0, 0, 0, 0.04)' : 'inherit' }}>
                        {" "}
                        <TableCell>22</TableCell>{" "}
                        <TableCell>
                          How has the average length of hospital stays changed
                          throughout the COVID-19 pandemic between age groups?
                        </TableCell>{" "}
                        <TableCell>Hospitalization</TableCell>{" "}
                      </TableRow>{" "}
                      <TableRow onClick={this.handleHospitalStaysClick} onMouseEnter={() => this.handleRowHover(22)} onMouseLeave={this.handleRowLeave} sx={{ bgcolor: 22 === hoveredRow ? 'rgba(0, 0, 0, 0.04)' : 'inherit' }}>
                        {" "}
                        <TableCell>23</TableCell>{" "}
                        <TableCell>
                          How has the average length of hospital stays changed
                          throughout the COVID-19 pandemic changed depending on
                          whether a person was discharged alive or dead?
                        </TableCell>{" "}
                        <TableCell> Hospitalization </TableCell>{" "}
                      </TableRow>{" "}
                      <TableRow onClick={this.handleIncomeClick} onMouseEnter={() => this.handleRowHover(23)} onMouseLeave={this.handleRowLeave} sx={{ bgcolor: 23 === hoveredRow ? 'rgba(0, 0, 0, 0.04)' : 'inherit' }}>
                        {" "}
                        <TableCell> 24 </TableCell>{" "}
                        <TableCell>
                          {" "}
                          How did unemployment during the COVID-19 pandemic
                          affect mental health help?{" "}
                        </TableCell>{" "}
                        <TableCell> Income and Unemployment </TableCell>{" "}
                      </TableRow>{" "}
                    </TableBody>
                  </Table>
                </TableContainer>
              </Box>
              <Box padding={2}>
              <Typography variant="h6"> Report: </Typography>
              <iframe
    src="https://drive.google.com/file/d/1ofSmD5FAg39sqZSCzCegd3Jq9ab7Gm9t/preview"
    width="100%"
    height="800px"
    style={{ border: 'none' }}
  />
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
              <Accordion
                key="foodScarcity"
                expanded={this.state.expanded3}
                onChange={this.handleChange3}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography variant="h6">
                  What is the effect on state mandated restaurant action on food scarcity during the COVID-19 pandemic?
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <div
                    className="tableauPlaceholder"
                    id="viz1681948842913"
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
                          alt="N/A"
                          src="https://public.tableau.com/static/images/Fo/FoodScarcityVsRestaurants/Dashboard4/1_rss.png"
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
                        value="FoodScarcityVsRestaurants/Dashboard4"
                      />
                      <param name="tabs" value="no" />
                      <param name="toolbar" value="yes" />
                      <param
                        name="static_image"
                        value="https://public.tableau.com/static/images/Fo/FoodScarcityVsRestaurants/Dashboard4/1.png"
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

              <Accordion
                key="foodScarcityUnemployment"
                expanded={this.state.expanded7}
                onChange={this.handleChange7}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography variant="h6">
                  How does unemployment during the COVID-19 pandemic relate to food scarcity in each state?
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <div
                    className="tableauPlaceholder"
                    id="viz1681952716709"
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
                          alt="N/A"
                          src="https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;Un&#47;UnemploymentVSFoodScarcity&#47;Dashboard1&#47;1_rss.png"
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
                        value="UnemploymentVSFoodScarcity&#47;Dashboard1"
                      />
                      <param name="tabs" value="no" />
                      <param name="toolbar" value="yes" />
                      <param
                        name="static_image"
                        value="https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;Un&#47;UnemploymentVSFoodScarcity&#47;Dashboard1&#47;1.png"
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

              <Accordion
                key="foodScarcityIncome"
                expanded={this.state.expanded8}
                onChange={this.handleChange8}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography variant="h6">
                  How does state income impact food scarcity during COVID-19?
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <div
                    className="tableauPlaceholder"
                    id="viz1681953049694"
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
                          alt="N/A"
                          src="https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;St&#47;StateIncomeVsFoodScarcity&#47;Dashboard1&#47;1_rss.png"
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
                        value="StateIncomeVsFoodScarcity&#47;Dashboard1"
                      />
                      <param name="tabs" value="no" />
                      <param name="toolbar" value="yes" />
                      <param
                        name="static_image"
                        value="https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;St&#47;StateIncomeVsFoodScarcity&#47;Dashboard1&#47;1.png"
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
              <Accordion
                key="mentalHealth"
                expanded={this.state.expanded6}
                onChange={this.handleChange6}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography variant="h6">
                  How did unemployment during the COVID-19 pandemic affect mental health help?
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <div
                    className="tableauPlaceholder"
                    id="viz1681950427010"
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
                          alt="N/A"
                          src="https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;Me&#47;MentalHealthVsUnemployment&#47;Sheet1&#47;1_rss.png"
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
                        value="MentalHealthVsUnemployment&#47;Sheet1"
                      />
                      <param name="tabs" value="no" />
                      <param name="toolbar" value="yes" />
                      <param
                        name="static_image"
                        value="https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;Me&#47;MentalHealthVsUnemployment&#47;Sheet1&#47;1.png"
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

              <Accordion
                key="svi"
                expanded={this.state.expanded9}
                onChange={this.handleChange9}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography variant="h6">
                  How does the Social Vulnerability Index per county relate to the income per county during COVID-19?
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <div
                    className="tableauPlaceholder"
                    id="viz1681953229081"
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
                          alt="N/A"
                          src="https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;SV&#47;SVIvsAvgIncome&#47;Sheet2&#47;1_rss.png"
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
                        value="SVIvsAvgIncome&#47;Sheet2"
                      />
                      <param name="tabs" value="no" />
                      <param name="toolbar" value="yes" />
                      <param
                        name="static_image"
                        value="https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;SV&#47;SVIvsAvgIncome&#47;Sheet2&#47;1.png"
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
              <Accordion
                key="deathsAvgIncome"
                expanded={this.state.expanded10}
                onChange={this.handleChange10}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography variant="h6">
                  What is the relation between deaths involving COVID-19 and average income in each county from 2019, 2020, and 2021?
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                <iframe
      src="https://drive.google.com/file/d/16d_QWpeGYrwdmqWTRHR_rBXxLSbm9Tq8/preview"
      width="100%"
      height="600px"
      style={{ border: 'none' }}
    />
  </AccordionDetails>
  </Accordion>
  <Accordion
                key="triState"
                expanded={this.state.expanded12}
                onChange={this.handleChange12}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography variant="h6">
                  Is there a connection between COVID-19 deaths and county income?
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <div
                    className="tableauPlaceholder"
                    id="viz1681966369014"
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
                          alt="N/A"
                          src="https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;Ca&#47;CaliforniaCountyDeathsvs_CountyIncomein2021&#47;CaliforniaCountyDeathsvs_CountyIncomein2021Dashboard&#47;1_rss.png"
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
                        value="CaliforniaCountyDeathsvs_CountyIncomein2021&#47;CaliforniaCountyDeathsvs_CountyIncomein2021Dashboard"
                      />
                      <param name="tabs" value="no" />
                      <param name="toolbar" value="yes" />
                      <param
                        name="static_image"
                        value="https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;Ca&#47;CaliforniaCountyDeathsvs_CountyIncomein2021&#47;CaliforniaCountyDeathsvs_CountyIncomein2021Dashboard&#47;1.png"
                      />
                      <param name="animate_transition" value="yes" />
                      <param name="display_static_image" value="yes" />
                      <param name="display_spinner" value="yes" />
                      <param name="display_overlay" value="yes" />
                      <param name="display_count" value="yes" />
                      <param name="language" value="en-US" />
                    </object>
                  </div>
                  <div
                    className="tableauPlaceholder"
                    id="viz1681966380838"
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
                          alt="N/A"
                          src="https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;Ke&#47;KentuckyCountyDeathsvs_CountyIncomein2021&#47;KentuckyCountyDeathsvs_CountyIncomein2021Dashboard&#47;1_rss.png"
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
                        value="KentuckyCountyDeathsvs_CountyIncomein2021&#47;KentuckyCountyDeathsvs_CountyIncomein2021Dashboard"
                      />
                      <param name="tabs" value="no" />
                      <param name="toolbar" value="yes" />
                      <param
                        name="static_image"
                        value="https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;Ke&#47;KentuckyCountyDeathsvs_CountyIncomein2021&#47;KentuckyCountyDeathsvs_CountyIncomein2021Dashboard&#47;1.png"
                      />
                      <param name="animate_transition" value="yes" />
                      <param name="display_static_image" value="yes" />
                      <param name="display_spinner" value="yes" />
                      <param name="display_overlay" value="yes" />
                      <param name="display_count" value="yes" />
                      <param name="language" value="en-US" />
                    </object>
                  </div>
                  <div
                    className="tableauPlaceholder"
                    id="viz1681966391233"
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
                          alt="N/A"
                          src="https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;Te&#47;TexasCountyDeathsvs_CountyIncomein2021&#47;TexasCountyDeathsvs_CountyIncomein2021Dashboard&#47;1_rss.png"
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
                        value="TexasCountyDeathsvs_CountyIncomein2021&#47;TexasCountyDeathsvs_CountyIncomein2021Dashboard"
                      />
                      <param name="tabs" value="no" />
                      <param name="toolbar" value="yes" />
                      <param
                        name="static_image"
                        value="https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;Te&#47;TexasCountyDeathsvs_CountyIncomein2021&#47;TexasCountyDeathsvs_CountyIncomein2021Dashboard&#47;1.png"
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
              <Accordion
                key="troublePaying"
                expanded={this.state.expanded18}
                onChange={this.handleChange18}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography variant="h6">
                  Do states where there is a higher percentage of people who have difficulty paying for household expenses have a higher number of hospital deaths?
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <div
                    className="tableauPlaceholder"
                    id="viz1681968461575"
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
                          alt="N/A"
                          src="https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;CK&#47;CKYWRTDCX&#47;1_rss.png"
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
                        name="path"
                        value="shared&#47;CKYWRTDCX"
                      />
                      <param name="tabs" value="no" />
                      <param name="toolbar" value="yes" />
                      <param
                        name="static_image"
                        value="https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;CK&#47;CKYWRTDCX&#47;1.png"
                      />
                      <param name="animate_transition" value="yes" />
                      <param name="display_static_image" value="yes" />
                      <param name="display_spinner" value="yes" />
                      <param name="display_overlay" value="yes" />
                      <param name="display_count" value="yes" />
                      <param name="language" value="en-US" />
                    </object>
                  </div>
                  <div
                    className="tableauPlaceholder"
                    id="viz1681968468774"
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
                          alt="N/A"
                          src="https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;Pl&#47;PlaceofDeathbyState&#47;PlaceofDeathbyStateDashboard&#47;1_rss.png"
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
                        value="PlaceofDeathbyState&#47;PlaceofDeathbyStateDashboard"
                      />
                      <param name="tabs" value="no" />
                      <param name="toolbar" value="yes" />
                      <param
                        name="static_image"
                        value="https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;Pl&#47;PlaceofDeathbyState&#47;PlaceofDeathbyStateDashboard&#47;1.png"
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
                    Temp1
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
              
              <Accordion
                key="urbanRuralCode"
                expanded={this.state.expanded11}
                onChange={this.handleChange11}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel2a-content"
                  id="panel2a-header"
                >
                  <Typography variant="h6">
                  Is there a discrepancy in COVID-19 deaths per state when comparing urban and rural regions?
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <div
                    className="tableauPlaceholder"
                    id="viz1681965932728"
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
                          alt="COVID-19 deaths per state by urban rural code dashboard "
                          src="https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;CO&#47;COVID-19DeathsperStatebyUrbanRuralCode&#47;COVID-19deathsperstatebyurbanruralcodedashboard&#47;1_rss.png"
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
                        value="COVID-19DeathsperStatebyUrbanRuralCode&#47;COVID-19deathsperstatebyurbanruralcodedashboard"
                      />
                      <param name="tabs" value="no" />
                      <param name="toolbar" value="yes" />
                      <param
                        name="static_image"
                        value="https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;CO&#47;COVID-19DeathsperStatebyUrbanRuralCode&#47;COVID-19deathsperstatebyurbanruralcodedashboard&#47;1.png"
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
              <Accordion
                key="ruralNonPayments"
                expanded={this.state.expanded16}
                onChange={this.handleChange16}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel2a-content"
                  id="panel2a-header"
                >
                  <Typography variant="h6">
                  Do payments to rural and non-rural areas have an impact on the number of deaths in those regions?
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <div
                    className="tableauPlaceholder"
                    id="viz1681967835062"
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
                          alt="Payments to Non-Rural Areas Dashboard"
                          src="https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;Pa&#47;PaymentstoNon-RuralAreas&#47;PaymentstoNon-RuralAreasDashboard&#47;1_rss.png"
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
                        value="PaymentstoNon-RuralAreas&#47;PaymentstoNon-RuralAreasDashboard"
                      />
                      <param name="tabs" value="no" />
                      <param name="toolbar" value="yes" />
                      <param
                        name="static_image"
                        value="https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;Pa&#47;PaymentstoNon-RuralAreas&#47;PaymentstoNon-RuralAreasDashboard&#47;1.png"
                      />
                      <param name="animate_transition" value="yes" />
                      <param name="display_static_image" value="yes" />
                      <param name="display_spinner" value="yes" />
                      <param name="display_overlay" value="yes" />
                      <param name="display_count" value="yes" />
                      <param name="language" value="en-US" />
                    </object>
                  </div>
                  <div
                    className="tableauPlaceholder"
                    id="viz1681967842018"
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
                          alt="Payments to Rural Areas Dashboard"
                          src="https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;Pa&#47;PaymentstoRuralAreas&#47;PaymentstoRuralAreasDashboard&#47;1_rss.png"
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
                        value="PaymentstoRuralAreas&#47;PaymentstoRuralAreasDashboard"
                      />
                      <param name="tabs" value="no" />
                      <param name="toolbar" value="yes" />
                      <param
                        name="static_image"
                        value="https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;Pa&#47;PaymentstoRuralAreas&#47;PaymentstoRuralAreasDashboard&#47;1.png"
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
              <Accordion
                key="olderIndividualsVax"
                expanded={this.state.expanded5}
                onChange={this.handleChange5}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography variant="h6">
                  How much of the older population receives an additional booster vaccine after the first?
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <div
                    className="tableauPlaceholder"
                    id="viz1681950089531"
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
                          alt="N/A"
                          src="https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;Ol&#47;OlderIndividualsVaccines&#47;Sheet1&#47;1_rss.png"
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
                        value="OlderIndividualsVaccines&#47;Sheet1"
                      />
                      <param name="tabs" value="no" />
                      <param name="toolbar" value="yes" />
                      <param
                        name="static_image"
                        value="https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;Ol&#47;OlderIndividualsVaccines&#47;Sheet1&#47;1.png"
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
              <Accordion
                key="metro"
                expanded={this.state.expanded13}
                onChange={this.handleChange13}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography variant="h6">
                  Is there a relationship between vaccinations and type of region (rural or urban)?
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <div
                    className="tableauPlaceholder"
                    id="viz1681966707271"
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
                          alt="N/A"
                          src="https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;CO&#47;COVID-19Vaccinationsvs_LargeCentralMetroDeaths&#47;COVID-19Vaccinationsvs_LargeCentralMetroDeathsDashboard&#47;1_rss.png"
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
                        value="COVID-19Vaccinationsvs_LargeCentralMetroDeaths&#47;COVID-19Vaccinationsvs_LargeCentralMetroDeathsDashboard"
                      />
                      <param name="tabs" value="no" />
                      <param name="toolbar" value="yes" />
                      <param
                        name="static_image"
                        value="https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;CO&#47;COVID-19Vaccinationsvs_LargeCentralMetroDeaths&#47;COVID-19Vaccinationsvs_LargeCentralMetroDeathsDashboard&#47;1.png"
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
              <Accordion
                key="cali"
                expanded={this.state.expanded14}
                onChange={this.handleChange14}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography variant="h6">
                  California County Vaccinations vs. County Income in 2021
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <div
                    className="tableauPlaceholder"
                    id="viz1681967177731"
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
                          alt="N/A"
                          src="https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;Ca&#47;CaliforniaCountyVaccinationsvs_CountyIncomein2021&#47;CaliforniaCountyVaccinationsvs_CountyIncomein2021Dashboard&#47;1_rss.png"
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
                        value="CaliforniaCountyVaccinationsvs_CountyIncomein2021&#47;CaliforniaCountyVaccinationsvs_CountyIncomein2021Dashboard"
                      />
                      <param name="tabs" value="no" />
                      <param name="toolbar" value="yes" />
                      <param
                        name="static_image"
                        value="https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;Ca&#47;CaliforniaCountyVaccinationsvs_CountyIncomein2021&#47;CaliforniaCountyVaccinationsvs_CountyIncomein2021Dashboard&#47;1.png"
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
              <Accordion
                key="noncore"
                expanded={this.state.expanded17}
                onChange={this.handleChange17}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography variant="h6">
                  COVID-19 Vaccinations vs. Noncore Deaths
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <div
                    className="tableauPlaceholder"
                    id="viz1681968204845"
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
                          alt="N/A"
                          src="https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;CO&#47;COVID-19Vaccinationsvs_NoncoreDeaths&#47;COVID-19Vaccinationsvs_NoncoreDeathsDashboard&#47;1_rss.png"
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
                        value="COVID-19Vaccinationsvs_NoncoreDeaths&#47;COVID-19Vaccinationsvs_NoncoreDeathsDashboard"
                      />
                      <param name="tabs" value="no" />
                      <param name="toolbar" value="yes" />
                      <param
                        name="static_image"
                        value="https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;CO&#47;COVID-19Vaccinationsvs_NoncoreDeaths&#47;COVID-19Vaccinationsvs_NoncoreDeathsDashboard&#47;1.png"
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
              <Accordion
                key="AvgSchoolClosure"
                expanded={this.state.expanded4}
                onChange={this.handleChange4}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography variant="h6">
                  On average, what date did each state close their schools?
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <div
                    className="tableauPlaceholder"
                    id="viz1681949697025"
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
                          alt="N/A"
                          src="https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;Av&#47;AverageSchoolClosure&#47;Sheet1&#47;1_rss.png"
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
                        value="AverageSchoolClosure&#47;Sheet1"
                      />
                      <param name="tabs" value="no" />
                      <param name="toolbar" value="yes" />
                      <param
                        name="static_image"
                        value="https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;Av&#47;AverageSchoolClosure&#47;Sheet1&#47;1.png"
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
              <Accordion
                key="telehealth"
                expanded={this.state.expanded15}
                onChange={this.handleChange15}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography variant="h6">
                  Is there a connection between household telehealth and place of death?
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <div
                    className="tableauPlaceholder"
                    id="viz1681967593728"
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
                          alt="N/A"
                          src="https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;Co&#47;ConnectionBetweenHouseholdTelehealthandPlaceofDeath&#47;ConnectionBetweenHouseholdTelehealthandPlaceofDeath&#47;1_rss.png"
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
                        value="ConnectionBetweenHouseholdTelehealthandPlaceofDeath&#47;ConnectionBetweenHouseholdTelehealthandPlaceofDeath"
                      />
                      <param name="tabs" value="no" />
                      <param name="toolbar" value="yes" />
                      <param
                        name="static_image"
                        value="https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;Co&#47;ConnectionBetweenHouseholdTelehealthandPlaceofDeath&#47;ConnectionBetweenHouseholdTelehealthandPlaceofDeath&#47;1.png"
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
