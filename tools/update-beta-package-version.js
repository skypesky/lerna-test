const { cwd } = require("process");
const { readFileSync } = require("fs-extra");
const { join } = require("path");
const { WorkSpaces } = require("./libs/work-spaces");
const getRepoInfo = require("git-repo-info");

(async () => {
  try {
    const currentVersion = readFileSync(join(cwd(), "version"))
      .toString()
      .trim();

    const commitHash = getRepoInfo()?.sha?.substring(0, 8);

    const newVersion = `${currentVersion}-beta-${commitHash}`;

    const workspace = new WorkSpaces({
      rootDir: cwd(),
      workSpaces: ["packages"],
    });

    await workspace.setVersion(newVersion);
  } catch (error) {
    console.error(error);

    process.exit(1);
  }
})();
