import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Platform,
  Dimensions,
  Image,
} from 'react-native';
import { PanGestureHandler, State } from 'react-native-gesture-handler';

const { width } = Dimensions.get('window');
const isWeb = Platform.OS === 'web';
import { router } from 'expo-router';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function OnboardingSleepType() {
  const handleNext = () => {
    router.push('/onboarding-sleep-mentor');
  };

  const handleBack = () => {
    router.back();
  };

  const onGestureEvent = (event) => {
    if (event.nativeEvent.state === State.END) {
      const { translationX } = event.nativeEvent;
      const threshold = 50; // Minimum swipe distance
      
      if (translationX < -threshold) {
        // Swipe left - go to next screen
        handleNext();
      } else if (translationX > threshold) {
        // Swipe right - go back to previous screen
        handleBack();
      }
    }
  };

  return (
    <PanGestureHandler onGestureEvent={onGestureEvent}>
      <View style={styles.container}>
        {/* Progress Indicators */}
        <View style={styles.progressContainer}>
          <View style={[styles.progressDot, styles.progressDotActive]} />
          <View style={[styles.progressDot, styles.progressDotActive]} />
          <View style={[styles.progressDot, styles.progressDotInactive]} />
        </View>

        {/* Title */}
        <Text style={styles.title}>Discover Your Sleep Type</Text>
        
        {/* Description */}
        <Text style={styles.description}>
          Answer a few questions to personalize your experience.
        </Text>

        {/* Illustration */}
        <View style={styles.illustrationContainer}>
          <Image 
            source={require('../assets/onboard1.png')} 
            style={styles.onboardingImage}
            resizeMode="contain"
          />
        </View>

        {/* Swipe Hint */}
        <Text style={styles.swipeHint}>← Swipe to navigate →</Text>

        {/* Next Button */}
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.nextButton} onPress={handleNext}>
            <Text style={styles.nextButtonText}>Next</Text>
          </TouchableOpacity>
        </View>
      </View>
    </PanGestureHandler>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8D5F2', // Light violet background
    paddingHorizontal: 24,
    paddingTop: 60,
  },
  progressContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 40,
    gap: 12,
  },
  progressDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
  },
  progressDotActive: {
    backgroundColor: '#6366F1', // Professional indigo
  },
  progressDotInactive: {
    backgroundColor: '#E5E7EB',
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    color: '#4C1D95', // Dark purple
    textAlign: 'left',
    marginBottom: 16,
  },
  description: {
    fontSize: 16,
    color: '#6B46C1', // Medium purple
    textAlign: 'left',
    marginBottom: 60,
    lineHeight: 24,
  },
  illustrationContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  onboardingImage: {
    width: isWeb ? Math.min(width * 0.8, 400) : width * 0.9,
    height: isWeb ? Math.min(width * 0.6, 300) : width * 0.7,
    borderRadius: 20,
  },
  chairContainer: {
    position: 'relative',
    alignItems: 'center',
  },
  chair: {
    position: 'relative',
  },
  chairBack: {
    width: 80,
    height: 60,
    backgroundColor: '#8B5CF6',
    borderRadius: 8,
  },
  chairSeat: {
    width: 80,
    height: 20,
    backgroundColor: '#7C3AED',
    borderRadius: 4,
    marginTop: -10,
  },
  ottoman: {
    width: 60,
    height: 15,
    backgroundColor: '#8B5CF6',
    borderRadius: 8,
    marginTop: 10,
  },
  womanFigure: {
    position: 'absolute',
    top: 10,
    left: 20,
  },
  womanHead: {
    width: 16,
    height: 16,
    borderRadius: 8,
    backgroundColor: '#FBBF24',
    marginBottom: 4,
  },
  womanBody: {
    width: 20,
    height: 30,
    backgroundColor: '#8B5CF6',
    borderRadius: 4,
    marginBottom: 4,
  },
  womanArms: {
    position: 'absolute',
    top: 20,
    left: -8,
    width: 8,
    height: 20,
    backgroundColor: '#FBBF24',
    borderRadius: 4,
  },
  womanLegs: {
    position: 'absolute',
    top: 50,
    left: 2,
    width: 16,
    height: 25,
    backgroundColor: '#7C3AED',
    borderRadius: 2,
  },
  book: {
    position: 'absolute',
    top: 15,
    right: -10,
    width: 12,
    height: 16,
    backgroundColor: '#6B7280',
    borderRadius: 2,
  },
  sideTable: {
    position: 'absolute',
    left: -60,
    top: 20,
  },
  tableTop: {
    width: 30,
    height: 4,
    backgroundColor: '#8B4513',
    borderRadius: 2,
  },
  tableLeg: {
    width: 4,
    height: 25,
    backgroundColor: '#8B4513',
    marginLeft: 13,
  },
  lamp: {
    position: 'absolute',
    top: -15,
    left: 8,
  },
  lampBase: {
    width: 8,
    height: 12,
    backgroundColor: '#1F2937',
    borderRadius: 2,
  },
  lampShade: {
    width: 12,
    height: 8,
    backgroundColor: '#1F2937',
    borderRadius: 6,
    marginTop: -4,
    marginLeft: -2,
  },
  chart: {
    position: 'absolute',
    right: -40,
    top: 10,
  },
  chartFrame: {
    width: 40,
    height: 30,
    backgroundColor: '#F3F4F6',
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#D1D5DB',
  },
  chartBars: {
    position: 'absolute',
    top: 4,
    left: 4,
    flexDirection: 'row',
    alignItems: 'flex-end',
    height: 22,
    gap: 2,
  },
  chartBar: {
    width: 6,
    backgroundColor: '#8B5CF6',
    borderRadius: 1,
  },
  chartBar1: { height: 8 },
  chartBar2: { height: 12 },
  chartBar3: { height: 6 },
  chartBar4: { height: 16 },
  plant: {
    position: 'absolute',
    right: -20,
    bottom: 20,
  },
  plantPot: {
    width: 20,
    height: 15,
    backgroundColor: '#1F2937',
    borderRadius: 2,
  },
  plantLeaves: {
    position: 'absolute',
    top: -10,
    left: 2,
  },
  leaf: {
    width: 8,
    height: 12,
    backgroundColor: '#8B5CF6',
    borderRadius: 4,
  },
  leaf1: { transform: [{ rotate: '-20deg' }] },
  leaf2: { transform: [{ rotate: '0deg' }], marginTop: -5 },
  leaf3: { transform: [{ rotate: '20deg' }] },
  buttonContainer: {
    alignItems: 'center',
    marginBottom: 40,
    paddingHorizontal: 20,
  },
  nextButton: {
    backgroundColor: '#6366F1', // Professional indigo
    paddingVertical: isWeb ? 20 : 16,
    paddingHorizontal: isWeb ? 56 : 48,
    borderRadius: 8,
    minWidth: 200,
    alignItems: 'center',
  },
  nextButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
  swipeHint: {
    textAlign: 'center',
    color: '#9CA3AF',
    fontSize: 14,
    marginBottom: 20,
    fontStyle: 'italic',
  },
});
