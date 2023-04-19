import React, { Component } from 'react';
import { useState, useEffect } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import Paper from '@mui/material/Paper'

class MyDashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: false,
      drawerOpen: false,
      currentPage: "home"
    };
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    const script = document.createElement('script');
    script.src = "https://public.tableau.com/javascripts/api/viz_v1.js";
    script.async = true;
    document.body.appendChild(script);
  }

  handleChange() {
    this.setState({
      expanded: !this.state.expanded
    });
  }

  handleDrawerClick = () => {
    this.setState(prevState => ({
      drawerOpen: !prevState.drawerOpen
    }));
  };

  handleHomeClick = () => {
    this.setState({
      currentPage: "home"
    });
  };

  handleHospitalStaysClick = () => {
    this.setState({
      currentPage: "hospitalStays"
    });
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.currentPage !== this.state.currentPage) {
      const script = document.createElement('script');
      script.src = "https://public.tableau.com/javascripts/api/viz_v1.js";
      script.async = true;
      document.body.appendChild(script);
    }
  }

  render() {
    const drawerWidth = 138;
    return (
      <React.Fragment>
        <Drawer
          variant="persistent"
          anchor="left"
          open={this.state.drawerOpen}
        >
          <IconButton onClick={this.handleDrawerClick}>
            <ChevronLeftIcon />
          </IconButton>
          <List>
            {['Home', 'Education', 'Hospital Stays', 'Mental Health'].map((text) => (
              <ListItem key={text} disablePadding>
                <ListItemButton onClick={text === "Home" ? this.handleHomeClick : text === "Hospital Stays" ? this.handleHospitalStaysClick : undefined}>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Drawer>
        <div style={{ marginLeft: this.state.drawerOpen ? drawerWidth : 0 }}>
          <div style={{ backgroundColor: "#AC2B37", color: "#FFFFFF", padding: "10px", display: "flex", alignItems: "center" }}>
            {!this.state.drawerOpen && (
              <IconButton onClick={this.handleDrawerClick}>
                <MenuIcon />
              </IconButton>
            )}
            <Typography variant="h4">COVID-MQP</Typography>
          </div>
          {this.state.currentPage === "home" ? (
            <div>
              <Typography variant="h6">Team Members:</Typography>
              <ul>
                <li>Steven Tran</li>
                <li>Tia Mehta</li>
                <li>Dylan Shanes</li>
              </ul>
            </div>
          ) : this.state.currentPage === "hospitalStays" ? (
            <Accordion key={this.state.currentPage} expanded={this.state.expanded} onChange={this.handleChange}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography variant="h6">Change in Average Length of Hospital Stays Based on Discharge Status</Typography>
              </AccordionSummary>
              <AccordionDetails>
            <div
              className="tableauPlaceholder"
              id="viz1681880993682"
              style={{
                position: 'relative',
                width: '100%',
                height: '100%',
                overflow: 'auto'
              }}
            >
              <noscript>
                <a href="#">
                  <img
                    alt="Change in Average Length of Hospital Stays Based on Discharge Status "
                    src="https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;Av&#47;AvgLengthOfStaysDischargeStatus&#47;Sheet1&#47;1_rss.png"
                    style={{ border: 'none' }}
                  />
                </a>
              </noscript>
              <object className="tableauViz" style={{ width: '100%', height: '800px' }}>
                <param name="host_url" value="https%3A%2F%2Fpublic.tableau.com%2F" />
                <param name="embed_code_version" value="3" />
                <param name="site_root" value="" />
                <param name="name" value="AvgLengthOfStaysDischargeStatus&#47;Sheet1" />
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
            ) : null}
        </div>
        </React.Fragment>
    );
  }
}

export default MyDashboard;
