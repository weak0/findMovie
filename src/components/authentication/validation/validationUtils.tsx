export const emailValidation = (email: string) : boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}
export const passwordValidation = (password: string) : boolean => {
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@#$%^&*!]{8,}$/;
    return passwordRegex.test(password);
}
// Contains at least one alphabetical character (uppercase or lowercase).
// Contains at least one digit.
// Consists of a combination of alphabetical characters and digits.
// Has a minimum length of 8 characters.

export const comparePasswords = (password: string, password2: string) : boolean => {
    return password === password2;
}