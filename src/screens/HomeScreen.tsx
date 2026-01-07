import React from "react";
import { View, Text, TouchableOpacity, FlatList, StyleSheet } from "react-native";
import { useTheme } from "../context/ThemeContext"; // Theme context import koro
import Icon from "react-native-vector-icons/MaterialCommunityIcons"; // Icon library
import { SafeAreaProvider } from "react-native-safe-area-context";

const services = [
  { id: "1", name: "Electrician", icon: "lightning-bolt" },
  { id: "2", name: "Plumber", icon: "wrench" },
  { id: "3", name: "Cleaner", icon: "broom" },
  { id: "4", name: "AC Repair", icon: "air-conditioner" },
  { id: "5", name: "Tutor", icon: "book-open-variant" },
  { id: "6", name: "Mechanic", icon: "car-wrench" },
  { id: "7", name: "Painter", icon: "format-paint" },
  { id: "8", name: "Carpenter", icon: "hammer" },
];

export default function HomeScreen({ navigation }: any) {
  const { theme } = useTheme();

  return (
    <SafeAreaProvider style={[styles.container, { backgroundColor: theme.colors.background.primary }]}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.locationContainer}>
          <Icon name="map-marker-outline" size={20} color={theme.colors.icon.secondary} />
          <Text style={[styles.locationText, { color: theme.colors.text.secondary }]}>
            Downtown, NY
          </Text>
          <Icon name="chevron-down" size={20} color={theme.colors.icon.secondary} />
        </View>
        <View style={styles.headerIcons}>
          <TouchableOpacity style={styles.iconButton}>
            <Icon name="bell-outline" size={24} color={theme.colors.icon.secondary} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton}>
            <Icon name="bookmark-outline" size={24} color={theme.colors.icon.secondary} />
          </TouchableOpacity>
        </View>
      </View>

      {/* Search Bar */}
      <View style={[styles.searchContainer, { backgroundColor: theme.colors.surface.input }]}>
        <Icon name="magnify" size={20} color={theme.colors.icon.tertiary} />
        <Text style={[styles.searchPlaceholder, { color: theme.colors.text.placeholder }]}>
          Search barbers, salons, services
        </Text>
        <Icon name="microphone-outline" size={20} color={theme.colors.icon.tertiary} />
      </View>

      {/* Verified Workers Banner */}
      <View style={[styles.banner, { backgroundColor: theme.colors.surface.banner }]}>
        <Icon name="shield-check" size={20} color={theme.colors.text.onTeal} />
        <Text style={[styles.bannerText, { color: theme.colors.text.onTeal }]}>
          Verified workers near you
        </Text>
        <TouchableOpacity>
          <Icon name="close" size={20} color={theme.colors.text.onTeal} />
        </TouchableOpacity>
      </View>

      {/* Services Section */}
      <View style={styles.sectionHeader}>
        <Text style={[styles.sectionTitle, { color: theme.colors.text.primary }]}>
          Services
        </Text>
        <TouchableOpacity>
          <Text style={[styles.seeAll, { color: theme.colors.text.link }]}>
            See All
          </Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={services}
        numColumns={4}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.servicesList}
        renderItem={({ item }) => (
          <TouchableOpacity 
            style={[styles.serviceCard, { backgroundColor: theme.colors.background.tertiary }]}
          >
            <View style={[styles.iconContainer, { backgroundColor: theme.colors.background.tertiary }]}>
              <Icon name={item.icon} size={28} color={theme.colors.icon.primary} />
            </View>
            <Text style={[styles.serviceName, { color: theme.colors.text.primary }]}>
              {item.name}
            </Text>
          </TouchableOpacity>
        )}
      />

      {/* Nearby Helpers Section */}
      <View style={styles.sectionHeader}>
        <Text style={[styles.sectionTitle, { color: theme.colors.text.primary }]}>
          Nearby Helpers
        </Text>
        <TouchableOpacity>
          <Text style={[styles.seeAll, { color: theme.colors.text.link }]}>
            See All
          </Text>
        </TouchableOpacity>
      </View>

      {/* Helper Cards - You can add FlatList here */}
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    marginBottom: 16,
  },
  locationContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  locationText: {
    fontSize: 14,
    fontWeight: "500",
  },
  headerIcons: {
    flexDirection: "row",
    gap: 12,
  },
  iconButton: {
    padding: 4,
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 12,
    marginHorizontal: 16,
    borderRadius: 12,
    gap: 8,
    marginBottom: 16,
  },
  searchPlaceholder: {
    flex: 1,
    fontSize: 14,
  },
  banner: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 14,
    marginHorizontal: 16,
    borderRadius: 12,
    gap: 10,
    marginBottom: 24,
  },
  bannerText: {
    flex: 1,
    fontSize: 14,
    fontWeight: "500",
  },
  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "700",
  },
  seeAll: {
    fontSize: 14,
    fontWeight: "500",
  },
  servicesList: {
    paddingHorizontal: 8,
    marginBottom: 24,
  },
  serviceCard: {
    flex: 1,
    margin: 8,
    padding: 16,
    borderRadius: 16,
    alignItems: "center",
    gap: 8,
    minWidth: 80,
  },
  iconContainer: {
    width: 48,
    height: 48,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
  },
  serviceName: {
    fontSize: 12,
    fontWeight: "500",
    textAlign: "center",
  },
});