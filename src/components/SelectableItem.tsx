import React from "react";
import { Pressable, Text, View, StyleSheet } from "react-native";
import theme from "../theme";

interface SelectableItemProps {
  label: string;
  selected: boolean;
  onPress: () => void;
  icon?: React.ReactNode;
  showLine?: boolean;
  variant?: "row" | "card";
}

const SelectableItem = ({
  label,
  selected,
  onPress,
  icon,
  showLine = false,
  variant = "row",
}: SelectableItemProps) => {
  return (
    <Pressable
      style={[
        variant === "card" ? styles.cardContainer : styles.container, 
        selected && styles.selectedContainer,
      ]}
      onPress={onPress}
    >
      {variant === "card" ? (
        <>
          {/* TOP ROW */}
          <View style={styles.cardTop}>
            {icon && <View style={styles.iconWrapper}>{icon}</View>}

            <View
              style={[
                styles.radioOuter,
                selected && styles.radioOuterSelected,
              ]}
            >
              {selected && (
                <View style={styles.radioInner}>
                  <Text style={styles.tick}>✓</Text>
                </View>
              )}
            </View>
          </View>

          {/* TEXT BELOW */}
          <Text style={styles.cardText}>{label}</Text>
        </>
      ) : (
        <>
          {icon && <View style={styles.iconWrapper}>{icon}</View>}

          {showLine && <View style={styles.line} />}

          <Text style={styles.text}>{label}</Text>

          <View
            style={[
              styles.radioOuter,
              selected && styles.radioOuterSelected,
            ]}
          >
            {selected && (
              <View style={styles.radioInner}>
                <Text style={styles.tick}>✓</Text>
              </View>
            )}
          </View>
        </>
      )}
    </Pressable>
  );
};

export default SelectableItem;

const styles = StyleSheet.create({
  //  ROW STYLE (other screens)
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: theme.surface,
    padding: theme.lg,
    borderRadius: 30,
    marginBottom: theme.md,
  },

  // CARD STYLE (service provider)
  cardContainer: {
    flex: 1,
    flexDirection: "column", 
    backgroundColor: theme.surface,
    borderRadius: 16,
    padding: theme.lg,
    marginHorizontal: theme.sm,
    minHeight: 100,
  },

  selectedContainer: {
  },

  // TOP ROW FIX
  cardTop: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: theme.md,
  },

  // TEXT BELOW
  cardText: {
    fontSize: 14,
    color:theme.textPrimary,
  },

  // RADIO
  radioOuter: {
    width: 26,
    height: 26,
    borderRadius: 15,
    borderWidth: 1,
    borderColor:theme.border,
    backgroundColor:theme.border,
    alignItems: "center",
    justifyContent: "center",
  },

  radioOuterSelected: {
    borderColor: theme.selected,
  },

  radioInner: {
    width: theme.xl,
    height: theme.xl,
    borderRadius: 10,
    backgroundColor: theme.selected,
    alignItems: "center",
    justifyContent: "center",
  },

  tick: {
    color: theme.white,
    fontSize: 11,
    fontWeight: "bold",
  },

  // ICON
  iconWrapper: {
    padding: theme.sm,
    borderRadius: 20,
    backgroundColor: theme.white,
  },

  // ROW MODE
  line: {
    width: 1,
    height: "100%",
    backgroundColor: theme.textSecondary,
    marginLeft: theme.xl,
    marginRight: theme.md,
  },

  text: {
    fontSize: 14,
    flex: 1,
  },
});