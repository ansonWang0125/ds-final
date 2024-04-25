import bcrypt from "bcrypt";
import pgPool from "../connections/dbConnection";

export const login = async (req, res) => {
  try {
    console.log("GET /api/login ", req.body.username);
    const { username, password } = req.body;

    if (req.session.userID) {
      res.status(200).json({ username: req.session.username, role: req.session.role });
    } else {
      const response = await pgPool.query(
        "SELECT * FROM USERS WHERE username = $1",
        [username]
      );
      if (response.rows.length > 0) {
        bcrypt.compare(password, response.rows[0].password).then((correct) => {
          if (correct) {
            req.session.username = response.rows[0].username;
            req.session.userID = response.rows[0].id;
            console.log("id: ", response.rows[0].id);
            req.session.role = response.rows[0].role;
            console.log(username, "logged in");
            res.status(200).json(
              { username: response.rows[0].username, role: response.rows[0].role }
            );
          } else {
            console.log("password incorrect");
            res.status(500).json({ msg: "password incorrect" });
          }
        })
          .catch((err) => { return console.error(err.message); });
      } else {
        console.log("cannot find user");
        res.status(500).json({ msg: "cannot find user" });
      }
    }
  } catch (err) {
    console.log("login error");
    console.log(err);
  }
};

export const signup = async (req, res) => {
  try {
    console.log("GET /signup ", req.session.username);
    const { username, password } = req.body;

    if (!username || !password) {
      return res.status(400).json({ msg: "data error" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const response = await pgPool.query(
      "INSERT INTO users (username, password, role) VALUES ($1, $2, $3) RETURNING id, username, role",
      [username, hashedPassword, "user"]
    );
    req.session.username = response.rows[0].username;
    req.session.userID = response.rows[0].id;
    req.session.role = response.rows[0].role;
    return res.status(200).json({ msg: "success" });
  } catch (err) {
    console.error("signup error:", err);
    return res.status(500).json({ msg: "signup failed" });
  }
};

export const auth = async (req, res) => {
  try {
    console.log("GET /auth ", req.session.userID);
    console.log("session: ", req.session);
    const response = await pgPool.query("SELECT id, username, role FROM USERS WHERE id = $1", [req.session.userID]);
    if (response.rows.length < 1) {
      return res.status(200).json({ username: "", role: "" });
    }
    return res.status(200).json(
      { username: response.rows[0].username, role: response.rows[0].role }
    );
  } catch (err) {
    console.error("auth error:", err);
    return res.status(500).json({ msg: "auth failed" });
  }
};

export const logout = async (req, res) => {
  try {
    console.log("GET /logout", req.session.userID);
    req.session.destroy();
    return res.status(200).send({ msg: "logout" });
  } catch (err) {
    console.error("logout error:", err);
    return res.status(500).json({ msg: "logout failed" });
  }
};
