export const truncate = (str, limit, trail = '...') => str.length > limit ? str.substring(0, limit) + trail : str;