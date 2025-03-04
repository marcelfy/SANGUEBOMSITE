export const validaCPF = (cpf) => {

  cpf = cpf.replace(/[\s.-]/igm, '')
  if (
    !cpf ||
    cpf.length !== 11 ||
    cpf === "00000000000" ||
    cpf === "11111111111" ||
    cpf === "22222222222" ||
    cpf === "33333333333" ||
    cpf === "44444444444" ||
    cpf === "55555555555" ||
    cpf === "66666666666" ||
    cpf === "77777777777" ||
    cpf === "88888888888" ||
    cpf === "99999999999"
  ) {
    return false
  }
  var soma = 0
  var resto
  for (let i = 1; i <= 9; i++)
    soma = soma + parseInt(cpf.substring(i - 1, i)) * (11 - i)

  resto = (soma * 10) % 11

  if ((resto === 10) || (resto === 11))
    resto = 0

  if (resto !== parseInt(cpf.substring(9, 10)))
    return false

  soma = 0

  for (let i = 1; i <= 10; i++)
    soma = soma + parseInt(cpf.substring(i - 1, i)) * (12 - i)

  resto = (soma * 10) % 11

  if ((resto === 10) || (resto === 11))
    resto = 0
  if (resto !== parseInt(cpf.substring(10, 11)))
    return false
  return true
}

export function unmaskCPF (input){
  var t = input.replace('.', '')
  var t2 = t.replace('.', '')
  var t3= t2.replace('-','')
  return t3;
}

export const unMasked = (input) => {
  return input
      .replace(/\D/g, "");
};

export function validarSenha(senha) {
  // Verifica se a senha contém pelo menos uma letra maiúscula
  if (!/[A-Z]/.test(senha)) {
    return false;
  }

  // Verifica se a senha contém pelo menos um caractere especial
  if (!/[@$!%*?&]/.test(senha)) {
    return false;
  }

  // Verifica se a senha contém pelo menos um número
  if (!/\d/.test(senha)) {
    return false;
  }

  // Se chegou aqui, a senha é válida
  return true;
}
