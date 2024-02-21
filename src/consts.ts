export const SITE_TITLE = 'Chris Basham';
export const SITE_DESCRIPTION = 'Chris Basham is a user experience designer and front-end developer in southern Indiana.';

const firstYearOfExperience = 2011;
const firstMonthOfExperience = 6;
const currentYear = (new Date()).getFullYear();
const currentMonth = (new Date()).getMonth() + 1;
const offsetYear = currentMonth - firstMonthOfExperience < 0 ? -1 : 0;
export const YEARS_OF_EXPERIENCE = currentYear - firstYearOfExperience + offsetYear;
