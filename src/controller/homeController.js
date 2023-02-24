require("dotenv").config();

let getHomepage = async (req, res) => {
    res.send('homepage');
};

let getUserPage = async (req, res) => {
    let currentMonth = new Date().getMonth() +1 ;
    res.render("main/users/home.ejs", {
        user: req.user,
        currentMonth: currentMonth
    });
};

export default {
    getHomepage, getUserPage,
    
}