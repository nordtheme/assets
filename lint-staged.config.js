/*
 * Copyright (c) 2016-present Sven Greb <development@svengreb.de>
 * This source code is licensed under the Creative Commons Attribution-ShareAlike 4.0 International license found in the license file.
 */

/**
 * Configurations for lint-staged.
 *
 * @see https://github.com/okonet/lint-staged#configuration
 */
module.exports = {
  "*.{js,md}": "prettier --check",
  "*.md": ["remark --no-stdout", "prettier --check"],
};
