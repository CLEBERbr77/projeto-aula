import sequelize, {Model, model} from "sequelize";

class Contact extends Model {
    static init (sequelize) {
        super.init(
        {
        name: sequelize.STRING,
        email: sequelize.STRING,
        status: sequelize.ENUM("ACTIVE","ARCHIVED"),
        }, 
        {
          sequelize,
        }
     );
    }
    static associate (models) {
        this.belongsTo(models.Customer, { foreignKey: "customer_id"});
    }
}
export default Contact;