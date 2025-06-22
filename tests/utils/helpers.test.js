import {
  formatDate,
  formatDateTime,
  formatFileSize,
  truncateText,
  formatCurrency,
  generateId,
  isValidEmail,
  isValidFileType,
  isValidFileSize,
} from '../../src/utils/helpers';

describe('Helper Functions', () => {
  describe('formatDate', () => {
    it('formats date correctly', () => {
      const date = '2024-06-22T10:30:00Z';
      const result = formatDate(date);
      expect(result).toMatch(/Jun 22, 2024/);
    });

    it('handles invalid date', () => {
      const result = formatDate('invalid');
      expect(result).toBe('Invalid Date');
    });

    it('handles null/undefined', () => {
      expect(formatDate(null)).toBe('N/A');
      expect(formatDate(undefined)).toBe('N/A');
    });
  });

  describe('formatFileSize', () => {
    it('formats bytes correctly', () => {
      expect(formatFileSize(1024)).toBe('1 KB');
      expect(formatFileSize(1048576)).toBe('1 MB');
      expect(formatFileSize(0)).toBe('0 Bytes');
    });
  });

  describe('truncateText', () => {
    it('truncates long text', () => {
      const text = 'This is a very long text that should be truncated';
      const result = truncateText(text, 20);
      expect(result).toBe('This is a very long ...');
    });

    it('returns original text if under limit', () => {
      const text = 'Short text';
      const result = truncateText(text, 20);
      expect(result).toBe('Short text');
    });
  });

  describe('formatCurrency', () => {
    it('formats currency correctly', () => {
      expect(formatCurrency(10.5)).toBe('$10.50');
      expect(formatCurrency(1000)).toBe('$1,000.00');
    });

    it('handles null/undefined', () => {
      expect(formatCurrency(null)).toBe('$0.00');
    });
  });

  describe('isValidEmail', () => {
    it('validates email correctly', () => {
      expect(isValidEmail('test@example.com')).toBe(true);
      expect(isValidEmail('invalid-email')).toBe(false);
      expect(isValidEmail('')).toBe(false);
    });
  });

  describe('generateId', () => {
    it('generates unique IDs', () => {
      const id1 = generateId();
      const id2 = generateId();
      expect(id1).not.toBe(id2);
    });

    it('includes prefix when provided', () => {
      const id = generateId('test');
      expect(id).toMatch(/^test_/);
    });
  });
});
