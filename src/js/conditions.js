import "../css/style.css";
import "../css/pages/conditions.css";
import { getParkData, getParkAlerts, getVistorCenterData } from "./parkService.mjs";
import { alertTemplate, VisitorCenterTemplate, ActivitiesTemplate } from "./templates.mjs";
import setHeaderFooter from "./setHeaderFooter.mjs";

function setAlerts(alerts) {
    const alertsEl = document.querySelector(".alerts");
    const html = alerts.map(alertTemplate);
    alertsEl.insertAdjacentHTML("beforeend", html.join(""));
}

function setVisitorCenters(centers) {
    const centersEl = document.querySelector(".visitor-centers ul");
    const html = centers.map(VisitorCenterTemplate);
    centersEl.insertAdjacentHTML("beforeend", html.join(""));
}

function setActivities(activities) {
    const activitiesEl = document.querySelector(".activities ul");
    const html = activities.map(ActivitiesTemplate);
    activitiesEl.insertAdjacentHTML("beforeend", html.join(""));
}

async function init() {
    const parkData = await getParkData();
    const alerts = await getParkAlerts(parkData.parkCode);
    const vistorCenters = await getVistorCenterData(parkData.parkCode);
    setHeaderFooter(parkData);
    setAlerts(alerts);
    setVisitorCenters(vistorCenters);
    setActivities(parkData.activities);
}

init();