export const generateId = (str: string) => {
  return str
    .trim()
    .toLocaleLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[ąćęłńóśźż]/g, (match) => {
      const map: Record<string, string> = {
        ą: 'a',
        ć: 'c',
        ę: 'e',
        ł: 'l',
        ń: 'n',
        ó: 'o',
        ś: 's',
        ź: 'z',
        ż: 'z',
      };
      return map[match];
    })
    // eslint-disable-next-line no-useless-escape
    .replace(/[^a-zA-Z0-9\-]/g, '');
};
