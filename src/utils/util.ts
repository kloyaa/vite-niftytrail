export const isNotEmpty = (value: any) => {
    if (typeof value === 'string') {
      // Check if the string has at least one non-whitespace character
      return value.trim().length > 0;
    }
  
    if (Array.isArray(value)) {
      // Check if the array has at least one element
      return value.length > 0;
    }
  
    if (typeof value === 'object' && value !== null) {
      // Check if the object has at least one property
      return Object.keys(value).length > 0;
    }
  
    // For other types (numbers, booleans, etc.), consider them as not empty
    return value !== undefined && value !== null;
}
  