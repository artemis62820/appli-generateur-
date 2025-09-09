import { create } from 'zustand';
import { createNote, deleteNote, getNotes, updateNote } from '../services/notesServices';
import { NotesActions, NotesState } from '../types/notesTypes';

export const useNotesStore = create<NotesState & NotesActions>((set, get) => ({
  notes: [],
  loading: false,
  error: null,

  getNotes: async () => {
    set({ loading: true, error: null });
    // set : permet de mettre à jour l'état du store
    try {
      const response = await getNotes();
      if (response.success && response.data) {
        set({ notes: response.data, loading: false });
      } else {
        set({ error: response.error || 'Erreur', loading: false });
      }
    } catch (error) {
      set({ error: 'Erreur réseau', loading: false });
    }
  },

  addNote: async (noteData) => {
    set({ loading: true, error: null });
    try {
      const response = await createNote(noteData);
      
      if (response.success && response.data) {
        set((state) => ({
          notes: [response.data!, ...state.notes],
          loading: false
        }));
      } else {
        set({ error: response.error || 'Erreur', loading: false });
      }
    } catch (error) {
      set({ error: `Erreur réseau: ${error instanceof Error ? error.message : 'Erreur inconnue'}`, loading: false });
    }
  },

  updateNote: async (id, noteData) => {
    set({ loading: true, error: null });
    try {
      const response = await updateNote(id, noteData);
      if (response.success && response.data) {
        set((state) => ({
          notes: state.notes.map((note) =>
            note.id === id ? response.data! : note
          ),
          loading: false
        }));
      } else {
        set({ error: response.error || 'Erreur', loading: false });
      }
    } catch (error) {
      set({ error: 'Erreur réseau', loading: false });
    }
  },

  deleteNote: async (id) => {
    set({ loading: true, error: null });
    try {
      const response = await deleteNote(id);
      if (response.success) {
        set((state) => ({
          notes: state.notes.filter((note) => note.id !== id),
          loading: false
        }));
      } else {
        set({ error: response.error || 'Erreur', loading: false });
      }
    } catch (error) {
      set({ error: 'Erreur réseau', loading: false });
    }
  },
}));

export const useNotes = () => useNotesStore((state) => state.notes);
