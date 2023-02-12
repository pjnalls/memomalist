import { useState } from "react";
import { Button, StyleSheet } from "react-native";

import { ONE_DAY_IN_MILLISECONDS, system } from "../data/Queue.data";
import { Card } from "../types";
import { Text, View } from "./Themed";

export default function Review(props: { queue: Card[] }) {
  const { queue } = props;
  const [display, setDisplay] = useState(false);
  const [currentCard, setCurrentCard] = useState(queue.pop());

  if (currentCard && currentCard.days <= 0) {
    const { front, back } = currentCard;
    return (
      <View>
        <View style={styles.getStartedContainer}>
          <Text
            style={styles.getStartedText}
            lightColor="rgba(0,0,0,0.8)"
            darkColor="rgba(255,255,255,0.8)"
          >
            {front}
          </Text>
        </View>
        <View style={styles.getStartedContainer}>
          {display ? (
            <>
              <Text
                style={styles.getStartedText}
                lightColor="rgba(0,0,0,0.8)"
                darkColor="rgba(255,255,255,0.8)"
              >
                {back}
              </Text>
              <Button
                title="Easy"
                onPress={() =>
                  review(5, currentCard._id, queue, setCurrentCard, setDisplay)
                }
              />
              <Button
                title="Okay"
                onPress={() =>
                  review(3, currentCard._id, queue, setCurrentCard, setDisplay)
                }
              />
              <Button
                title="Hard"
                onPress={() =>
                  review(1, currentCard._id, queue, setCurrentCard, setDisplay)
                }
              />
              <Button
                title="Again"
                onPress={() =>
                  review(0, currentCard._id, queue, setCurrentCard, setDisplay)
                }
              />
            </>
          ) : (
            <Button title="Answer" onPress={() => setDisplay(true)} />
          )}
        </View>
      </View>
    );
  } else {
    return (
      <View>
        <View style={styles.getStartedContainer}>
          <Text
            style={styles.getStartedText}
            lightColor="rgba(0,0,0,0.8)"
            darkColor="rgba(255,255,255,0.8)"
          >
            No reviews needed now for this deck.
          </Text>
        </View>
      </View>
    );
  }
}

const review = (
  n: number,
  currentIndex: number,
  queue: Card[],
  setCurrentCard: any,
  setDisplay: any
) => {
  const days = updateLastReviewedDate(currentIndex, queue);
  if (days <= 0) {
    setDays(n, currentIndex, queue);
    setDisplay(false);
    setCurrentCard(() => queue.pop());
  }
};

const setDays = (m: number, i: number, queue: Card[]) =>
  (queue[i].days *= Math.round(fibonacci(m)) * 0.333);

const updateLastReviewedDate = (i: number, queue: Card[]) => {
  system.now = Date.now();
  queue[i].days -= Math.round(
    system.now - system.lastReviewed / ONE_DAY_IN_MILLISECONDS
  );
  return queue[i].days;
};

const styles = StyleSheet.create({
  getStartedContainer: {
    alignItems: "center",
    marginHorizontal: 50,
  },
  getStartedText: {
    fontSize: 17,
    lineHeight: 24,
    textAlign: "center",
  },
  helpContainer: {
    marginTop: 15,
    marginHorizontal: 20,
    alignItems: "center",
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    textAlign: "center",
  },
});
