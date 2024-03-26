const express = require("express");
const { loadContact, findContact } = require("./utils/contacts");
const expressLayouts = require("express-ejs-layouts");
const app = express();

// port
const PORT = 3000;

// view engine
app.set("view engine", "ejs");
app.use(expressLayouts);
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("index", {
    layout: "layouts/main_layouts",
    name: "Kevinz",
  });
});

app.get("/contact", (req, res) => {
  const contacts = loadContact();
  console.log(contacts);
  res.render("contact", {
    layout: "layouts/main_layouts",
    contacts,
  });
});
app.get("/contact/:name", (req, res) => {
  const contact = findContact(req.params.name);
  console.log(contact);
  res.render("detail", {
    layout: "layouts/main_layouts",
    contact,
  });
});

app.listen(PORT, () => {
  console.log(`Server telah berjalan di port ${PORT}`);
});
