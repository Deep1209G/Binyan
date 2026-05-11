import { StyleSheet, View, Image, Text } from 'react-native';
import React from 'react';
import theme from '../../../theme';
import Icon from 'react-native-vector-icons/Ionicons';
import PressableIcon from '../../Home/PressableIcon';

const Posts = () => {
  return (
    <View style={styles.container}>
      <View style={styles.main}>
        {/* HEADER */}
        <View style={styles.header}>
          {/* LEFT SIDE */}
          <View style={styles.left}>
            <Image
              source={require('../../../assets/profile.jpg')}
              style={styles.img}
            />

            <View style={styles.column}>
              <View style={styles.textcontainer}>
                <Text style={styles.title}>John Doe</Text>

                <View style={styles.iconContainer}>
                  <Icon
                    name="checkmark-done-circle"
                    size={14}
                    color={theme.colors.brightazure}
                  />
                </View>
              </View>

              <Text style={styles.subtitle}>Today, 2:13 PM</Text>
            </View>
          </View>

          {/* RIGHT SIDE ICON */}
          <PressableIcon
            name="ellipsis-horizontal-outline"
            size={20}
            style={styles.icon}
            onPress={() => console.log('menu')}
            color={theme.colors.textSecondary}
          />
        </View>

        <Text style={styles.text}>
          Just Finished overseeing a major renovation project in downtown Abu
          Dhabi. The transformation is incredible
        </Text>

        <View style={styles.row}>
          <View style={styles.subtextcontainer}>
            <Text style={styles.subtext}>#RealEstate</Text>
          </View>
          <View style={styles.subtextcontainer}>
            <Text style={styles.subtext}>#Construction</Text>
          </View>
        </View>

        {/*Inner Card*/}
        <View style={styles.card}>
          <View style={styles.wrap}>
            <View style={styles.icontext}>
              <PressableIcon
                name="heart-outline"
                size={25}
                style={styles.cardicon}
                onPress={() => console.log('Like')}
                color={theme.colors.white}
              />
              <Text style={styles.cardicontext}>Like</Text>
            </View>

            <View style={styles.icontext}>
              <PressableIcon
                name="chatbubble-ellipses-outline"
                size={25}
                style={styles.cardicon}
                color={theme.colors.white}
                onPress={() => console.log('comment')}
              />
              <Text style={styles.cardicontext}>Comment</Text>
            </View>

            <View style={styles.icontext}>
              <PressableIcon
                name="send-outline"
                size={20}
                style={styles.cardicon}
                color={theme.colors.white}
                onPress={() => console.log('Share')}
              />
              <Text style={styles.cardicontext}>Share</Text>
            </View>
          </View>
        </View>


      </View>
    </View>
  );
};

export default Posts;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: theme.spacing.xl,
  },

  main: {
    paddingHorizontal: theme.spacing.md,
    paddingVertical: theme.spacing.md,
    backgroundColor: theme.colors.white,
    borderRadius: theme.radius.md,
    height: 512,
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  left: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  column: {
    marginLeft: theme.spacing.sm,
    justifyContent: 'center',
  },

  img: {
    height: 40,
    width: 40,
    borderRadius: theme.radius.round,
  },

  textcontainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: theme.spacing.xs,
  },

  title: {
    fontFamily: theme.fontFamily.medium,
    fontSize: theme.typography.regular,
  },

  subtitle: {
    fontFamily: theme.fontFamily.regular,
    fontSize: theme.typography.xs,
    color: theme.colors.textSecondary,
  },

  iconContainer: {
    backgroundColor: theme.colors.border,
    height: 18,
    width: 18,
    borderRadius: theme.radius.round,
    alignItems: 'center',
    justifyContent: 'center',
  },

  icon: {
    backgroundColor: theme.colors.border,
    height: 40,
    width: 40,
    borderRadius: theme.radius.round,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    marginTop: theme.spacing.md,
    fontFamily: theme.fontFamily.regular,
    fontSize: theme.typography.small,
    color: theme.colors.textSecondary,
    width:300,
  },
  row: {
    flexDirection: 'row',
    gap: theme.spacing.sm,
  },
  subtextcontainer: {
    marginTop: theme.spacing.lg,
    height: 20,
    paddingHorizontal: theme.spacing.sm,
    backgroundColor: theme.colors.surface,
    borderRadius: theme.radius.md,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'flex-start',
  },
  subtext: {
    fontFamily: theme.fontFamily.medium,
    fontSize: theme.typography.small,
    color: theme.colors.primary,
  },

  card: {
    marginTop: theme.spacing.lg,
    height: 356,
    backgroundColor: theme.colors.border,
    borderRadius: theme.radius.md,
    padding: theme.spacing.md,
  },
  cardicon: {
    backgroundColor: theme.colors.surface,
    height: 40,
    width: 40,
    borderRadius: theme.radius.round,
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.colors.white,
  },
  cardicontext: {
    color: theme.colors.white,
    fontFamily: theme.fontFamily.regular,
    fontSize: theme.typography.small,
    textAlign: 'center',
    width: '100%',
  },

  icontext: {
    width: 60,
    alignItems: 'center',
    gap: theme.spacing.xs,
    marginBottom: theme.spacing.md,
  },

  wrap: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
});
