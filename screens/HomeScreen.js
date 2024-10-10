import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      {/* Top Bar */}
      <View style={styles.header}>
        <TouchableOpacity>
          <Icon name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.title}>Recordings</Text>
        <TouchableOpacity>
          <Icon name="add" size={24} color="black" />
        </TouchableOpacity>
      </View>

      {/* Audio Levels */}
      <View style={styles.audioContainer}>
        <View style={styles.volumeBar}>
          <Text style={styles.volumeText}>75</Text>
          <Text style={styles.volumeText}>50</Text>
          <Text style={styles.volumeText}>25</Text>
          <Text style={styles.volumeText}>00</Text>
        </View>

        {/* Progress Bar */}
        <View style={styles.progressContainer}>
          <View style={styles.progressBar}>
            <View style={styles.progress} />
          </View>
          <View style={styles.timeContainer}>
            <Text style={styles.time}>00:00</Text>
            <Text style={styles.time}>01:00</Text>
          </View>
        </View>
      </View>

      {/* Control Buttons */}
      <View style={styles.controlsContainer}>
        <TouchableOpacity style={styles.cancelButton}>
          <Icon name="close" size={32} color="white" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.pauseButton}>
          <Icon name="pause" size={32} color="white" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.checkButton}>
          <Icon name="checkmark" size={32} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#450000',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 16,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
  audioContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  volumeBar: {
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '60%',
  },
  volumeText: {
    color: 'white',
    fontSize: 16,
  },
  progressContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  progressBar: {
    height: 2,
    width: '80%',
    backgroundColor: 'white',
    borderRadius: 4,
    marginBottom: 8,
  },
  progress: {
    height: '100%',
    width: '20%',
    backgroundColor: 'red',
  },
  timeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
  },
  time: {
    color: 'white',
    fontSize: 16,
  },
  controlsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 20,
  },
  cancelButton: {
    backgroundColor: 'rgba(255, 0, 0, 0.6)',
    padding: 20,
    borderRadius: 50,
  },
  pauseButton: {
    backgroundColor: 'red',
    padding: 20,
    borderRadius: 50,
  },
  checkButton: {
    backgroundColor: 'rgba(0, 255, 0, 0.6)',
    padding: 20,
    borderRadius: 50,
  },
});

export default HomeScreen;
