export const cleanMask = value => {
    return value
    .replace(/\D\d/g, '') //Substitui qualquer caracter que não seja numero ou letra por nada
}