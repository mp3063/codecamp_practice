var niz = ["srdjan", "romina", "tihana"];
// var spl = niz.split("");
// var velikoSlovo = spl[0].toUpperCase();
var zamenjeno = niz.splice(0, 1, "Srdjan");
console.log(zamenjeno);
console.log(niz);