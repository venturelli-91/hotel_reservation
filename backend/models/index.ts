import Suite from "./Suite";
import SavedSuite from "./SavedSuite";
import Review from "./Review";
import Reservation from "./Reservation";
import User from "./User";

Suite.hasMany(Review, { foreignKey: "suiteId", as: "reviews" });
Review.belongsTo(Suite, { foreignKey: "suiteId" });

Suite.hasMany(SavedSuite, { foreignKey: "suiteId", as: "savedSuites" });
SavedSuite.belongsTo(Suite, { foreignKey: "suiteId" });

Suite.hasMany(Reservation, { foreignKey: "suiteId", as: "reservations" });
Reservation.belongsTo(Suite, { foreignKey: "suiteId" });

export { Suite, SavedSuite, Review, Reservation, User };
