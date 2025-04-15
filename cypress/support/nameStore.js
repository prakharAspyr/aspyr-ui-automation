const nameMap = {};

/**
 * Generates a 6-digit random number as string
 */
function generateSixDigitId() {
  return Math.floor(100000 + Math.random() * 900000).toString(); // ensures 6 digits
}

/**
 * Creates and stores a unique name using 6-digit random number
 * @param {string} key - A friendly name like "Parent"
 * @returns {string} - The unique name generated
 */
export function createUniqueName(key) {
  const uniqueName = `${key}_${generateSixDigitId()}`;
  nameMap[key] = uniqueName;
  return uniqueName;
}

/**
 * Retrieves the previously stored unique name by key
 * @param {string} key
 * @returns {string}
 */
export function getUniqueName(key) {
  return nameMap[key];
}
