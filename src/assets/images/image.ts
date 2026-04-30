const Images = {
    contractor: require('./contractor.jpg'),
    consultant: require('./consultant.jpg'),
    freelancer: require('./freelancer.jpg'),
    suppliers: require('./suppliers.jpg'),
    workshops: require('./workshop.jpg'),
    deepcleaning: require('./deepcleaning.jpg'),
}
export type ImagesName = keyof typeof Images; //
export default Images;