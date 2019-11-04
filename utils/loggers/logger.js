const loggerSetting = require("../../setting").logger;
const winston = require("winston");
require("winston-daily-rotate-file");

const { Logger, transports } = winston;
const { Console, DailyRotateFile } = transports;
const logger = new Logger({
  transports: [
    new DailyRotateFile({
      name: "base_logger",
      filename: `${loggerSetting.path}info.log`,
      datePatten: "yyyy-MM-dd",
      prepend: false,
      level: "info"
    }),
    new Console(),
    new DailyRotateFile({
      name: "error_log",
      filename: `${loggerSetting.path}error.log`,
      datePatten: "yyyy-MM-dd",
      level: "error"
    })
  ]
});

module.exports = logger;
