import React from "react";
import { TouchableOpacity, Text, View, StyleSheet } from "react-native";

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
    <TouchableOpacity
      style={[
        variant === "card" ? styles.cardContainer : styles.container, // ✅ FIXED
        selected && styles.selectedContainer,
      ]}
      onPress={onPress}
    >
      {variant === "card" ? (
        <>
          {/* 🔥 TOP ROW */}
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

          {/* 🔥 TEXT BELOW */}
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
    </TouchableOpacity>
  );
};

export default SelectableItem;

const styles = StyleSheet.create({
  //  ROW STYLE (other screens)
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#EDEDED",
    padding: 16,
    borderRadius: 30,
    marginBottom: 12,
  },

  // CARD STYLE (service provider)
  cardContainer: {
    flex: 1,
    flexDirection: "column", 
    backgroundColor: "#EDEDED",
    borderRadius: 16,
    padding: 16,
    marginHorizontal: 6,
    minHeight: 100,
  },

  selectedContainer: {
  },

  // TOP ROW FIX
  cardTop: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },

  // TEXT BELOW
  cardText: {
    fontSize: 14,
    color: "#333",
  },

  // RADIO
  radioOuter: {
    width: 26,
    height: 26,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: "#ccc",
    alignItems: "center",
    justifyContent: "center",
  },

  radioOuterSelected: {
    borderColor: "#FF6A00",
  },

  radioInner: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: "#FF6A00",
    alignItems: "center",
    justifyContent: "center",
  },

  tick: {
    color: "#fff",
    fontSize: 11,
    fontWeight: "bold",
  },

  // ICON
  iconWrapper: {
    padding: 8,
    borderRadius: 20,
    backgroundColor: "#fff",
  },

  // ROW MODE
  line: {
    width: 1,
    height: "100%",
    backgroundColor: "gray",
    marginLeft: 20,
    marginRight: 12,
  },

  text: {
    fontSize: 14,
    flex: 1,
  },
});