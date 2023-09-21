/*
=================
Mini Cine
=================

Se tienen 3 salas con una capacidad de 1: 30, 2: 20, 3: 10 personas, y se registra 
el nombre de cada película. Las entradas cuestan $2 adultos y $1 niños. A la taquilla de acercan los 
Cinéfilos y solicitan la sala, indican cantidad adultos y cantidad niños. Se desea conocer 
por cada Cinéfilo a) el monto a pagar, o si es que no hay más asientos, y por el cine 
b) cuál película vendió más $, c) cantidad de entradas vendidas, y d) monto total cobrado.

Sala  Nombre  CapacPersonas       Codigo   Sala   Nombre    cantdAdulto     cantdNiños    entradasTotal()   montoPagar()-R.a)
 1    batman       30              222      1     batman        2               6               8                10$
 2     nemo        20              333      2     nemo          4               8              12                16$
 3    anabell      10              888      3     anabell       5               3               8                13$
                                   777      2     nemo          1               1               2                 3$
                                   999      1     batman        6               7              13                19$

R.b) Peliculas mas vendida: batman
R.c) Cantidad de entradas Vendidas: 43
R.d) Monto total Cobrado: (10+16+13+3+19)= 61$
*/
class Cl_mCinefilo {
  constructor(
    codigo = 0,
    sala = 0,
    nombre = null,
    cantdAdulto = 0,
    cantdNiño = 0
  ) {
    this.codigo = codigo;
    this.nombre = nombre;
    this.sala = sala;
    this.cantdAdulto = cantdAdulto;
    this.cantdNiño = cantdNiño;
  }
  set codigo(c) {
    this._codigo = +c;
  }
  get codigo() {
    return this._codigo;
  }

  set sala(s) {
    this._sala = +s;
  }
  get sala() {
    return this._sala;
  }

  set cantdAdulto(ca) {
    this._cantdAdulto = +ca;
  }
  get cantdAdulto() {
    return this._cantdAdulto;
  }

  set cantdNiño(cn) {
    this._cantdNiño = +cn;
  }
  get cantdNiño() {
    return this._cantdNiño;
  }
  entradasTotal() {
    return this.cantdAdulto + this.cantdNiño;
  }

  montoPagar() {
    const precioEntradaAdulto = 2;
    const precioEntradaNiño = 1;
    return (
      this.cantdAdulto * precioEntradaAdulto +
      this.cantdNiño * precioEntradaNiño
    );
  }
}

class Cl_mCine {
  constructor() {
    this.arrCine = [];
    this.capcPersSala1 = 51;
    this.capcPersSala2 = 34;
    this.capcPersSala3 = 18;
    this.cont1 = 0;
    this.cont2 = 0;
    this.cont3 = 0;
  }

  agregar(cinefilo) {
    let boolAdd = false;
    if (cinefilo.entradasTotal() > 0) {
      switch (cinefilo.sala) {
        case 1:
          if (this.capcPersSala1 >= cinefilo.entradasTotal()) {
            this.capcPersSala1 -= cinefilo.entradasTotal();
            this.cont1 += cinefilo.entradasTotal();
            boolAdd = true;
            this.arrCine.push(cinefilo);
          }
          break;
        case 2:
          if (this.capcPersSala2 >= cinefilo.entradasTotal()) {
            this.capcPersSala2 -= cinefilo.entradasTotal();
            this.cont2 += cinefilo.entradasTotal();
            boolAdd = true;
            this.arrCine.push(cinefilo);
          }
          break;
        case 3:
          if (this.capcPersSala3 >= cinefilo.entradasTotal()) {
            this.capcPersSala3 -= cinefilo.entradasTotal();
            this.cont3 += cinefilo.entradasTotal();
            boolAdd = true;
            this.arrCine.push(cinefilo);
          }
          break;
        default:
      }
      return boolAdd;
    }

    /* let bolAdd = false;

    if (this.sala === 1 ) {
      cinefilo.entradasTotal() > this.capcPersSala1;

      if (this.sala === 2) {
        cinefilo.entradasTotal() > this.capcPersSala2;

        if (this.sala === 3) {
          cinefilo.entradasTotal() > this.capcPersSala3;

          //"capacidad de sala excedida"  */

    //ii   // this.arrCine.push(cinefilo);
    /*      if (this.sala === 1)
            this.capcPersSala1 -= cinefilo.entradasTotal();
          if (this.sala === 2)
            this.capcPersSala2 -= cinefilo.entradasTotal();
          if (this.sala === 3)
            this.capcPersSala3 -= cinefilo.entradasTotal();

          bolAdd = true;
        }
        return bolAdd;
      }
    }    */
  }
  eliminar(codigo) {
    for (let pos = 0; pos < this.arrCine.length; pos++) {
      if (this.arrCine[pos].codigo === codigo) {
        switch (this.arrCine[pos].sala) {
          case 1:
            this.cont1 -= this.arrCine[pos].entradasTotal();
            this.capcPersSala1 += this.arrCine[pos].entradasTotal();
            this.arrCine.splice(pos, 1);
            break;
          case 2:
            this.cont2 -= this.arrCine[pos].entradasTotal();
            this.capcPersSala2 += this.arrCine[pos].entradasTotal();
            this.arrCine.splice(pos, 1);
            break;
          case 3:
            this.cont3 -= this.arrCine[pos].entradasTotal();
            this.capcPersSala3 += this.arrCine[pos].entradasTotal();
            this.arrCine.splice(pos, 1);
            break;
          default:
        }
      }
    }
  }
  existe(codigo) {
    let existe = false;
    this.arrCine.forEach((cinefilo) => {
      if (cinefilo.codigo === codigo) existe = true;
    });
    return existe;
  }

  MontoTotal() {
    let MontoTotal = 0;
    this.arrCine.forEach((cinefilo) => {
      MontoTotal += cinefilo.montoPagar();
    });
    return MontoTotal;
  }
  PeliMasVendida() {
    let monto = 0,
      nombre = null;
    this.arrCine.forEach((cinefilo) => {
      if (cinefilo.montoPagar() > monto) {
        monto = cinefilo.montoPagar();
        nombre = cinefilo.nombre;
      }
    });
    return nombre;
  }

  CantentradasVendidas() {
    let totalEntradasVendidas = 0;
    this.arrCine.forEach((cinefilo) => {
      totalEntradasVendidas += cinefilo.entradasTotal();
    });
    return totalEntradasVendidas;
  }
}
class Cl_vista {
  constructor(app) {
    this.app = app;
  }
}

class Cl_vCinefilo extends Cl_vista {
  agregar() {
    let cinefilo = new Cl_mCinefilo();
    cinefilo.codigo = prompt("Coloque el codigo del grupo :");
    cinefilo.sala = prompt("A que sala quieren entrar:");
    while (cinefilo.sala !== 1 && cinefilo.sala !== 2 && cinefilo.sala !== 3) {
      cinefilo.sala = +prompt(
        "Esa sala no esta disponible. Escoga entre las salas 1, 2 y 3 por favor"
      );
    }
    if (cinefilo.sala === 1) {
      cinefilo.nombre = "batman";
    } else if (cinefilo.sala === 2) {
      cinefilo.nombre = "nemo";
    } else if (cinefilo.sala === 3) {
      cinefilo.nombre = "anabell";
    }
    cinefilo.cantdAdulto = prompt("Cantidad de Adultos:");
    cinefilo.cantdNiño = prompt("Cantidad de Niños:");

    if (!this.app.mCine.agregar(cinefilo)) {
      alert("capacidad de la sala excedida");
    } else {
      alert("cinefilo registrado exitosamnemte");
    }
  }

  eliminar() {
    let codigo = +prompt("codigo de los cinefilos a eliminar :");
    if (this.app.mCine.existe(codigo)) {
      if (confirm(`¿Seguro de eliminar el codigo: ${codigo}?`))
        this.app.mCine.eliminar(codigo);
    } else alert(`No existe el codigo: ${codigo}`);
  }
}

class Cl_vCine extends Cl_vista {
  constructor(app) {
    super(app);
    this.btAgregar = document.getElementById("vCine_btAgregar");
    this.btEliminar = document.getElementById("vCine_btEliminar");

    this.btAgregar.onclick = () => {
      this.app.vCinefilo.agregar();
      this.listarInfo();
    };
    this.btEliminar.onclick = () => {
      this.app.vCinefilo.eliminar();
      this.listarInfo();
    };
    this.rptrCine = document.getElementById("vCine_rptrCine");
    this.tmpltDivCinefilo = this.rptrCine.children[0].cloneNode(true);
    this.lblMontoTotal = document.getElementById("vCine_lblMontoTotal");
    this.lblPeliculaMasVendida = document.getElementById(
      "vCine_lblPeliculaMasVendida"
    );
    this.lblCantEntradasVendidas = document.getElementById(
      "vCine_lblCantEntradasVendidas"
    );
    this.lblCantEntradas = document.getElementById("vCine_lblCantEntradas");
    this.lblCant2 = document.getElementById("vCine_lblCant2");
    this.lblCant3 = document.getElementById("vCine_lblCant3");
  }

  listarInfo() {
    while (this.rptrCine.children[0] !== undefined) {
      this.rptrCine.children[0].remove();
    }
    this.app.mCine.arrCine.forEach((cinefilo) => {
      let htmlCinefilo = this.tmpltDivCinefilo.cloneNode(true);
      htmlCinefilo.getElementsByClassName("vCine_codigo")[0].innerHTML =
        cinefilo.codigo;
      htmlCinefilo.getElementsByClassName("vCine_sala")[0].innerHTML =
        cinefilo.sala;
      htmlCinefilo.getElementsByClassName("vCine_nombre")[0].innerHTML =
        cinefilo.nombre;
      htmlCinefilo.getElementsByClassName("vCine_cantdAdulto")[0].innerHTML =
        cinefilo.cantdAdulto;
      htmlCinefilo.getElementsByClassName("vCine_cantdNiño")[0].innerHTML =
        cinefilo.cantdNiño;
      htmlCinefilo.getElementsByClassName(
        "vCine_EntradasTotal"
      )[0].innerHTML = cinefilo.entradasTotal();

      htmlCinefilo.getElementsByClassName(
        "vCine_costoEntrada"
      )[0].innerHTML = cinefilo.montoPagar();
      this.rptrCine.appendChild(htmlCinefilo);
    });
    this.lblMontoTotal.innerHTML = this.app.mCine.MontoTotal();
    this.lblPeliculaMasVendida.innerHTML = this.app.mCine.PeliMasVendida();
    this.lblCantEntradasVendidas.innerHTML = this.app.mCine.CantentradasVendidas();
    this.lblCantEntradas.innerHTML = this.app.mCine.capcPersSala1;
    this.lblCant2.innerHTML = this.app.mCine.capcPersSala2;
    this.lblCant3.innerHTML = this.app.mCine.capcPersSala3;
  }
}

class Cl_app {
  constructor() {
    this.mCinefilo = new Cl_mCinefilo();
    this.mCine = new Cl_mCine();
    this.vCinefilo = new Cl_vCinefilo(this);
    this.vCine = new Cl_vCine(this);
    this.cargarCine();
  }

  cargarCine() {
    this.mCine.agregar(new Cl_mCinefilo(222, 1, "batman", 2, 6));
    this.mCine.agregar(new Cl_mCinefilo(333, 2, "nemo", 4, 8));
    this.mCine.agregar(new Cl_mCinefilo(888, 3, "anabell", 5, 3));
    this.mCine.agregar(new Cl_mCinefilo(777, 2, "nemo", 1, 1));
    this.mCine.agregar(new Cl_mCinefilo(999, 1, "batman", 6, 7));
    this.vCine.listarInfo();
  }
}

let app = new Cl_app();
