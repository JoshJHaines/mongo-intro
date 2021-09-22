var express = require("express");
var router = express.Router();
var recipeController = require("./controller/recipeController");

/* GET home page. */
router.get("/", function (req, res, next) {
	// res.json({ message: "animal page" });
	recipeController.getAllRecipe({}, function (err, foundRecipe) {
		if (err) {
			res.status(500).json({
				message: "Something went wrong!",
				error: err.message,
			});
		} else {
			res.json({ message: "Success!", foundRecipe });
		}
	});
});

router.post("/create-recipe", function (req, res) {
	//the naming convention is called payload
	recipeController.createRecipe(req.body, function (err, savedRecipe) {
		if (err) {
			res.status(500).json({
				message: "Something went wrong!",
				error: err.message,
			});
		} else {
			res.json({ message: "success", savedRecipe });
		}
	});
});

router.delete("/delete-recipe-by-id/:id", function (req, res) {
	//the naming convention is called payload
	recipeController.deleteRecipe(req.params.id, function (err, deletedRecipe) {
		if (err) {
			res.status(500).json({
				message: "Something went wrong!",
				error: err.message,
			});
		} else {
			res.json({ message: "success", deletedRecipe });
		}
	});
});

router.put("/update-recipe-by-id/:id", function (req, res) {
	recipeController.updatedRecipeById(
		req.params.id,
		req.body,
		function (err, updatedRecipe) {
			if (err) {
				res.status(500).json({
					message: "Something Went Wrong!",
					error: err.message,
				});
			} else {
				res.json({ message: "success", updatedRecipe });
			}
		}
	);
});
module.exports = router;
