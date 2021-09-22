const mongoose = require("mongoose");

const recipeSchema = new mongoose.Schema(
	{
		mealType: {
			type: String,
		},
		recipeName: {
			type: String,
		}
	},
	{
		timestamps: true,
	}
);

module.exports = mongoose.model("recipe", recipeSchema);