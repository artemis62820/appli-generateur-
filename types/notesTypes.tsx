import { NOTE_CATEGORIES, NOTE_COLORS } from '../constants/notesConstants';

export interface Note {
  id: string;
  title: string;
  description: string;
  color?: NoteColor;
  category: NoteCategory;
  createdAt?: Date;
  updatedAt?: Date;
}

export type NoteCategory = typeof NOTE_CATEGORIES[number];
export type NoteColor = typeof NOTE_COLORS[number];

export interface NotesState {
  notes: Note[];
  loading: boolean;
  error: string | null;
}

export interface NotesActions {
  getNotes: () => Promise<void>;
  addNote: (note: CreateNote) => Promise<void>;
  updateNote: (id: string, note: Partial<UpdateNote>) => Promise<void>;
  deleteNote: (id: string) => Promise<void>;
}

export interface ServiceResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
}

export type ModalMode = 'create' | 'edit' | 'view';

export interface ModalNoteProps {
  visible: boolean;
  mode: ModalMode;
  note?: Note | null;
  onClose: () => void;
  onSuccess?: () => void;
  onEdit?: () => void;
}

export interface CreateNote {
  title: string;
  description: string;
  color?: NoteColor;
  category: NoteCategory;
}

export interface UpdateNote {
  id: string;
  title?: string;
  description?: string;
  color?: NoteColor;
  category?: NoteCategory;
}

export interface ListNotesProps {
  onViewNote: (note: Note) => void;
}

export interface ListNotesItemProps {
  note: Note;
  onView: (note: Note) => void;
}




