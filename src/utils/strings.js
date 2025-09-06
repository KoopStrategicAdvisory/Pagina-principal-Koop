// Normaliza nombres a MAYÚSCULAS sin acentos ni caracteres raros
export function normalizeUpperAscii(input) {
  if (input == null) return '';
  try {
    const s = String(input)
      // Elimina acentos/diacríticos
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      // Elimina caracteres de control (incluye U+0081) y DEL/C1
      .replace(/[\u0000-\u001F\u007F-\u009F]/g, '')
      // Sustituye NBSP por espacio normal
      .replace(/\u00A0/g, ' ')
      // Elimina espacios de ancho cero y BOMs
      .replace(/[\u200B-\u200D\uFEFF]/g, '')
      // Quita el caracter de reemplazo � si llegara a colarse
      .replace(/\uFFFD/g, '')
      // Colapsa espacios
      .replace(/\s+/g, ' ')
      .trim();
    return s.toUpperCase();
  } catch (_) {
    return String(input).toUpperCase();
  }
}
