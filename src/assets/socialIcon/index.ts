const SocialIcon = {
    apple: require('./apple.png'),
    google: require('./google.png'),
    facebook: require('./facebook.png'),
    image1: require('./image1.png'),

};
export type SocialIconName = keyof typeof SocialIcon; //
export default SocialIcon;