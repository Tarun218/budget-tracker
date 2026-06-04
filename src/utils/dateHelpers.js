import { format, parse, startOfMonth, endOfMonth, differenceInDays } from 'date-fns';

/**
 * Format date to readable string
 * @param {Date|String} date - Date to format
 * @param {String} formatStr - Format string (default: 'MMM dd, yyyy')
 * @returns {String} Formatted date
 */
export const formatDate = (date, formatStr = 'MMM dd, yyyy') => {
  try {
    const dateObj = typeof date === 'string' ? new Date(date) : date;
    return format(dateObj, formatStr);
  } catch (error) {
    return 'Invalid date';
  }
};

/**
 * Format date for input field (YYYY-MM-DD)
 * @param {Date|String} date - Date to format
 * @returns {String} Formatted date
 */
export const formatDateForInput = (date) => {
  try {
    const dateObj = typeof date === 'string' ? new Date(date) : date;
    return format(dateObj, 'yyyy-MM-dd');
  } catch (error) {
    return format(new Date(), 'yyyy-MM-dd');
  }
};

/**
 * Get month and year string
 * @param {Date|String} date - Date to get month from
 * @returns {String} Month and year (e.g., 'January 2024')
 */
export const getMonthYear = (date) => {
  try {
    const dateObj = typeof date === 'string' ? new Date(date) : date;
    return format(dateObj, 'MMMM yyyy');
  } catch (error) {
    return 'Invalid date';
  }
};

/**
 * Get month name
 * @param {Number} month - Month number (0-11)
 * @returns {String} Month name
 */
export const getMonthName = (month) => {
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  return months[month];
};

/**
 * Check if date is today
 * @param {Date|String} date - Date to check
 * @returns {Boolean} True if date is today
 */
export const isToday = (date) => {
  const dateObj = typeof date === 'string' ? new Date(date) : date;
  const today = new Date();
  return dateObj.toDateString() === today.toDateString();
};

/**
 * Check if date is yesterday
 * @param {Date|String} date - Date to check
 * @returns {Boolean} True if date is yesterday
 */
export const isYesterday = (date) => {
  const dateObj = typeof date === 'string' ? new Date(date) : date;
  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);
  return dateObj.toDateString() === yesterday.toDateString();
};

/**
 * Get relative date string (Today, Yesterday, etc.)
 * @param {Date|String} date - Date to format
 * @returns {String} Relative date string
 */
export const getRelativeDate = (date) => {
  if (isToday(date)) return 'Today';
  if (isYesterday(date)) return 'Yesterday';

  const dateObj = typeof date === 'string' ? new Date(date) : date;
  const today = new Date();
  const daysAgo = differenceInDays(today, dateObj);

  if (daysAgo <= 7) return `${daysAgo} days ago`;
  if (daysAgo <= 30) return `${Math.floor(daysAgo / 7)} weeks ago`;

  return formatDate(dateObj, 'MMM dd, yyyy');
};

/**
 * Get date range for month
 * @param {Date|String} date - Date within the month
 * @returns {Object} Start and end dates
 */
export const getMonthDateRange = (date) => {
  const dateObj = typeof date === 'string' ? new Date(date) : date;
  return {
    start: startOfMonth(dateObj),
    end: endOfMonth(dateObj),
  };
};

/**
 * Compare two dates (ignoring time)
 * @param {Date|String} date1 - First date
 * @param {Date|String} date2 - Second date
 * @returns {Number} -1 if date1 < date2, 0 if equal, 1 if date1 > date2
 */
export const compareDates = (date1, date2) => {
  const d1 = typeof date1 === 'string' ? new Date(date1) : date1;
  const d2 = typeof date2 === 'string' ? new Date(date2) : date2;

  d1.setHours(0, 0, 0, 0);
  d2.setHours(0, 0, 0, 0);

  if (d1 < d2) return -1;
  if (d1 > d2) return 1;
  return 0;
};
