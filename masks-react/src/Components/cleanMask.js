export const cleanMask = value => {
    return value
    .replace(/([^0-9a-zA-Z])/g, '') //Substitui qualquer caracter que não seja numero ou letra por nada
}