exports.shorthands = undefined;

exports.up = (pgm) => {
  pgm.renameColumn("users", "roles", "role");
};

exports.down = (pgm) => {
  pgm.renameColumn("users", "role", "roles");
};
