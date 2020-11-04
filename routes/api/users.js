const express = require("express");
const router = express.Router();

//@route get /api/users/test
//@desc Tests users route
//@access Public
router.get("/test", (req, res) =>
  res.json({
    msg: "hey there",
  })
);

module.exports = router;
