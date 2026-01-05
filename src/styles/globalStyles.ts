import { StyleSheet } from 'react-native';
import { Theme } from '../types/theme.types';

export const createStyles = (theme: Theme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.colors.background,
    },
    card: {
      backgroundColor: theme.colors.card,
    },
    text: {
      color: theme.colors.text,
      fontSize: 16,
    },
  });
