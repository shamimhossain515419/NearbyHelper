import React from "react";
import { View, Text, TouchableOpacity, FlatList, StyleSheet } from "react-native";
import { useTheme } from "../context/ThemeContext"; 
import Icon from "react-native-vector-icons/MaterialCommunityIcons"; 
import { SafeAreaView } from "react-native-safe-area-context";

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
  const colors = theme.colors; // সহজে ব্যবহারের জন্য

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: colors.background }]}>
      {/* Header */}
      <View style={styles.header}>
        <View style={[styles.locationContainer, { backgroundColor: colors.foreground, padding: 10, borderRadius: 10 }]}>
          <Icon name="map-marker-outline" size={20} color={colors.primary} />
          <Text style={[styles.locationText, { color: colors.textPrimary }]}>
            Downtown, NY
          </Text>
          <Icon name="chevron-down" size={20} color={colors.textSecondary} />
        </View>
        <View style={styles.headerIcons}>
          <TouchableOpacity style={styles.iconButton}>
            <Icon name="bell-outline" size={24} color={colors.textPrimary} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton}>
            <Icon name="bookmark-outline" size={24} color={colors.textPrimary} />
          </TouchableOpacity>
        </View>
      </View>

      {/* Search Bar */}
      <View style={[styles.searchContainer, { backgroundColor: colors.foreground }]}>
        <Icon name="magnify" size={20} color={colors.textSecondary} />
        <Text style={[styles.searchPlaceholder, { color: colors.textSecondary }]}>
          Search barbers, salons, services
        </Text>
        <Icon name="microphone-outline" size={20} color={colors.textSecondary} />
      </View>

      {/* Verified Workers Banner */}
      <View style={[styles.banner, { backgroundColor: colors.primary }]}>
        <Icon name="shield-check" size={20} color="#FFFFFF" />
        <Text style={[styles.bannerText, { color: "#FFFFFF" }]}>
          Verified workers near you
        </Text>
        <TouchableOpacity>
          <Icon name="close" size={20} color="#FFFFFF" />
        </TouchableOpacity>
      </View>

      {/* Services Section */}
      <View style={styles.sectionHeader}>
        <Text style={[styles.sectionTitle, { color: colors.textPrimary }]}>
          Services
        </Text>
        <TouchableOpacity>
          <Text style={[styles.seeAll, { color: colors.link }]}>
            See All
          </Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={services}
        numColumns={4}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.servicesList}
        scrollEnabled={false} // যদি স্ক্রিনটি ScrollView এর ভেতরে থাকে
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.serviceCard}>
            <View style={[styles.iconContainer, { backgroundColor: colors.foreground }]}>
              <Icon name={item.icon} size={28} color={colors.primary} />
            </View>
            <Text style={[styles.serviceName, { color: colors.textPrimary }]}>
              {item.name}
            </Text>
          </TouchableOpacity>
        )}
      />

      {/* Nearby Helpers Section */}
      <View style={styles.sectionHeader}>
        <Text style={[styles.sectionTitle, { color: colors.textPrimary }]}>
          Nearby Helpers
        </Text>
        <TouchableOpacity>
          <Text style={[styles.seeAll, { color: colors.link }]}>
            See All
          </Text>
        </TouchableOpacity>
      </View>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 10,
  },
  locationContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  locationText: {
    fontSize: 14,
    fontWeight: "600",
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
    marginVertical: 16,
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
    fontWeight: "600",
  },
  servicesList: {
    paddingHorizontal: 8,
    paddingBottom: 20,
  },
  serviceCard: {
    flex: 1,
    margin: 8,
    alignItems: "center",
    gap: 8,
  },
  iconContainer: {
    width: 60,
    height: 60,
    borderRadius: 16,
    justifyContent: "center",
    alignItems: "center",
    // Shadow property for light mode
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  serviceName: {
    fontSize: 12,
    fontWeight: "500",
    textAlign: "center",
  },
});