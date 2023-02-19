/**
 * Learn more about deep linking with React Navigation
 * https://reactnavigation.org/docs/deep-linking
 * https://reactnavigation.org/docs/configuring-links
 */

import { LinkingOptions } from "@react-navigation/native";

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
              DeckTabScreen: "*",
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
    },
  },
};

export default linking;
