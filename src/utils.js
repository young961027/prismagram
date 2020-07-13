import { adjectives, nouns } from "./words";

export const generateSecret = () => {
  const randomNumber = Math.floor(Math.random() * adjectives.length);
  return `${adjectives[randomNumber]} ${nouns[randomNumber]}`;
};

export const sendMail = (email) => null;

export const sendSecretMail = (adress, secret) => {
  const email = {
    from: "nico@prismagram.com",
    to: adress,
    subject: "Login Secret for Prismagram 🔒",
    html: `Hello! Your login secret is ${secret}.<br/> Copy paste on the app/website to login`,
  };
};
