import { Text, View } from "react-native";

interface Props {
  children: React.ReactNode;
}

const CustomView = ({ children }: Props) => {
  return (
    <View
      style={{
        alignItems: "center",
        justifyContent: "center",
        flex: 1,
      }}
    >
      {children}
    </View>
  );
};

export const Settings = () => {
  return (
    <CustomView>
      <Text>Settings</Text>
    </CustomView>
  );
};

export const Add = () => {
  return (
    <CustomView>
      <Text>Add</Text>
    </CustomView>
  );
};

export const Notification = () => {
  return (
    <CustomView>
      <Text>Notification</Text>
    </CustomView>
  );
};

export const Profile = () => {
  return (
    <CustomView>
      <Text>Profile</Text>
    </CustomView>
  );
};
