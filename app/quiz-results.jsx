import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
} from 'react-native';
import { router, useLocalSearchParams } from 'expo-router';

export default function QuizResults() {
  const { answer1, answer2, answer3 } = useLocalSearchParams();

  const handleGetStarted = () => {
    router.push('/(tabs)/home');
  };

  const handleRetakeQuiz = () => {
    router.push('/quiz-question-1');
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      
      {/* Results Content */}
      <View style={styles.content}>
        {/* Title */}
        <Text style={styles.title}>You're a Night Owl</Text>
        
        {/* Subtitle */}
        <Text style={styles.subtitle}>
          Here's what can help you sleep better.
        </Text>

        {/* Personalized Recommendations */}
        <View style={styles.recommendationsContainer}>
          <View style={styles.recommendationItem}>
            <Text style={styles.recommendationTitle}>🌙 Evening Routine</Text>
            <Text style={styles.recommendationText}>
              Create a consistent bedtime routine 1 hour before sleep
            </Text>
          </View>

          <View style={styles.recommendationItem}>
            <Text style={styles.recommendationTitle}>📱 Digital Sunset</Text>
            <Text style={styles.recommendationText}>
              Avoid screens 30 minutes before bed to reduce blue light
            </Text>
          </View>

          <View style={styles.recommendationItem}>
            <Text style={styles.recommendationTitle}>🧘 Relaxation</Text>
            <Text style={styles.recommendationText}>
              Try meditation or gentle stretching to calm your mind
            </Text>
          </View>

          <View style={styles.recommendationItem}>
            <Text style={styles.recommendationTitle}>🌡️ Environment</Text>
            <Text style={styles.recommendationText}>
              Keep your bedroom cool, dark, and quiet for optimal sleep
            </Text>
          </View>
        </View>
      </View>

      {/* Action Buttons */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.retakeButton} onPress={handleRetakeQuiz}>
          <Text style={styles.retakeButtonText}>Retake Quiz</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.getStartedButton} onPress={handleGetStarted}>
          <Text style={styles.getStartedButtonText}>Get Started</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 24,
    paddingTop: 60,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 32,
    fontWeight: '700',
    color: '#1F2937',
    textAlign: 'center',
    marginBottom: 16,
  },
  subtitle: {
    fontSize: 18,
    color: '#6B7280',
    textAlign: 'center',
    marginBottom: 40,
    lineHeight: 26,
  },
  recommendationsContainer: {
    width: '100%',
    gap: 20,
  },
  recommendationItem: {
    backgroundColor: '#F9FAFB',
    padding: 20,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },
  recommendationTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1F2937',
    marginBottom: 8,
  },
  recommendationText: {
    fontSize: 14,
    color: '#6B7280',
    lineHeight: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 40,
    gap: 16,
  },
  retakeButton: {
    flex: 1,
    paddingVertical: 16,
    paddingHorizontal: 24,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#8B5CF6',
    alignItems: 'center',
  },
  retakeButtonText: {
    color: '#8B5CF6',
    fontSize: 16,
    fontWeight: '600',
  },
  getStartedButton: {
    flex: 1,
    backgroundColor: '#8B5CF6',
    paddingVertical: 16,
    paddingHorizontal: 24,
    borderRadius: 12,
    alignItems: 'center',
  },
  getStartedButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});




