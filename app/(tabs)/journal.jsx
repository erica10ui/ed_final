import React, { useState } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  ScrollView,
  TouchableOpacity 
} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function Journal() {
  const [dreamEntries, setDreamEntries] = useState([
    {
      id: 1,
      date: 'Dec 15',
      description: 'A calm beach with beautiful sunset.'
    },
    {
      id: 2,
      date: 'Dec 15',
      description: 'A calm beach with beautiful sunset.'
    },
    {
      id: 3,
      date: 'Dec 15',
      description: 'A calm beach with beautiful sunset.'
    },
    {
      id: 4,
      date: 'Dec 15',
      description: 'A calm beach with beautiful sunset.'
    }
  ]);

  const handleAddEntry = () => {
    console.log('Add new dream entry');
  };

  const handleEditEntry = (id) => {
    console.log(`Edit dream entry ${id}`);
  };

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Your Dream Journal</Text>
        <Text style={styles.headerSubtitle}>Track and interpret your dreams</Text>
      </View>

      {/* Dream Log Section */}
      <View style={styles.dreamLogSection}>
        <View style={styles.dreamLogHeader}>
          <Text style={styles.dreamLogTitle}>Dream Log:</Text>
          <TouchableOpacity onPress={handleAddEntry}>
            <Text style={styles.addEntryText}>+ Add Entry</Text>
          </TouchableOpacity>
        </View>

        {/* Dream Entries */}
        <View style={styles.dreamEntriesContainer}>
          {dreamEntries.map((entry) => (
            <View key={entry.id} style={styles.dreamEntry}>
              <Text style={styles.dreamEntryText}>
                Dream on {entry.date}: {entry.description}
              </Text>
              <TouchableOpacity 
                style={styles.editButton}
                onPress={() => handleEditEntry(entry.id)}
              >
                <MaterialCommunityIcons name="pencil" size={16} color="#8B5CF6" />
              </TouchableOpacity>
            </View>
          ))}
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 24,
    paddingTop: 60,
  },
  header: {
    backgroundColor: '#F3E8FF',
    padding: 20,
    borderRadius: 16,
    marginBottom: 32,
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: '700',
    color: '#1F2937',
    marginBottom: 8,
    textAlign: 'center',
  },
  headerSubtitle: {
    fontSize: 16,
    color: '#6B7280',
    fontWeight: '400',
    textAlign: 'center',
  },
  dreamLogSection: {
    marginBottom: 24,
  },
  dreamLogHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  dreamLogTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#1F2937',
  },
  addEntryText: {
    fontSize: 16,
    color: '#8B5CF6',
    fontWeight: '500',
  },
  dreamEntriesContainer: {
    gap: 12,
  },
  dreamEntry: {
    backgroundColor: '#F9FAFB',
    borderRadius: 12,
    padding: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },
  dreamEntryText: {
    fontSize: 14,
    color: '#1F2937',
    flex: 1,
    lineHeight: 20,
  },
  editButton: {
    padding: 8,
    marginLeft: 12,
  },
});
