import { LinearGradient } from 'expo-linear-gradient';
import React, { useState } from 'react';
import {SafeAreaView,StyleSheet,Text,TouchableOpacity,View,} from 'react-native';
import ListNotes from '../components/ListNotes';
import ModalNote from '../components/ModalNote';
import { ModalMode, Note } from '../types/notesTypes';

export default function Index() {
  const [selectedNote, setSelectedNote] = useState<Note | null>(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [modalMode, setModalMode] = useState<ModalMode>('create');

  const handleViewNote = (note: Note) => {
    setSelectedNote(note);
    setModalMode('view');
    setModalVisible(true);
  };

  const handleCreateNote = () => {
    setSelectedNote(null);
    setModalMode('create');
    setModalVisible(true);
  };

  const handleEditNote = () => {
    setModalMode('edit');
  };

  const handleCloseModal = () => {
    setModalVisible(false);
    setSelectedNote(null);
  };

  return (
    <SafeAreaView style={styles.container}>      
      <LinearGradient
        colors={['#667eea', '#764ba2']}
        style={styles.headerGradient}
      >

        <View style={styles.header}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>Mes Notes</Text>
            <Text style={styles.subtitle}>Organisez vos idées</Text>
          </View>
          <TouchableOpacity style={styles.addButton} onPress={handleCreateNote}>
            <View style={styles.addButtonInner}>
              <Text style={styles.addButtonText}>+</Text>
            </View>
          </TouchableOpacity>
        </View>
      </LinearGradient>

      <View style={styles.content}>
        <ListNotes
          onViewNote={handleViewNote}
        />
      </View>

      <ModalNote
        visible={modalVisible}
        mode={modalMode}
        note={selectedNote}
        onClose={handleCloseModal}
        onSuccess={() => {}}
        onEdit={handleEditNote}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8fafc',
  },
  headerGradient: {
    paddingTop: 20,
    paddingBottom: 30,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 24,
  },
  titleContainer: {
    flex: 1,
  },
  title: {
    fontSize: 32,
    fontWeight: '800',
    color: 'white',
    letterSpacing: -0.5,
  },
  subtitle: {
    fontSize: 16,
    color: 'rgba(255, 255, 255, 0.8)',
    marginTop: 4,
    fontWeight: '500',
  },
  addButton: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: 'rgba(255, 255, 255, 0.3)',
  },
  addButtonInner: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    flex: 1,
    marginTop: -20,
  },
});
