import {
  StyleSheet,
  Image,
  Text,
  View,
  FlatList,
  Pressable,
  ScrollView,
} from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import theme from '../../theme';
import PressableIcon from '../../components/Home/PressableIcon';
import SearchBar from '../../components/Home/SearchBar';
import ServiceCard from '../../components/Home/ServiceCard';
import { services, chunkArray } from '../../data/Services';
import Icon from 'react-native-vector-icons/Ionicons';
import VendorCard from '../../components/Home/VendorCard';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../App';
// FlatList (Card)

const limitedServices = services.slice(0, 8);
const chunkedServices = chunkArray(limitedServices, 2);
type NavigationProp = NativeStackNavigationProp<RootStackParamList>;
type HomeProps = {
  onPress: () => void;
};

const ListFooter = ({ onPress }: HomeProps) => (
  <View style={styles.footerContainer}>
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [styles.footerCard, pressed && styles.pressed]}
    >
      <Text style={styles.plus}>+</Text>
      <Text style={styles.footerText}>View More</Text>
    </Pressable>
  </View>
);

const HomeScreen = () => {
  const navigation = useNavigation<NavigationProp>();
  return (
    <SafeAreaView style={styles.mainContainer}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* HEADER */}
        <View style={styles.headerContainer}>
          {/* LEFT SECTION  */}
          <View style={styles.leftSection}>
            <Image
              source={require('../../assets/profile.jpg')}
              style={styles.profileImage}
            />
            <Text style={styles.headerText}>Hi, John Doe 👋</Text>
          </View>

          {/* RIGHT SECTION (Notification Icon) */}
          <PressableIcon
            name="notifications-outline"
            size={25}
            onPress={() => console.log('Notification')}
          />
        </View>

        {/*Search Bar */}
        <View style={styles.searchBtn}>
          <SearchBar placeholder="What do you need help with today?" />
        </View>

        {/* Services Section*/}

        <Text style={styles.title}>Services</Text>
        <View style={styles.cardContainer}>
          <FlatList
            data={chunkedServices}
            horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor={(_, index) => index.toString()}
            renderItem={({ item }) => (
              <View style={styles.column}>
                {item.map((service: any) => (
                  <ServiceCard key={service.id} text={service.title} />
                ))}
              </View>
            )}
            ListFooterComponent={() => (
              <ListFooter
                onPress={() => navigation.navigate('Service')}
              />
            )}
          />
        </View>

        {/*Affiliate Program */}

        <Text style={styles.title}>Affiliate Program</Text>
        <View style={styles.affiliateConatiner}>
          <View style={styles.teamChatcard}>
            <Text style={styles.teamchattitle}>Team Chat</Text>
            <Text style={styles.teamchatsubtitle}>
              Lorem ipsum emitte dollar constructue
            </Text>
            <Pressable style={styles.teamchatbtn}>
              <Text style={styles.teamchatbtntext}>Join Now</Text>
              <Icon
                name="chevron-up-outline"
                size={18}
                style={styles.iconcontainer}
              />
            </Pressable>
          </View>

          <View style={styles.offeroutercard}>
            <View style={styles.offerinnercard}>
              <Text>15% Off</Text>
              <Text>Lorem ipsum emitte dollar constructue</Text>
            </View>
          </View>
        </View>

        {/*Sponsorship */}
        <Text style={styles.title}>Sponsorship</Text>
        <View style={styles.sponsorCard}></View>

        {/*advertise*/}
        <View style={styles.advertisecontainer}>
          <Text style={styles.teamchattitle}>Advertise</Text>
        </View>

        {/*Find Professionals */}
        <View>
          <Text style={styles.title}>Find Professionals</Text>
          <Text style={styles.teamchatsubtitle}>
            Connect with the best professionals for your construction projects.
          </Text>

          <VendorCard
            image="contractor"
            title="Contractors"
            subtitle="Find professional constructor companies."
            onPress={() => console.log('vendor card')}
          />
          <VendorCard
            image="consultant"
            title="Consultants"
            subtitle="Expert consulting firm for your projects"
            onPress={() => console.log('vendor card')}
          />
          <VendorCard
            image="suppliers"
            title="Suppliers "
            subtitle="Quality building materials and equipments"
            onPress={() => console.log('vendor card')}
          />
          <VendorCard
            image="freelancer"
            title="Freelancers"
            subtitle="Independent professionals for hire"
            onPress={() => console.log('vendor card')}
          />
          <VendorCard
            image="workshops"
            title="Workshops"
            subtitle="Quality building materials and equipments."
            onPress={() => console.log('vendor card')}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    paddingVertical: theme.spacing.xl,
    paddingHorizontal: theme.spacing.xl,
  },

  // HEADER
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  leftSection: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  headerText: {
    marginLeft: theme.spacing.md,
    fontSize: theme.typography.regular,
    color: theme.colors.textSecondary,
  },

  profileImage: {
    width: 60,
    height: 60,
    borderRadius: theme.radius.dl,
    borderColor: theme.colors.primary,
    borderWidth: 2,
  },

  // Search Bar
  searchBtn: {
    marginTop: theme.spacing.xxxl,
  },

  //Service & card
  title: {
    marginTop: theme.spacing.xl,
    fontSize: theme.typography.xl,
    color: theme.colors.textPrimary,
    fontWeight: theme.fontWeight.medium,
  },

  cardContainer: {
    marginTop: theme.spacing.md,
  },

  column: {
    marginRight: 12,
  },
  footerContainer: {
    alignItems: 'center',
    marginTop: theme.spacing.xs,
  },

  footerCard: {
    height: 120,
    width: 120,
    borderRadius: theme.radius.md,
    backgroundColor: theme.colors.card,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: theme.spacing.sm,
  },

  plus: {
    fontSize: 28,
    color: theme.colors.primary,
    fontWeight: theme.fontWeight.bold,
  },

  footerText: {
    marginTop: theme.spacing.xs,
    fontSize: theme.typography.small,
    color: theme.colors.textPrimary,
    fontWeight: theme.fontWeight.medium,
  },

  pressed: {
    opacity: 0.7,
    transform: [{ scale: 0.97 }],
  },

  // Affiliate Program Card
  affiliateConatiner: {
    flexDirection: 'row',
    gap: theme.spacing.sm,
    marginTop: theme.spacing.md,
  },

  teamChatcard: {
    backgroundColor: theme.colors.white,
    height: 120,
    width: 220,
    borderRadius: theme.radius.lg,
    paddingHorizontal: theme.spacing.md,
    paddingVertical: theme.spacing.md,
    overflow: 'hidden',
  },

  teamchattitle: {
    fontSize: theme.typography.large,
    color: theme.colors.textPrimary,
    fontWeight: theme.fontWeight.medium,
    marginTop: theme.spacing.xs,
  },
  teamchatsubtitle: {
    color: theme.colors.textSecondary,
    fontSize: theme.typography.regular,
    marginTop: theme.spacing.xs,
  },

  teamchatbtn: {
    marginTop: theme.spacing.xs,
    backgroundColor: theme.colors.black,
    height: 25,
    width: 90,
    borderRadius: theme.radius.md,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignSelf: 'flex-start',
  },

  teamchatbtntext: {
    color: theme.colors.white,
    fontSize: theme.typography.small,
    paddingLeft: theme.spacing.sm,
    marginRight: 6,
  },
  iconcontainer: {
    height: 20,
    width: 20,
    borderRadius: theme.radius.md,
    backgroundColor: theme.colors.cosmicLatte,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: theme.spacing.sm,
  },

  offeroutercard: {
    backgroundColor: theme.colors.white,
    height: 120,
    width: 140,
    borderRadius: theme.radius.lg,
    alignItems: 'center',
    justifyContent: 'center',
  },

  offerinnercard: {
    height: 100,
    width: 120,
    borderWidth: 1.5,
    borderStyle: 'dashed',
    borderColor: theme.colors.border,
    borderRadius: theme.radius.lg,
    alignItems: 'center',
    justifyContent: 'center',
    padding: theme.spacing.sm,
  },

  offer: {
    height: 10,
  },

  // Sponsor
  sponsorCard: {
    marginTop: theme.spacing.md,
    backgroundColor: theme.colors.cosmicLatte,
    height: 150,
    borderRadius: theme.radius.md,
  },

  advertisecontainer: {
    marginTop: theme.spacing.md,
    backgroundColor: theme.colors.white,
    height: 80,
    borderRadius: theme.radius.lg,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
