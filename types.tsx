/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import {
  CompositeScreenProps,
  NavigatorScreenParams,
} from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

export type Card = {
  _deckId: number;
  _id: number;
  front: string;
  back: string;
  days: number;
};

export type Deck = {
  _id: number;
  name: string;
  description: string;
  cards: Card[];
};

export type DecksProps = {
  deck: Deck;
  decks: Deck[];
  setDeck: React.Dispatch<React.SetStateAction<Deck>>;
};

export type DeckTabProps = {
  deck: Deck;
  setDeck: React.Dispatch<React.SetStateAction<Deck>>;
};

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

export type RootStackParamList = {
  Root: NavigatorScreenParams<RootTabParamList> | undefined;
  Modal: undefined;
  NotFound: undefined;
};

export type RootStackScreenProps<Screen extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, Screen>;

export type RootTabParamList = {
  Deck: { deck: Deck; setDeck(): void };
  Queue: Deck;
};

export type RootTabScreenProps<Screen extends keyof RootTabParamList> =
  CompositeScreenProps<
    BottomTabScreenProps<RootTabParamList, Screen>,
    NativeStackScreenProps<RootStackParamList>
  >;

export type System = {
  lastReviewed: number;
  now: number;
};

export type QueueProps = {
  queue: Card[];
};
