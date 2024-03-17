class Order {
  constructor(id, imie, nazwisko, adres, plec, user, date, time) {
    this.id = id;
    this.imie = imie;
    this.nazwisko = nazwisko;
    this.adres = adres;
    this.plec = plec;
    this.user = user;
    this.date = date;
    this.time = time;
  }
}

module.exports = Order;
