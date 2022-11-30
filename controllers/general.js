const express = require("express");
const router = express.Router();
const menuList = require("../models/menu-list");

router.get("/", (req, res) => {
    
    res.render("general/home",{menu:menuList.menu()});
});

router.get("/home.html", (req, res) => {
    res.render("general/home",{menu:menuList.menu()});
});

router.get("/menu.html", (req, res) => {
    res.render("general/menu",{menu:menuList.getMealsByCategory()});
});
router.get("/login.html", (req, res) => {
    res.render("general/login");
});
router.get("/sign-up.html", (req, res) => {
    res.render("general/sign-up");
});

module.exports = router;
