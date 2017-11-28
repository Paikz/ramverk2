
var express = require('express');
var router = express.Router();

router.use((req, res, next) => {
    console.log("Incoming " + req.method + " req to: " + req.path);
    next();
});

// Add a route
router.get("/", (req, res) => {
    res.render("home", {
        title: "Home"
    });
});

router.get("/home", (req, res) => {
    res.render("home", {
        title: "Home"
    });
});

router.get("/report", (req, res) => {
    res.render("report", {
        title: "Report"
    });
});

router.get("/about", (req, res) => {
    res.render("about", {
        title: "About"
    });
});

router.get("/app", (req, res) => {
    res.render("app", {
        title: "App"
    });
});

module.exports = router;
