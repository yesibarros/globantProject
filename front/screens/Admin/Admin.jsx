import * as React from 'react';
import { List } from 'react-native-paper';

const MyComponent = () => {
  const [expanded, setExpanded] = React.useState(true);

  const handlePress = () => setExpanded(!expanded);

  return (
    <List.Section title="Panel de administración">
      <List.Accordion
        title="Areas"
        left={props => <List.Icon {...props} icon="laptop" />}>
        <List.Item title="Alta" />
        <List.Item title="Modificación" />
        <List.Item title="Baja" />
      </List.Accordion>

      <List.Accordion
        title="Tecnologías"
        left={props => <List.Icon {...props} icon="wrench-outline" />}>
        <List.Item title="Alta" />
        <List.Item title="Modificación" />
        <List.Item title="Baja" />
      </List.Accordion>

      <List.Accordion
        title="Países"
        left={props => <List.Icon {...props} icon="flag-variant-outline" />}>
        <List.Item title="Alta" />
        <List.Item title="Modificación" />
        <List.Item title="Baja" />
      </List.Accordion>

      <List.Accordion
        title="Locaciones"
        left={props => <List.Icon {...props} icon="map-marker" />}>
        <List.Item title="Alta" />
        <List.Item title="Modificación" />
        <List.Item title="Baja" />
      </List.Accordion>
    </List.Section>
  );
};

export default MyComponent;