import React, { useEffect } from "react";
import {
  Image,
  StatusBar,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Dimensions,
} from "react-native";
//VER SI CON UN USE EFFECT EN COLORS SE ACTUALIZA EL COLOR SIN TENER QUE MOVER LA CARD
import { Avatar, Chip, IconButton } from "react-native-paper";
import Swiper from "react-native-deck-swiper";
import { Transitioning, Transition } from "react-native-reanimated";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { getMatchs } from "../../state/posibleMatch/thunks";
import { useSelector, useDispatch } from "react-redux";
import { setMatch } from "../../state/posibleMatch/actions";
import { useTheme } from "@react-navigation/native";
const { width } = Dimensions.get("window");
import {primaryGreen} from "../../utils/Colors"

const stackSize = 4;
const colors = {
  
  red: "#EC2379",
  blue: "#0070FF",
  gray: "#777777",
  white: "#ffffff",
  black: "#000000",
};
const ANIMATION_DURATION = 200;

const transition = (
  <Transition.Sequence>
    <Transition.Out
      type="slide-bottom"
      durationMs={ANIMATION_DURATION}
      interpolation="easeIn"
    />
    <Transition.Together>
      <Transition.In
        type="fade"
        durationMs={ANIMATION_DURATION}
        delayMs={ANIMATION_DURATION / 2}
      />
      <Transition.In
        type="slide-bottom"
        durationMs={ANIMATION_DURATION}
        delayMs={ANIMATION_DURATION / 2}
        interpolation="easeOut"
      />
    </Transition.Together>
  </Transition.Sequence>
);

const swiperRef = React.createRef();
const transitionRef = React.createRef();

export default function App({ navigation }) {
  const dispatch = useDispatch();
  const { colors } = useTheme();
  const matches = useSelector((state) => state.matchs.allMatches);
  const Smatches = useSelector((state) => state.matchs.singleMatch);
  const [index, setIndex] = React.useState(0);

  const onSwiped = () => {
    {transitionRef.current && transitionRef.current.animateNextTransition()}
    setIndex((index + 1) % matches.length);
    
  };

  useEffect(() => {
    dispatch(getMatchs());
  }, []);
  const Card = ({ card }) => {
    return (
      <View style={[styles.card,{backgroundColor:colors.background}]}>
        
        {card && (
          <View style={[{flex:1,alignItems:"center"}, {backgroundColor:colors.background}]}>
            <Text style={[styles.text, styles.price,{color:colors.text}]}>{card.firstName + " " + card.lastName}</Text>
            <Text style={{color:colors.text, marginBottom:5}} >{"Working since: " + matches[index].workingSince }</Text>
            <Text style={[styles.text, {color:colors.text}]}>{card.role.join(" | ")}</Text>
           
        
            <Avatar.Image size={150} source={{ uri: card.img }}  />
            <CardDetails   index={index} />
          </View>
        )}
      </View>
    );
  };

  const CardDetails = ({ index }) => (
    <View key={matches[index].id} style={{ flex:0.9, alignItems: "center", minWidth:"90%", marginBottom:10, justifyContent:"space-evenly" }}>

      <Text style={[styles.tecnoAndAreaText,{color:colors.text}]} >AREAS</Text>
      <View style={[styles.mapsContainer, {backgroundColor:colors.background}]}>
      {matches[index].areas.map((area, j) => {
            return (
              <View style={[styles.chipView, {backgroundColor:colors.background}]} key={j}>
                <Chip style={{height:35}} mode="contained" height={25} textStyle={styles.chipText}>
                  {area.areaName}
                </Chip>
              </View>
            );
          })}
      </View>
      <Text style={[styles.tecnoAndAreaText,{color:colors.text}]}>TECNOLOGIAS</Text>
      <View style={[styles.mapsContainer,{backgroundColor:colors.background}]}>
      {matches[index].technologies.map((tech, i) => {
            return (
              <View style={[styles.chipView, {backgroundColor:colors.background}]} key={i}>
                <Chip style={{height:35}} mode="contained" height={25} textStyle={styles.chipText}>
                  {tech.technologyName}
                </Chip>
              </View>
            );
          })}
      </View>
    </View>
  );

  const preSelectMatch = (currentMatch) => {
    dispatch(setMatch(currentMatch));
    navigation.navigate("MatchComparison");
  };

  return (
    
    
    <SafeAreaView style={[styles.container,{backgroundColor:colors.background}]}>
      <IconButton
                    icon="menu"
                    color={colors.icon}
                    size={35}
                    style={{position:"absolute", zIndex:2, marginTop:40,marginLeft:17}}
                    onPress={() =>(navigation.openDrawer && (navigation.openDrawer()))}
                  />
      
      <MaterialCommunityIcons
        name="crop-square"
        size={width}
        color={colors.blue}
        style={{
          opacity: 0.05,
          transform: [{ rotate: "45deg" }, { scale: 1.6 }],
          position: "absolute",
          left: -15,
          top: 30,
        }}
      />
      <StatusBar hidden={true} />
      <View style={styles.swiperContainer}>
        <Swiper
          onSwipedRight={(index) => preSelectMatch(matches[index])}
          onSwipedLeft={(i) => console.log(i)}
          ref={swiperRef}
          cards={matches}
          cardIndex={index}
          renderCard={(match) => <Card card={match} />}
          infinite
          backgroundColor={"transparent"}
          onSwiped={onSwiped}
          onTapCard={() => (swiperRef.current && (swiperRef.current.swipeLeft()))}
          cardVerticalMargin={50}
          stackSize={stackSize}
          stackScale={10}
          stackSeparation={14}
          animateOverlayLabelsOpacity
          animateCardOpacity
          disableTopSwipe
          disableBottomSwipe
          overlayLabels={{
            left: {
              title: "NO",
              style: {
                label: {
                  marginTop:-40,
                  marginRight:-40,
                  backgroundColor: "#ffc78f",
                  color: colors.white,
                  fontSize: 40,
                },
                wrapper: {
                  flexDirection: "column",
                  alignItems: "flex-end",
                  justifyContent: "flex-start",
                  marginTop: 20,
                  marginLeft: -20,
                },
              },
            },
            right: {
              title: "SI",
              style: {
                label: {
                  
                  backgroundColor: "#009387",
                  marginTop:-40,
                  marginLeft:-30,
                  color: colors.white,
                  fontSize: 40,
                },
                wrapper: {
                  
                  flexDirection: "column",
                  alignItems: "flex-start",
                  justifyContent: "flex-start",
                  marginTop: 20,
                  marginLeft: 20,
                },
              },
            },
          }}
        />
      </View>
      <View style={styles.bottomContainer}>
        <Transitioning.View
          ref={transitionRef}
          transition={transition}
          style={styles.bottomContainerMeta}
        ></Transitioning.View>
        <View style={styles.bottomContainerButtons}>
          <MaterialCommunityIcons.Button
            name="thumb-down"
            size={94}
            style={{marginTop:25}}
            backgroundColor="transparent"
            underlayColor="transparent"
            activeOpacity={0.3}
            color="#ffc78f"
            onPress={() => swiperRef.current.swipeLeft()}
          />
          <MaterialCommunityIcons.Button
            name="thumb-up"
            size={94}
            backgroundColor="transparent"
            underlayColor="transparent"
            activeOpacity={0.3}
            color="#009387"
            onPress={() => {
              preSelectMatch(matches[index]);
            }}
          />
        </View>
      </View>
    </SafeAreaView>
  
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  swiperContainer: {
    flex: 0.55,
  },
  bottomContainer: {
    flex: 0.45,
    justifyContent: "space-evenly",
  },
  bottomContainerMeta: { alignContent: "flex-end", alignItems: "center" },
  bottomContainerButtons: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  cardImage: {
    flex: 1,
    width: 380,
    marginBottom: 200,
    resizeMode: "contain",
    
   
  },
  card: {
    flex: 0.78,
    borderRadius: 8,
    shadowRadius: 25,
    shadowColor: colors.black,
    shadowOpacity: 0.9,
    shadowOffset: { width: 0, height: 0 },
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.white,
  },
  text: {
    textAlign: "center",
    paddingBottom:10,
    shadowOpacity:0.2,
    shadowOffset:{width:1,height:1}, 
    color:"gray",
    fontSize: 20,
    backgroundColor: "transparent",
  },
  done: {
    textAlign: "center",
    fontSize: 30,
    color: colors.white,
    backgroundColor: "transparent",
  },
  // text: { fontFamily: "Courier" },
  heading: { fontSize: 24, marginBottom: 10, color: colors.gray },
  price: {marginTop:30,  color: primaryGreen, fontSize: 32, fontWeight: "500" },
  chipView:{
    margin:2,
    // justifyContent:"center",
    // alignItems:"center"
  },
  mapsContainer:{
    flexDirection:"row", flexWrap:"wrap", width:"91%"
  },
  tecnoAndAreaText:{position:"relative",justifyContent:'flex-start', fontWeight:"bold", fontSize:20}
});
