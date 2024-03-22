let Db = require("./dboperations");
const dboperations = require("./dboperations");
let Order = require("./order");
const PORT = 3000;

let express = require("express");
let bodyParser = require("body-parser");
let cors = require("cors");
let app = express();
let router = express.Router();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.use("/api", router);

router.use((request, response, next) => {
  console.log("middleware");
  next();
});

router.route("/orders").get((request, response) => {
  dboperations.getOrders().then((result) => {
    response.json(result[0]);
  });
});

router.route("/orders/:id").get((request, response) => {
  dboperations.getOrder(request.params.id).then((result) => {
    response.json(result[0]);
  });
});

router.route("/orders").post((request, response) => {
  let order = { ...request.body };

  dboperations.addOrder(order).then((result) => {
    response.status(201).json(result);
  });
});

app.listen(PORT, () => {
  console.log("Order API is running at " + PORT);
});
