import React, { useEffect } from 'react';
import {
  FlatList,
  StyleSheet,
  View
} from 'react-native';
import { useNotes, useNotesStore } from '../store/notesStore';
import { ListNotesProps, Note } from '../types/notesTypes';
import ListNotesItem from './ListNotesItem';

export default function ListNotes({ onViewNote }: Omit<ListNotesProps, 'onEditNote'>)
// Omit : permet de supprimer une propriété d'un objet
// ListNotesProps : permet de définir les props du composant ListNotes
// onViewNote : permet de définir la fonction de vue de la note
{
  const { getNotes } = useNotesStore();
  const notes = useNotes();

  useEffect(() => {
    getNotes();
  }, []);

  const renderNote = ({ item }: { item: Note; index: number }) => (
    <ListNotesItem
      note={item}
      onView={onViewNote}
    />
  );



  return (
    <View style={styles.container}>
      <FlatList
        // FlatList : permet de créer des listes de données
        data={notes}
        // data : permet de définir les données à afficher
        keyExtractor={(item) => item.id!}
        // keyExtractor : permet de définir la clé de chaque élément
        renderItem={renderNote}
        // renderItem : permet de définir la fonction de rendu pour chaque élément
        contentContainerStyle={[
          styles.listContainer,
          notes.length === 0 && styles.emptyListContainer
        ]}
        // contentContainerStyle : permet de définir le style du conteneur de la liste
        showsVerticalScrollIndicator={false}
        // showsVerticalScrollIndicator : permet de définir si le scroll vertical est visible
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        // ItemSeparatorComponent : permet de définir le composant à afficher entre chaque élément
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8fafc',
  },
  listContainer: {
    padding: 20,
    paddingTop: 10,
  },
  emptyListContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  separator: {
    height: 12,
  },

});
