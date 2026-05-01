const SocialIcon = {
  apple: require('./apple.png'),
  google: require('./google.png'),
  facebook: require('./facebook.png'),
  image1: require('./image1.png'),
  company: require('./company.png'),
  location: require('./location1.png'),
  money: require('./money.png'),
  rennovation: require('./rennovation.png'),
};
export type SocialIconName = keyof typeof SocialIcon; //
export default SocialIcon;
