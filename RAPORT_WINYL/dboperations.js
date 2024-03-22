let config = require("./dbconfig");
const sql = require("mssql");

async function getOrders() {
  try {
    let pool = await sql.connect(config);
    let products = await pool.request().query("SELECT * FROM Table_Test_1");
    return products.recordsets;
  } catch (error) {
    console.log(error);
  }
}

async function getOrder(orderId) {
  try {
    let pool = await sql.connect(config);
    let products = await pool
      .request()
      .input("input_parameter", sql.Int, orderId)
      .query("SELECT * FROM Table_Test_1 WHERE id = @input_parameter");
    return products.recordsets;
  } catch (error) {
    console.log(error);
  }
}

async function addOrder(order) {
  try {
    let pool = await sql.connect(config);
    let insertProducts = await pool
      .request()
      .input("imie", sql.VarChar, "Romek")
      .input("nazwisko", sql.VarChar, order.nazwisko)
      .input("adres", sql.VarChar, order.adres)
      .input("plec", sql.NChar, order.plec)
      .input("user", sql.NChar, order.user)
      .input("date", sql.Date, order.date)
      .input("time", sql.Time, order.time)
      .execute("ProceduraTestowa");
    return insertProducts.recordsets;
  } catch (error) {
    console.log(error);
  }
}

module.exports = {
  getOrders: getOrders,
  getOrder: getOrder,
  addOrder: addOrder,
};
