export class NameValue {
  constructor(v, f) {
    this.v = v;
    this.f = f;
  }
}
export class NameStyle {
  constructor(v, p) {
    this.v = v;
    this.p = p;
  }
}

export class Order {
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
