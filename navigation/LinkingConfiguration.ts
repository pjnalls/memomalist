/**
 * Learn more about deep linking with React Navigation
 * https://reactnavigation.org/docs/deep-linking
 * https://reactnavigation.org/docs/configuring-links
 */

import { LinkingOptions } from "@react-navigation/native";
import * as Linking from "expo-linking";

import { RootStackParamList } from "../types";

const linking: LinkingOptions<RootStackParamList> = {
  prefixes: [
    "memomalist://navigation/, https://snack.expo.dev/@pjnalls/github.com-pjnalls-memomalist/navigation/",
  ],
  config: {
    screens: {
      Root: {
        screens: {
          Deck: {
            screens: {
              DeckTabScreen: "one",
            },
          },
          Queue: {
            screens: {
              QueueTabScreen: "two",
            },
          },
        },
      },
      Modal: "modal",
      NotFound: "*",
    },
  },
};

export default linking;
