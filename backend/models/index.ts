import Suite from "./Suite";
import SavedSuite from "./SavedSuite";
import Review from "./Review";
import Reservation from "./Reservation";

// Estabelecer associações
Suite.hasMany(Review, { foreignKey: "suiteId", as: "reviews" });
Review.belongsTo(Suite, { foreignKey: "suiteId" });

Suite.hasMany(SavedSuite, { foreignKey: "suiteId", as: "savedSuites" });
SavedSuite.belongsTo(Suite, { foreignKey: "suiteId" });

// Adicionar suiteId para Reservation
Reservation.belongsTo(Suite, { foreignKey: "suiteId" });
Suite.hasMany(Reservation, { foreignKey: "suiteId", as: "reservations" });

export { Suite, SavedSuite, Review, Reservation };
