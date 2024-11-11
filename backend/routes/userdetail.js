const express = require("express");
const { user } = require("../db");
const bodyParser = require("body-parser");
const { JWTMiddleware } = require("../middleware/jwt");

const router = express.Router();
router.use(bodyParser.json());

router.post("/", JWTMiddleware, async (req, res) => {
  const id = req.body.id;

  const resp = await user.findOne({ _id: id });

  if (!resp) {
    res.status(400).json({ error: "User not found" });
    res.end();
    return;
  }
  res.status(200).json({ resp: resp });
});

router.delete("/:id", JWTMiddleware, async (req, res) => {
  const { id } = req.params;

  if (!id) {
    return res.status(400).json({ error: "ID is required" });
  }

  try {
    const deletedUser = await user.findByIdAndDelete({ _id: id });

    if (!deletedUser) {
      return res.status(404).json({ error: "User not found" });
    }

    res.status(200).json({ message: "User deleted successfully", deletedUser });
  } catch (err) {
    console.error(err);
    res
      .status(500)
      .json({ error: "An error occurred while deleting the user" });
  }
});

module.exports = router;
