import React from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  ScrollView,
  TouchableOpacity 
} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function Home() {
  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return 'Good Morning';
    if (hour < 17) return 'Good Afternoon';
    return 'Good Evening';
  };

  const getCurrentDate = () => {
    const now = new Date();
    const month = now.toLocaleString('default', { month: 'long' });
    const year = now.getFullYear();
    return `${month} ${year}`;
  };

  const getCalendarDays = () => {
    const days = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
    const dates = [];
    const today = new Date();
    const firstDay = new Date(today.getFullYear(), today.getMonth(), 1);
    const lastDay = new Date(today.getFullYear(), today.getMonth() + 1, 0);
    
    // Add empty cells for days before the first day of the month
    for (let i = 0; i < firstDay.getDay(); i++) {
      dates.push(null);
    }
    
    // Add all days of the month
    for (let day = 1; day <= lastDay.getDate(); day++) {
      dates.push(day);
    }
    
    return { days, dates };
  };

  const { days, dates } = getCalendarDays();

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* Header Greeting */}
      <Text style={styles.greeting}>{getGreeting()}, Erica!</Text>

      {/* Calendar Widget */}
      <View style={styles.calendarContainer}>
        <Text style={styles.calendarTitle}>{getCurrentDate()}</Text>
        
        {/* Days of Week */}
        <View style={styles.daysRow}>
          {days.map((day, index) => (
            <Text 
              key={index} 
              style={[
                styles.dayLabel, 
                index === 0 && styles.sundayLabel
              ]}
            >
              {day}
            </Text>
          ))}
        </View>

        {/* Calendar Dates */}
        <View style={styles.datesGrid}>
          {dates.map((date, index) => (
            <View key={index} style={styles.dateCell}>
              {date && (
                <>
                  <Text style={styles.dateText}>{date}</Text>
                  {date === 13 && <View style={styles.eventDot} />}
                </>
              )}
            </View>
          ))}
        </View>
      </View>

      {/* Sleep Summary Section */}
      <View style={styles.sleepSummaryContainer}>
        <Text style={styles.sectionTitle}>Based on last night's sleep</Text>
        
        <View style={styles.summaryWidgets}>
          {/* Sleep Quality Widget */}
          <View style={styles.widgetContainer}>
            <View style={styles.circularProgress}>
              <View style={styles.progressCircle}>
                <View style={[styles.progressSegment, styles.blueSegment]} />
                <View style={[styles.progressSegment, styles.orangeSegment]} />
                <View style={styles.progressCenter}>
                  <Text style={styles.progressText}>%</Text>
                </View>
              </View>
            </View>
            <Text style={styles.widgetLabel}>Sleep Quality</Text>
          </View>

          {/* Sleep Duration Widget */}
          <View style={styles.widgetContainer}>
            <View style={styles.circularProgress}>
              <View style={styles.progressCircle}>
                <View style={[styles.progressSegment, styles.redSegment]} />
                <View style={[styles.progressSegment, styles.orangeSegment]} />
                <View style={styles.progressCenter}>
                  <Text style={styles.progressText}>0</Text>
                </View>
              </View>
            </View>
            <Text style={styles.widgetLabel}>Hours Slept</Text>
          </View>
        </View>
      </View>

      {/* Weekly Sleep Trends Section */}
      <View style={styles.trendsContainer}>
        <Text style={styles.sectionTitle}>Your Weekly Sleep Trends</Text>
        
        {/* Bar Chart */}
        <View style={styles.chartContainer}>
          <View style={styles.chart}>
            {[
              { day: 'Mon', hours: 8, color: '#EF4444' },
              { day: 'Tue', hours: 6, color: '#F59E0B' },
              { day: 'Wed', hours: 7, color: '#3B82F6' },
              { day: 'Thu', hours: 5, color: '#10B981' },
            ].map((data, index) => (
              <View key={index} style={styles.barContainer}>
                <View 
                  style={[
                    styles.bar, 
                    { 
                      height: (data.hours / 8) * 120,
                      backgroundColor: data.color 
                    }
                  ]} 
                />
                <Text style={styles.barLabel}>{data.day}</Text>
              </View>
            ))}
          </View>
          <Text style={styles.chartDescription}>
            Sleep duration over the past week.
          </Text>
        </View>

        {/* Tips and Recommendations */}
        <View style={styles.recommendationsContainer}>
          <Text style={styles.recommendationsTitle}>Tips or Recommendations</Text>
          
          <View style={styles.recommendationsList}>
            {[
              "Try avoiding caffeine after 3 PM for better sleep!",
              "Try not to think negative often!",
              "Discipline yourself"
            ].map((tip, index) => (
              <View key={index} style={styles.recommendationCard}>
                <Text style={styles.recommendationText}>{tip}</Text>
              </View>
            ))}
          </View>
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
  greeting: {
    fontSize: 28,
    fontWeight: '700',
    color: '#1F2937',
    marginBottom: 24,
  },
  calendarContainer: {
    backgroundColor: '#F9FAFB',
    borderRadius: 16,
    padding: 20,
    marginBottom: 24,
  },
  calendarTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1F2937',
    textAlign: 'center',
    marginBottom: 16,
  },
  daysRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 12,
  },
  dayLabel: {
    fontSize: 14,
    fontWeight: '500',
    color: '#6B7280',
    width: 32,
    textAlign: 'center',
  },
  sundayLabel: {
    color: '#EF4444',
  },
  datesGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  dateCell: {
    width: 32,
    height: 32,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 8,
    position: 'relative',
  },
  dateText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#1F2937',
  },
  eventDot: {
    position: 'absolute',
    bottom: 2,
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: '#3B82F6',
  },
  sleepSummaryContainer: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#1F2937',
    marginBottom: 20,
  },
  summaryWidgets: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  widgetContainer: {
    alignItems: 'center',
  },
  circularProgress: {
    width: 80,
    height: 80,
    marginBottom: 12,
  },
  progressCircle: {
    width: 80,
    height: 80,
    borderRadius: 40,
    position: 'relative',
    backgroundColor: '#F3F4F6',
  },
  progressSegment: {
    position: 'absolute',
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  blueSegment: {
    backgroundColor: '#3B82F6',
    clipPath: 'polygon(50% 50%, 50% 0%, 0% 0%)',
  },
  orangeSegment: {
    backgroundColor: '#F97316',
    clipPath: 'polygon(50% 50%, 0% 0%, 0% 50%)',
  },
  redSegment: {
    backgroundColor: '#EF4444',
    clipPath: 'polygon(50% 50%, 50% 0%, 0% 0%)',
  },
  progressCenter: {
    position: 'absolute',
    top: 20,
    left: 20,
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  progressText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1F2937',
  },
  widgetLabel: {
    fontSize: 14,
    fontWeight: '500',
    color: '#6B7280',
    textAlign: 'center',
  },
  trendsContainer: {
    marginBottom: 24,
  },
  chartContainer: {
    marginBottom: 24,
  },
  chart: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'flex-end',
    height: 140,
    marginBottom: 16,
    paddingHorizontal: 20,
  },
  barContainer: {
    alignItems: 'center',
    flex: 1,
  },
  bar: {
    width: 30,
    borderRadius: 4,
    marginBottom: 8,
    minHeight: 20,
  },
  barLabel: {
    fontSize: 12,
    fontWeight: '500',
    color: '#6B7280',
  },
  chartDescription: {
    fontSize: 14,
    color: '#6B7280',
    textAlign: 'center',
  },
  recommendationsContainer: {
    marginBottom: 24,
  },
  recommendationsTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#1F2937',
    marginBottom: 16,
  },
  recommendationsList: {
    gap: 12,
  },
  recommendationCard: {
    backgroundColor: '#F9FAFB',
    padding: 16,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },
  recommendationText: {
    fontSize: 14,
    color: '#1F2937',
    lineHeight: 20,
  },
});
