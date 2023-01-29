const { cwd } = require("process");

const { readFileSync } = require("fs-extra");

const { join } = require("path");

const { WorkSpaces } = require("./lib/work-spaces");

(async () => {
  try {
    const currentVersion = readFileSync(join(cwd(), "version"))
      .toString()
      .trim();

    const date = new Date();

    const time = `${date.getFullYear()}-${
      date.getMonth() + 1 < 10 ? `0${date.getMonth() + 1}` : date.getMonth() + 1
    }-${date.getDate()}-${date.getHours()}-${date.getMinutes()}-${date.getMilliseconds()}`;

    const newVersion = `${currentVersion}-beta-${time}`;

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
