import api from '../api/api';
import { Language } from '../models/Language';

export const getLanguages = async (): Promise<Language[]> => {
  const response = await api.get<Language[]>('/lenguajes');
  return response.data;
};

export const getLanguageById = async (id: number): Promise<Language> => {
  const response = await api.get<Language>(`/lenguajes/${id}`);
  return response.data;
};

export const createLanguage = async (language: Omit<Language, 'idlenguaje'>): Promise<void> => {
  await api.post('/lenguajes', language);
};

export const updateLanguage = async (id: number, language: Omit<Language, 'idlenguaje'>): Promise<void> => {
  await api.put(`/lenguajes/${id}`, language);
};

export const deleteLanguage = async (id: number): Promise<void> => {
  await api.delete(`/lenguajes/${id}`);
};
