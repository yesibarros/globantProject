//REACT
import * as React from "react";

//REACT-NATIVE-PAPER
import { List } from "react-native-paper";
import { useTheme } from "react-native-paper";

//REACT-NATIVE
import { View, ScrollView, Text } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

//ROUTES
import TabBar from "../../routes/Tab/TabBar";

//SCREEN
import AltaModal from "./Alta/Alta";
import ModificacionModal from "./Modificacion/Modificacion";
import BorrarModal from "./Baja/Baja";

//STYLE
import styles from "./adminStyle";

//SCREEN
import Header from "../header/Header";

const MyComponent = ({ navigation }) => {
  const [name, setName] = React.useState("");
  const [viewModal, setViewModal] = React.useState(false);
  const [viewModModal, setViewModModal] = React.useState(false);
  const [viewDelModal, setViewDelModal] = React.useState(false);
  const { colors } = useTheme();
  return (
    <View style={{ backgroundColor: "#009387" }}>
      <Header navigation={navigation} />
      <View
        style={[styles.listContainer, { backgroundColor: colors.background }]}
      >
        <List.Section style={styles.list}>
          <Text
            style={{
              textAlign: "center",
              fontSize: hp("4%"),
              shadowOpacity: 0.2,
              elevation: 3,
              fontWeight: "bold",
              marginTop: hp("-3%"),
              paddingBottom: hp("5%"),
              color: colors.text,
            }}
          >
            Panel de administración
          </Text>
          <ScrollView>
            <List.Accordion
              title="Areas"
              left={(props) => <List.Icon {...props} icon="laptop" />}
            >
              <List.Item
                title="Alta"
                onPress={() => {
                  setName("area");
                  setViewModal(true);
                }}
              />
              <List.Item
                title="Modificación"
                onPress={() => {
                  setName("area");
                  setViewModModal(true);
                }}
              />
              <List.Item
                title="Baja"
                onPress={() => {
                  setName("area");
                  setViewDelModal(true);
                }}
              />
            </List.Accordion>

            <List.Accordion
              title="Tecnologías"
              left={(props) => <List.Icon {...props} icon="wrench-outline" />}
            >
              <List.Item
                title="Alta"
                onPress={() => {
                  setName("tecnologia");
                  setViewModal(true);
                }}
              />
              <List.Item
                title="Modificación"
                onPress={() => {
                  setName("tecnologia");
                  setViewModModal(true);
                }}
              />
              <List.Item
                title="Baja"
                onPress={() => {
                  setName("tecnologia");
                  setViewDelModal(true);
                }}
              />
            </List.Accordion>

            <List.Accordion
              title="Países"
              left={(props) => (
                <List.Icon {...props} icon="flag-variant-outline" />
              )}
            >
              <List.Item
                title="Alta"
                onPress={() => {
                  setName("país");
                  setViewModal(true);
                }}
              />
              <List.Item
                title="Modificación"
                onPress={() => {
                  setName("país");
                  setViewModModal(true);
                }}
              />
              <List.Item
                title="Baja"
                onPress={() => {
                  setName("país");
                  setViewDelModal(true);
                }}
              />
            </List.Accordion>

            <List.Accordion
              title="Locaciones"
              left={(props) => <List.Icon {...props} icon="map-marker" />}
            >
              <List.Item
                title="Alta"
                onPress={() => {
                  setName("locación");
                  setViewModal(true);
                }}
              />
              <List.Item
                title="Modificación"
                onPress={() => {
                  setName("locación");
                  setViewModModal(true);
                }}
              />
              <List.Item
                title="Baja"
                onPress={() => {
                  setName("locación");
                  setViewDelModal(true);
                }}
              />
            </List.Accordion>
          </ScrollView>
        </List.Section>
        {viewModal ? (
          <AltaModal
            viewModal={viewModal}
            nombre={name}
            setViewModal={setViewModal}
          />
        ) : null}
        {viewModModal ? (
          <ModificacionModal
            viewModModal={viewModModal}
            nombre={name}
            setViewModModal={setViewModModal}
          />
        ) : null}
        {viewDelModal ? (
          <BorrarModal
            viewDelModal={viewDelModal}
            nombre={name}
            setViewDelModal={setViewDelModal}
          />
        ) : null}

        <TabBar navigation={navigation} />
      </View>
    </View>
  );
};

export default MyComponent;
