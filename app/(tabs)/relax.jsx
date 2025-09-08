import React, { useState } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  TouchableOpacity,
  ScrollView 
} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function Relax() {
  const [currentScreen, setCurrentScreen] = useState('main');
  const [currentTrack, setCurrentTrack] = useState(null);
  const [currentBook, setCurrentBook] = useState(null);

  const relaxationTools = [
    {
      id: 'workout',
      title: 'Workout',
      icon: 'yoga',
      color: '#10B981',
      onPress: () => setCurrentScreen('workout')
    },
    {
      id: 'playlist',
      title: 'Playlist',
      icon: 'music',
      color: '#8B5CF6',
      onPress: () => setCurrentScreen('playlist')
    },
    {
      id: 'games',
      title: 'Games',
      icon: 'puzzle',
      color: '#F59E0B',
      onPress: () => setCurrentScreen('games')
    },
    {
      id: 'ebooks',
      title: 'E-Books',
      icon: 'book-open',
      color: '#3B82F6',
      onPress: () => setCurrentScreen('ebooks')
    }
  ];

  const musicCategories = [
    {
      id: 'rainy',
      title: 'Rainy',
      image: '🌧️',
      description: 'Gentle rain sounds',
      trackTitle: 'Rain Drops',
      albumArt: '🌿'
    },
    {
      id: 'ocean',
      title: 'Ocean waves',
      image: '🌊',
      description: 'Calming ocean waves',
      trackTitle: 'Ocean Waves',
      albumArt: '🌊'
    },
    {
      id: 'piano',
      title: 'Piano',
      image: '🎹',
      description: 'Soft piano melodies',
      trackTitle: 'Piano',
      albumArt: '🎹'
    },
    {
      id: 'waterfall',
      title: 'Water falls',
      image: '💧',
      description: 'Flowing water sounds',
      trackTitle: 'Water Falls',
      albumArt: '💧'
    }
  ];

  const gameOptions = [
    {
      id: 'wordsearch',
      title: 'Word Search',
      icon: 'magnify',
      color: '#3B82F6',
      onPress: () => console.log('Word Search pressed')
    },
    {
      id: 'sudoku',
      title: 'Sudoku',
      icon: 'grid',
      color: '#EF4444',
      onPress: () => console.log('Sudoku pressed')
    },
    {
      id: 'scramble',
      title: 'Scramble words',
      icon: 'format-letter-case',
      color: '#10B981',
      onPress: () => console.log('Scramble words pressed')
    },
    {
      id: 'findthings',
      title: 'Find Things',
      icon: 'magnify-scan',
      color: '#F59E0B',
      onPress: () => console.log('Find Things pressed')
    }
  ];

  const workoutActivities = [
    {
      id: 'yoga',
      title: 'Yoga',
      image: '🧘‍♀️',
      description: 'Gentle yoga poses for relaxation',
      onPress: () => console.log('Yoga pressed')
    },
    {
      id: 'workout',
      title: 'Workout',
      image: '💪',
      description: 'Light exercises to reduce stress',
      onPress: () => console.log('Workout pressed')
    }
  ];

  const ebooks = [
    {
      id: 'restful-nights-1',
      title: 'Restful Nights: Book 1',
      image: '🌙',
      description: 'A guide to peaceful sleep',
      content: {
        title: 'The Dreamer\'s Guide to Restful Nights: Book 1',
        chapter: 'Chapter 1: Whispering Woods',
        story: `In the heart of the Whispering Woods, where ancient trees stood as silent guardians of forgotten dreams, a weary wanderer named Elara sought refuge from the chaos of the waking world. The forest welcomed her with open arms, its gentle rustling leaves creating a symphony of peace that seemed to echo through her very soul.

As twilight painted the sky in hues of lavender and gold, Elara found herself drawn deeper into the woods, following a path that seemed to appear only for those who truly needed rest. The air was thick with the scent of pine and the promise of tranquility, and with each step, the weight of the day began to lift from her shoulders.

It was then that she encountered the Lumphin, a mystical creature of light and shadow that dwelled in the spaces between wakefulness and sleep. With eyes that held the wisdom of countless dreams and a presence that radiated calm, the Lumphin became her guide through the realm of restful slumber.

"Come, weary traveler," the Lumphin whispered in a voice like wind through leaves. "Let me show you the secret paths to peaceful nights, where dreams become your allies and sleep becomes your sanctuary."

And so began Elara's journey into the art of restful sleep, guided by the gentle wisdom of the forest and the magical teachings of her newfound companion. In the Whispering Woods, she would discover that true rest was not merely the absence of wakefulness, but a sacred space where the soul could heal and the mind could find its natural rhythm.`
      }
    },
    {
      id: 'tale-of-insomnia',
      title: 'A Tale of Insomnia',
      image: '📖',
      description: 'Stories for bedtime',
      content: {
        title: 'The Night Chronicles: A Tale of Insomnia',
        chapter: 'Chapter 1: Midnight Whispers',
        story: `Nora lay in her bed at midnight, staring at the ceiling as the world around her slept peacefully. The silence of the night was broken only by the soft ticking of her bedside clock and the distant hum of the city below. She had been counting sheep, reciting poetry, and even trying the breathing exercises her therapist had taught her, but sleep remained elusive.

"Why can't I just sleep like everyone else?" she whispered into the darkness, her voice barely audible above the sound of her own restless thoughts. The weight of exhaustion pressed down on her like a heavy blanket, yet her mind refused to quiet.

As the hours passed, Nora found herself caught in the familiar cycle of frustration and anxiety that had become her nightly companion. She tossed and turned, her mind racing with thoughts of the day that had passed and the challenges that lay ahead. The more she tried to force sleep, the further it seemed to drift away.

It was in this moment of quiet desperation that she heard it—a faint, gentle voice that seemed to come from nowhere and everywhere at once. "You're not alone in this," it whispered, carrying with it a sense of comfort and understanding that Nora had never experienced before.

The voice was soft, like the rustling of leaves in a gentle breeze, and it filled her with a strange sense of peace. For the first time in what felt like forever, Nora felt a glimmer of hope that perhaps, just perhaps, she might find the rest she so desperately needed.`
      }
    },
    {
      id: 'ripple-effect',
      title: 'The Ripple Effect',
      image: '💧',
      description: 'Mindfulness and meditation',
      content: {
        title: 'The Ripple Effect',
        chapter: 'Chapter 1: The Pebble and the Pond',
        story: `In a small village nestled between rolling hills and a crystal-clear river, there lived a young boy named Arin. Every morning, before the sun had fully risen, Arin would make his way to the riverbank with a small collection of smooth pebbles he had gathered from the shore.

He would stand at the water's edge, carefully selecting each pebble, feeling its weight and texture in his palm before tossing it into the flowing water. As each pebble broke the surface, it created a series of ripples that spread outward in perfect circles, growing larger and larger until they touched the opposite bank.

Arin's grandfather, a wise old man with kind eyes and weathered hands, would often join him at the riverbank. "Do you see how each pebble creates ripples that reach far beyond where it first touched the water?" he would ask, his voice carrying the wisdom of many years.

"Yes, Grandfather," Arin would reply, watching as the ripples continued to spread across the water's surface.

"That is how life works, my child," his grandfather would say with a gentle smile. "Every action we take, no matter how small, creates ripples that touch the lives of others in ways we may never fully understand. A kind word, a helping hand, or even a simple smile can create ripples of joy and hope that spread far beyond what we can see."

As Arin grew older, he began to understand the truth in his grandfather's words. He noticed how a simple act of kindness could brighten someone's day, and how that person might then pass that kindness on to others, creating an endless chain of positive ripples throughout the village.

One day, Arin met a young girl named Mira who had just moved to the village. She was shy and uncertain, standing alone in the schoolyard while other children played together. Remembering his grandfather's lesson about ripples, Arin approached her with a warm smile and offered to show her around the village.

That simple act of kindness created ripples that would change both their lives forever.`
      }
    },
    {
      id: 'restful-nights-2',
      title: 'Restful Nights:',
      image: '🌙',
      description: 'Advanced sleep techniques',
      content: {
        title: 'The Dreamer\'s Guide to Restful Nights: Book 2',
        chapter: 'Chapter 1: The Art of Letting Go',
        story: `In the quiet hours before dawn, when the world exists in that liminal space between night and day, there exists a sacred practice known only to those who have learned to embrace the art of letting go. This is the story of how one woman discovered the power of surrender in the face of sleeplessness.

Sarah had spent years fighting against her insomnia, treating it like an enemy to be conquered rather than a teacher to be understood. She had tried every technique, every remedy, every piece of advice that well-meaning friends and family had offered. Yet sleep remained as elusive as a shadow in the moonlight.

It was during a particularly difficult night, when frustration had reached its peak and exhaustion had become her constant companion, that Sarah had a profound realization. She was trying so hard to control something that was, by its very nature, beyond her control. Sleep was not something she could force or demand—it was a gift that came when she was ready to receive it.

With this understanding, Sarah began to practice the art of letting go. Instead of fighting against her wakefulness, she began to embrace it. She would lie in bed and simply be present with whatever thoughts or feelings arose, without judgment or resistance. She learned to breathe into the discomfort, to welcome the restlessness as a part of her human experience.

Slowly, almost imperceptibly, something began to shift. The more Sarah practiced acceptance, the more peaceful her nights became. She discovered that by letting go of the need to control her sleep, she had actually created the perfect conditions for rest to naturally arise.

This is the story of how one woman learned that sometimes the greatest strength lies not in fighting against what is, but in learning to flow with the natural rhythms of life.`
      }
    }
  ];

  const renderMainScreen = () => (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Feeling Restless?</Text>
        <Text style={styles.headerSubtitle}>Select a tool to help you relax</Text>
      </View>

      {/* Relaxation Tools Grid */}
      <View style={styles.toolsGrid}>
        {relaxationTools.map((tool) => (
          <TouchableOpacity
            key={tool.id}
            style={styles.toolCard}
            onPress={tool.onPress}
          >
            <View style={[styles.toolIcon, { backgroundColor: tool.color }]}>
              <MaterialCommunityIcons 
                name={tool.icon} 
                size={32} 
                color="#fff" 
              />
            </View>
            <Text style={styles.toolTitle}>{tool.title}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );

  const renderPlaylistScreen = () => (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Playlist</Text>
        <Text style={styles.headerSubtitle}>Listen music to help you relax</Text>
      </View>

      {/* Back Button */}
      <TouchableOpacity 
        style={styles.backButton}
        onPress={() => setCurrentScreen('main')}
      >
        <MaterialCommunityIcons name="arrow-left" size={24} color="#8B5CF6" />
        <Text style={styles.backButtonText}>Back</Text>
      </TouchableOpacity>

      {/* New Releases Section */}
      <Text style={styles.sectionTitle}>New releases</Text>

      {/* Music Categories Grid */}
      <View style={styles.musicGrid}>
        {musicCategories.map((category) => (
          <TouchableOpacity
            key={category.id}
            style={styles.musicCard}
            onPress={() => {
              setCurrentTrack(category);
              setCurrentScreen('nowplaying');
            }}
          >
            <View style={styles.musicImage}>
              <Text style={styles.musicEmoji}>{category.image}</Text>
            </View>
            <Text style={styles.musicTitle}>{category.title}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );

  const renderGamesScreen = () => (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Games</Text>
        <Text style={styles.headerSubtitle}>Select a game to help you relax</Text>
      </View>

      {/* Back Button */}
      <TouchableOpacity 
        style={styles.backButton}
        onPress={() => setCurrentScreen('main')}
      >
        <MaterialCommunityIcons name="arrow-left" size={24} color="#8B5CF6" />
        <Text style={styles.backButtonText}>Back</Text>
      </TouchableOpacity>

      {/* Choose to Play Section */}
      <Text style={styles.sectionTitle}>Choose to Play</Text>

      {/* Games Grid */}
      <View style={styles.gamesGrid}>
        {gameOptions.map((game) => (
          <TouchableOpacity
            key={game.id}
            style={styles.gameCard}
            onPress={game.onPress}
          >
            <View style={[styles.gameIcon, { backgroundColor: game.color }]}>
              <MaterialCommunityIcons 
                name={game.icon} 
                size={32} 
                color="#fff" 
              />
            </View>
            <Text style={styles.gameTitle}>{game.title}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );

  const renderWorkoutScreen = () => (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Workout Activities</Text>
        <Text style={styles.headerSubtitle}>Workout to help you relax</Text>
      </View>

      {/* Back Button */}
      <TouchableOpacity 
        style={styles.backButton}
        onPress={() => setCurrentScreen('main')}
      >
        <MaterialCommunityIcons name="arrow-left" size={24} color="#8B5CF6" />
        <Text style={styles.backButtonText}>Back</Text>
      </TouchableOpacity>

      {/* Workout Activities */}
      <View style={styles.workoutContainer}>
        {workoutActivities.map((activity) => (
          <TouchableOpacity
            key={activity.id}
            style={styles.workoutCard}
            onPress={activity.onPress}
          >
            <View style={styles.workoutImage}>
              <Text style={styles.workoutEmoji}>{activity.image}</Text>
            </View>
            <Text style={styles.workoutTitle}>{activity.title}</Text>
          </TouchableOpacity>
        ))}
    </View>
    </ScrollView>
  );

  const renderNowPlayingScreen = () => {
    const track = currentTrack || musicCategories[0]; // Default to first track if none selected
    
  return (
      <View style={styles.nowPlayingContainer}>
        {/* Header */}
        <View style={styles.nowPlayingHeader}>
          <TouchableOpacity 
            style={styles.headerButton}
            onPress={() => setCurrentScreen('playlist')}
          >
            <MaterialCommunityIcons name="arrow-left" size={24} color="#1F2937" />
          </TouchableOpacity>
          <Text style={styles.nowPlayingTitle}>Now Playing</Text>
          <TouchableOpacity style={styles.headerButton}>
            <MaterialCommunityIcons name="menu" size={24} color="#1F2937" />
          </TouchableOpacity>
        </View>

        {/* Album Art */}
        <View style={styles.albumArtContainer}>
          <View style={styles.albumArt}>
            <Text style={styles.albumArtEmoji}>{track.albumArt}</Text>
          </View>
        </View>

        {/* Track Title */}
        <Text style={styles.trackTitle}>{track.trackTitle}</Text>

        {/* Like and Share */}
        <View style={styles.likeShareContainer}>
          <TouchableOpacity style={styles.likeButton}>
            <MaterialCommunityIcons name="heart" size={24} color="#EF4444" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.shareButton}>
            <MaterialCommunityIcons name="share" size={24} color="#6B7280" />
          </TouchableOpacity>
        </View>

        {/* Progress Bar */}
        <View style={styles.progressContainer}>
          <View style={styles.progressBar}>
            <View style={styles.progressFill} />
          </View>
        </View>

        {/* Player Controls */}
        <View style={styles.playerControls}>
          <TouchableOpacity style={styles.controlButton}>
            <MaterialCommunityIcons name="shuffle" size={24} color="#6B7280" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.controlButton}>
            <MaterialCommunityIcons name="skip-previous" size={32} color="#1F2937" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.playButton}>
            <MaterialCommunityIcons name="pause" size={32} color="#fff" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.controlButton}>
            <MaterialCommunityIcons name="skip-next" size={32} color="#1F2937" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.controlButton}>
            <MaterialCommunityIcons name="repeat" size={24} color="#6B7280" />
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  const renderEBooksScreen = () => (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>E-Books</Text>
        <Text style={styles.headerSubtitle}>listen and read to help you relax</Text>
      </View>

      {/* Back Button */}
      <TouchableOpacity 
        style={styles.backButton}
        onPress={() => setCurrentScreen('main')}
      >
        <MaterialCommunityIcons name="arrow-left" size={24} color="#8B5CF6" />
        <Text style={styles.backButtonText}>Back</Text>
      </TouchableOpacity>

      {/* New Releases Section */}
      <Text style={styles.sectionTitle}>New releases</Text>

      {/* Books Grid */}
      <View style={styles.booksGrid}>
        {ebooks.map((book) => (
          <TouchableOpacity
            key={book.id}
            style={styles.bookCard}
            onPress={() => {
              setCurrentBook(book);
              setCurrentScreen('ebookreader');
            }}
          >
            <View style={styles.bookCover}>
              <Text style={styles.bookEmoji}>{book.image}</Text>
            </View>
            <Text style={styles.bookTitle}>{book.title}</Text>
          </TouchableOpacity>
        ))}
    </View>
    </ScrollView>
  );

  const renderEBookReaderScreen = () => {
    const book = currentBook || ebooks[0]; // Default to first book if none selected
    
    return (
      <View style={styles.readerContainer}>
        {/* Header */}
        <View style={styles.readerHeader}>
          <TouchableOpacity 
            style={styles.headerButton}
            onPress={() => setCurrentScreen('ebooks')}
          >
            <MaterialCommunityIcons name="arrow-left" size={24} color="#1F2937" />
          </TouchableOpacity>
          <Text style={styles.readerTitle}>{book.title}</Text>
          <TouchableOpacity style={styles.headerButton}>
            <MaterialCommunityIcons name="menu" size={24} color="#1F2937" />
          </TouchableOpacity>
        </View>

        {/* Content */}
        <ScrollView style={styles.readerContent} showsVerticalScrollIndicator={false}>
          <Text style={styles.bookMainTitle}>{book.content.title}</Text>
          
          <Text style={styles.chapterTitle}>{book.content.chapter}</Text>
          
          {book.content.story.split('\n\n').map((paragraph, index) => (
            <Text key={index} style={styles.storyText}>
              {paragraph}
            </Text>
          ))}
        </ScrollView>
      </View>
    );
  };

  const renderCurrentScreen = () => {
    switch (currentScreen) {
      case 'main':
        return renderMainScreen();
      case 'playlist':
        return renderPlaylistScreen();
      case 'games':
        return renderGamesScreen();
      case 'workout':
        return renderWorkoutScreen();
      case 'nowplaying':
        return renderNowPlayingScreen();
      case 'ebooks':
        return renderEBooksScreen();
      case 'ebookreader':
        return renderEBookReaderScreen();
      default:
        return renderMainScreen();
    }
  };

  return renderCurrentScreen();
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
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: '700',
    color: '#1F2937',
    marginBottom: 8,
  },
  headerSubtitle: {
    fontSize: 16,
    color: '#6B7280',
    fontWeight: '400',
  },
  toolsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    gap: 20,
  },
  toolCard: {
    width: '47%',
    aspectRatio: 1,
    backgroundColor: '#F9FAFB',
    borderRadius: 16,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },
  toolIcon: {
    width: 60,
    height: 60,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 12,
  },
  toolTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1F2937',
    textAlign: 'center',
  },
  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 24,
  },
  backButtonText: {
    fontSize: 16,
    color: '#8B5CF6',
    fontWeight: '500',
    marginLeft: 8,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#1F2937',
    marginBottom: 20,
  },
  musicGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    gap: 16,
  },
  musicCard: {
    width: '47%',
    backgroundColor: '#F9FAFB',
    borderRadius: 12,
    padding: 16,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },
  musicImage: {
    width: 80,
    height: 80,
    borderRadius: 12,
    backgroundColor: '#E5E7EB',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 12,
  },
  musicEmoji: {
    fontSize: 32,
  },
  musicTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: '#1F2937',
    textAlign: 'center',
  },
  gamesGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    gap: 20,
  },
  gameCard: {
    width: '47%',
    aspectRatio: 1,
    backgroundColor: '#F9FAFB',
    borderRadius: 16,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },
  gameIcon: {
    width: 60,
    height: 60,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 12,
  },
  gameTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1F2937',
    textAlign: 'center',
  },
  workoutContainer: {
    gap: 16,
  },
  workoutCard: {
    backgroundColor: '#F9FAFB',
    borderRadius: 16,
    padding: 20,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },
  workoutImage: {
    width: 120,
    height: 120,
    borderRadius: 12,
    backgroundColor: '#E5E7EB',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
  },
  workoutEmoji: {
    fontSize: 48,
  },
  workoutTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1F2937',
    textAlign: 'center',
  },
  nowPlayingContainer: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 60,
  },
  nowPlayingHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 24,
    marginBottom: 40,
  },
  headerButton: {
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  nowPlayingTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1F2937',
  },
  albumArtContainer: {
    alignItems: 'center',
    marginBottom: 32,
  },
  albumArt: {
    width: 280,
    height: 280,
    borderRadius: 20,
    backgroundColor: '#E5E7EB',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 8,
  },
  albumArtEmoji: {
    fontSize: 120,
  },
  trackTitle: {
    fontSize: 24,
    fontWeight: '700',
    color: '#1F2937',
    textAlign: 'center',
    marginBottom: 24,
  },
  likeShareContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 32,
    gap: 40,
  },
  likeButton: {
    padding: 8,
  },
  shareButton: {
    padding: 8,
  },
  progressContainer: {
    paddingHorizontal: 24,
    marginBottom: 40,
  },
  progressBar: {
    height: 4,
    backgroundColor: '#E5E7EB',
    borderRadius: 2,
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    width: '30%',
    backgroundColor: '#EF4444',
    borderRadius: 2,
  },
  playerControls: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 24,
    gap: 20,
  },
  controlButton: {
    width: 48,
    height: 48,
    alignItems: 'center',
    justifyContent: 'center',
  },
  playButton: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: '#8B5CF6',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#8B5CF6',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
  },
  booksGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    gap: 16,
  },
  bookCard: {
    width: '47%',
    backgroundColor: '#F9FAFB',
    borderRadius: 12,
    padding: 16,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },
  bookCover: {
    width: 100,
    height: 120,
    borderRadius: 8,
    backgroundColor: '#E5E7EB',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 12,
  },
  bookEmoji: {
    fontSize: 40,
  },
  bookTitle: {
    fontSize: 12,
    fontWeight: '600',
    color: '#1F2937',
    textAlign: 'center',
    lineHeight: 16,
  },
  readerContainer: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 60,
  },
  readerHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 24,
    marginBottom: 20,
  },
  readerTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1F2937',
    flex: 1,
    textAlign: 'center',
  },
  readerContent: {
    flex: 1,
    paddingHorizontal: 24,
  },
  bookMainTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#1F2937',
    marginBottom: 16,
    lineHeight: 28,
  },
  chapterTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#8B5CF6',
    marginBottom: 24,
  },
  storyText: {
    fontSize: 16,
    color: '#1F2937',
    lineHeight: 24,
    marginBottom: 16,
    textAlign: 'justify',
  },
});
