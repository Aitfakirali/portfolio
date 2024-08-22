export const dateFormatterRange = (dateInput: string) => {
  // Supprimer tous les caractères non numériques et non '-' ou '/'
  const cleanedValue = dateInput.replace(/[^0-9/-]/g, '');
  /**
   *           dd/MM/yyyy-dd/MM/yyyy
   *           012345678901234567890
   *           123456789012345678901
   *
   */
  // Ajouter automatiquement les '/' et '-' aux positions correctes
  if (cleanedValue.length > 3 && cleanedValue[2] !== '/') {
    dateInput = cleanedValue.slice(0, 2) + '/' + cleanedValue.slice(2);
  }
  if (cleanedValue.length > 6 && cleanedValue[5] !== '/') {
    dateInput = dateInput.slice(0, 5) + '/' + dateInput.slice(5);
  }
  if (cleanedValue.length > 10 && cleanedValue[10] !== '-') {
    dateInput = dateInput.slice(0, 10) + '-' + dateInput.slice(10);
  }
  if (cleanedValue.length > 13 && cleanedValue[13] !== '/') {
    dateInput = dateInput.slice(0, 13) + '/' + dateInput.slice(13);
  }
  if (cleanedValue.length >= 16 && cleanedValue[16] !== '/') {
    dateInput = dateInput.slice(0, 16) + '/' + dateInput.slice(16);
  }
  return dateInput;
};
