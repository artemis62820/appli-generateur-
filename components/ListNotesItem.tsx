import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { ListNotesItemProps } from '../types/notesTypes';

export default function ListNotesItem({ note, onView }: ListNotesItemProps) {
  return (
    <TouchableOpacity
      style={styles.noteCard}
      onPress={() => onView(note)}
      activeOpacity={0.8}
    >
      <View style={[styles.colorIndicator, { backgroundColor: note.color || '#667eea' }]} />
      
      <View style={styles.noteContent}>
        <View style={styles.noteHeader}>
          <Text style={styles.noteTitle} numberOfLines={1}>
            {note.title}
          </Text>
          <View style={styles.categoryBadge}>
            <Text style={styles.categoryText}>
              {note.category}
            </Text>
          </View>
        </View>
        
        <Text style={styles.noteDescription} numberOfLines={2}>
          {note.description}
        </Text>
        
        <View style={styles.noteFooter}>
          <Text style={styles.noteDate}>
            {note.createdAt?.toLocaleDateString('fr-FR', {
              day: '2-digit',
              month: 'short',
              year: 'numeric'
            }) || 'Date inconnue'}
          </Text>
          <View style={[styles.colorPreview, { backgroundColor: note.color || '#667eea' }]} />
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  noteCard: {
    backgroundColor: 'white',
    borderRadius: 16,
    marginBottom: 8,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    overflow: 'hidden',
  },
  colorIndicator: {
    height: 4,
    width: '100%',
  },
  noteContent: {
    padding: 20,
  },
  noteHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  noteTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#1f2937',
    flex: 1,
    marginRight: 12,
    letterSpacing: -0.3,
  },
  categoryBadge: {
    backgroundColor: '#f3f4f6',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#e5e7eb',
  },
  categoryText: {
    fontSize: 12,
    color: '#6b7280',
    fontWeight: '600',
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  noteDescription: {
    fontSize: 15,
    color: '#6b7280',
    lineHeight: 22,
    marginBottom: 16,
  },
  noteFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  noteDate: {
    fontSize: 13,
    color: '#9ca3af',
    fontWeight: '500',
  },
  colorPreview: {
    width: 16,
    height: 16,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: '#f3f4f6',
  },
}); 