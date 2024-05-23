import { create } from 'zustand';
import { Language } from '../models/Language';
import { getLanguages, getLanguageById, createLanguage, updateLanguage, deleteLanguage } from '../repositories/LanguageRepository';

interface LanguageState {
  languages: Language[];
  fetchLanguages: () => Promise<void>;
  addLanguage: (language: Omit<Language, 'idlenguaje'>) => Promise<void>;
  editLanguage: (id: number, language: Omit<Language, 'idlenguaje'>) => Promise<void>;
  removeLanguage: (id: number) => Promise<void>;
}

export const useLanguageStore = create<LanguageState>((set) => ({
  languages: [],
  fetchLanguages: async () => {
    const languages = await getLanguages();
    set({ languages });
  },
  addLanguage: async (language) => {
    await createLanguage(language);
    await set((state) => ({ ...state, fetchLanguages: state.fetchLanguages }));
  },
  editLanguage: async (id, language) => {
    await updateLanguage(id, language);
    await set((state) => ({ ...state, fetchLanguages: state.fetchLanguages }));
  },
  removeLanguage: async (id) => {
    await deleteLanguage(id);
    await set((state) => ({ ...state, fetchLanguages: state.fetchLanguages }));
  },
}));
