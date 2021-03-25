import React, { useEffect, useRef, useState } from 'react';
import { View, StyleSheet, Dimensions, Animated } from 'react-native';
import Tab from './Tab';
import { LinearGradient } from 'expo-linear-gradient';

const { width } = Dimensions.get('screen');

const TabBar = ({ state, navigation }) => {
  const [selected, setSelected] = useState('Home');
  const { routes } = state;

  const handlePress = (activeTab, index) => {
    if (state.index !== index) {
      setSelected(activeTab);
      navigation.navigate(activeTab);
    }
  };

  return (
    <View style={styles.wrapper}>
      <LinearGradient
        // Background Linear Gradient
        colors={["#ffc78f", '#ff9c38' ]}
        style={styles.background}
      />
        {routes.map((route, index) => (
          <Tab
            tab={route}
            onPress={() => handlePress(route.name, index)}
            key={route.key}
          />
        ))}
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    position: 'absolute',
    bottom: 0,
    height: 90,
    width,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 25,
    height: 100,
  },
  
});

export default TabBar;