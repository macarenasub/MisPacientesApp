import React, { useState } from "react";
import {
  ActivityIndicator,
  Keyboard,
  KeyboardAvoidingView,
  StyleSheet,
} from "react-native";

import { Button, Block, Input, Text } from "../components";
import { theme } from "../constants";

const VALID_EMAIL = "macarena@mispacientes.com.ar";
const VALID_PASSWORD = "mispacientes";

const Login = (props) => {
  const [state, setState] = useState({
    email: VALID_EMAIL,
    password: VALID_PASSWORD,
    errors: [],
    loading: false,
  });

  const { navigation } = props;
  const { loading, errors } = state;
  const hasErrors = (key) => (errors.includes(key) ? styles.hasErrors : null);

  return (
    <KeyboardAvoidingView style={styles.login} behavior="height">
      <Block padding={[0, theme.sizes.base * 2]}>
        <Text h1 bold>
          Iniciar Sesión
        </Text>
        <Block middle>
          <Input
            label="Email"
            error={hasErrors("email")}
            style={[styles.input, hasErrors("email")]}
            defaultValue={state.email}
            onChangeText={(text) => setState({ ...state, email: text })}
          />
          <Input
            secure
            label="Contraseña"
            error={hasErrors("password")}
            style={[styles.input, hasErrors("password")]}
            defaultValue={state.password}
            onChangeText={(text) => setState({ ...state, password: text })}
          />
          <Button gradient onPress={() => this.handleLogin()}>
            {loading ? (
              <ActivityIndicator size="small" color="white" />
            ) : (
              <Text bold white center>
                Iniciar Sesión
              </Text>
            )}
          </Button>

          <Button onPress={() => navigation.navigate("Register")}>
            <Text
              gray
              caption
              center
              style={{ textDecorationLine: "underline" }}
            >
              No tenes cuenta? Registrate
            </Text>
          </Button>
        </Block>
      </Block>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  login: {
    flex: 1,
    justifyContent: "center",
  },
  input: {
    borderRadius: 0,
    borderWidth: 0,
    borderBottomColor: theme.colors.gray2,
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  hasErrors: {
    borderBottomColor: theme.colors.accent,
  },
});

export default Login;
