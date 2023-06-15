const fs = require("fs");

const lockPath = "yarn.lock";

function deletePackageEntries(patterns) {
  let data = fs.readFileSync(lockPath, "utf8");

  patterns.forEach((pattern) => {
    data = data.replace(pattern, "");
  });

  fs.writeFileSync(lockPath, data, "utf8");
}

const patterns = [
  /"@esri\/calcite-components@npm:.+?":.+?linkType: (soft|hard)/s,
];

deletePackageEntries(patterns);
