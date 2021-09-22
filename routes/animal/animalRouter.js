var express = require("express");
var router = express.Router();
var animalController = require("./controller/animalController");

/* GET home page. */
router.get("/", function (req, res, next) {
  // res.json({ message: "animal page" });
  animalController.getAllAnimal({}, function(err, foundAnimal){
    if (err){
      res
        .status(500)
        .json({message: "Something went wrong!", error: err.message})
    } else {
      res.json({message: "Success!", foundAnimal})
    }
  })
});

router.post("/create-animal", function (req, res) {
  //the naming convention is called payload
  animalController.createAnimal(req.body, function (err, savedAnimal) {
    if (err) {
      res
        .status(500)
        .json({ message: "Something went wrong!", error: err.message });
    } else {
      res.json({ message: "success", savedAnimal });
    }
  });
});


router.delete("/delete-animal-by-id/:id", function (req, res) {
  //the naming convention is called payload
  animalController.deleteAnimal(req.params.id, function (err, deletedAnimal) {
    if (err) {
      res
        .status(500)
        .json({ message: "Something went wrong!", error: err.message });
    } else {
      res.json({ message: "success", deletedAnimal });
    }
  });
});

router.put("/update-animal-by-id/:id", function (req, res){
  animalController.updatedAnimalById(
    req.params.id,
    req.body,
    function (err, updatedAnimal) {
      if (err){
        res
          .status(500)
          .json({message: "Something Went Wrong!", error: err.message})
      } else {
        res.json({message: "success", updatedAnimal})
      }
    }
  )
})
module.exports = router;