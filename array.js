let usuarios = ["Pedro Lucas", "Ana Maria", "Raul Seixas", "Caetano Veloso"];

const retornaUsuarioEPosicaoMap = (arrayUsuarios) => {
  let retornoDoMap = arrayUsuarios.map((usuario, idx, arr) => {
    // * Imprime valores
    // console.log(usuario, idx, arr);
    return `${usuario} da posição ${idx}`;
  });
  return retornoDoMap;
};
let usuariosEPosicoesMap = retornaUsuarioEPosicaoMap(usuarios);

console.log(usuariosEPosicoesMap);

const retornaUsuarioEPosicaoForEach = (arrayUsuarios) => {
  let arrayAuxiliarForEach = [];
  arrayUsuarios.forEach((usuario, idx, arr) => {
    // console.log(usuario, idx, arr);
    arrayAuxiliarForEach.push(`${usuario} da posição ${idx}`);
  });
  return arrayAuxiliarForEach;
};
let usuariosEPosicoesForEach = retornaUsuarioEPosicaoForEach(usuarios);

console.log(usuariosEPosicoesForEach);
