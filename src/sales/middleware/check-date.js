import moment from "moment";

function checkDateIsValid(req, res, next) {
  const { date } = req.query;

  if (!date) {
    return res.status(404).send({ error: "empty-date" });
  }

  if (!moment(date, "YYYY-MM-DDTHH:mm:ss.SSSZ", true).isValid()) {
    return res.status(404).send({ error: "invalid-date" });
  }

  next();
}

export { checkDateIsValid };
