let usuarios = ["Pedro Lucas", "Ana Maria", "Raul Seixas", "Caetano Veloso"];

const retornaUsuarioEPosicao = (arrayUsuarios) => {
  let retornoDoMap = arrayUsuarios.map((usuario, idx, arr) => {
    // * Imprime valores
    console.log(usuario, idx, arr);
    return `${usuario} da posição ${idx}`;
  });
  return retornoDoMap;
};
let usuariosEPosicoes = retornaUsuarioEPosicao(usuarios);

console.log(usuariosEPosicoes);
