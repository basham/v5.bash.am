const NAME = 'Chris Basham';
export const SITE_TITLE = NAME;
export const SITE_DESCRIPTION = `${NAME} designs and develops for the web in southern Indiana. He believes every word, byte, and pixel can improve how we care for each other and the earth.`;

const firstYearOfExperience = 2011;
const firstMonthOfExperience = 6;
const currentYear = (new Date()).getFullYear();
const currentMonth = (new Date()).getMonth() + 1;
const offsetYear = currentMonth - firstMonthOfExperience < 0 ? -1 : 0;
export const YEARS_OF_EXPERIENCE = currentYear - firstYearOfExperience + offsetYear;
