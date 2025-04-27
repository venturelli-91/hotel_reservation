import Suite from "./Suite";
import SavedSuite from "./SavedSuite";
import Review from "./Review";

Suite.hasMany(Review, { foreignKey: "suiteId", as: "reviews" });
Review.belongsTo(Suite, { foreignKey: "suiteId" });

Suite.hasMany(SavedSuite, { foreignKey: "suiteId", as: "savedSuites" });
SavedSuite.belongsTo(Suite, { foreignKey: "suiteId" });

export { Suite, SavedSuite, Review };
