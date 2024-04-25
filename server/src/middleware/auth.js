const requireAuth = (req, res, next) => {
  if (req.session.userID) {
    next(); // User is authenticated, continue to next middleware
  } else {
    res.redirect("/login"); // User is not authenticated, redirect to login page
  }
};

export default requireAuth;
