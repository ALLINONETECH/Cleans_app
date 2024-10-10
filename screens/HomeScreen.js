import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';

const HomeScreen = () => {
  return (
    <LinearGradient
      colors={['#50020A', '#000000']}
      style={styles.container}
    >

      <View style={styles.header}>
        <TouchableOpacity>
          <Icon name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.title}>Recordings</Text>
        <TouchableOpacity>
          <Icon name="add" size={24} color="black"  />
        </TouchableOpacity>
      </View>


      <View style={styles.audioContainer}>
        <View style={styles.volumeBarContainer}>
          <View style={styles.volumeBar}>
            <Text style={styles.volumeText}>75</Text>
            <Text style={styles.volumeText}>50</Text>
            <Text style={styles.volumeText}>25</Text>
            <Text style={styles.volumeText}>00</Text>
          </View>
          <View style={styles.verticalLine} />
        </View>
      </View>


      <View style={styles.progressContainer}>
        <View style={styles.progressBar}>
          <View style={styles.progress}>

            <View style={styles.progressThumb} />
          </View>
        </View>
        <View style={styles.timeContainer}>
          <Text style={styles.time}>00:00</Text>
          <Text style={styles.time}>01:00</Text>
        </View>
      </View>

      {/* Control Buttons */}
      <View style={styles.controlsContainer}>
        <TouchableOpacity style={styles.cancelButton}>
          <Icon name="close" size={28} color="white" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.pauseButton}>
          <Icon name="pause" size={35} color="white" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.checkButton}>
          <Icon name="checkmark" size={28} color="white" />
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 40, // Added margin on top for the header
    padding: 12,
    backgroundColor: '#fff',
    opacity: 0.8,
    paddingHorizontal: 20
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
  audioContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 20, // Adjusted for positioning
  },
  volumeBarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  volumeBar: {
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    marginLeft: 20, // Margin added to the left
    height: 220,
  },
  volumeText: {
    color: 'rgba(255, 255, 255, 1)',
    fontSize: 10,
    marginBottom: 10, // Reduced gap between text items
  },
  verticalLine: {
    width: 0.3,
    height: 200,
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    marginLeft: 10, // Adjust line position
  },
  progressContainer: {
    marginTop: 20, // Added margin to separate from audio section
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  progressBar: {
    height: 0.4,
    width: '85%',
    backgroundColor: 'rgba(255, 255, 255, 0.6)',
    borderRadius: 0.5,
    marginBottom: 15,
    position: 'relative', // To position the thumb within the progress
  },
  progress: {
    height: '100%',
    width: '10%', // Assuming 20% progress is shown
    backgroundColor: 'brown',
    borderRadius: 2,
    position: 'relative',
  },
  progressThumb: {
    position: 'absolute',
    right: 0, // Align the thumb at the end of the progress bar
    width: 12,
    height: 12,
    backgroundColor: 'brown',
    borderRadius: 6, // Makes the circle
    top: -5.5, // Center the thumb with the progress bar
  },
  timeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
  },
  time: {
    color: 'white',
    fontSize: 10,
  },
  controlsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 20,
    marginTop: 30, // Positioned controls closer to the center
    marginHorizontal: 40
  },
  cancelButton: {
    backgroundColor: '#50020A',
    padding: 5,
    borderRadius: 30,
    opacity: 0.8
  },
  pauseButton: {
    backgroundColor: 'brown',
    padding: 8,
    borderRadius: 50,
  },
  checkButton: {
    backgroundColor: '#50020A',
    padding: 5,
    borderRadius: 30,
    opacity: 0.8
  },
});

export default HomeScreen;
