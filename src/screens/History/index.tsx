import { useEffect, useState, useRef } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, ScrollView, Alert } from 'react-native';
import { HouseLine, Trash } from 'phosphor-react-native';
import Animated, { Layout, SlideInRight, SlideOutRight } from 'react-native-reanimated';
import { Swipeable } from 'react-native-gesture-handler';

import { Header } from '../../components/Header';
import { HistoryCard, HistoryProps } from '../../components/HistoryCard';
import { historyGetAll, historyRemove } from '../../storage/quizHistoryStorage';

import { styles } from './styles';
import { THEME } from '../../styles/theme';
import { Loading } from '../../components/Loading';

export function History() {
  const [isLoading, setIsLoading] = useState(true);
  const [history, setHistory] = useState<HistoryProps[]>([]);

  const { goBack } = useNavigation();

  const swipeableRefs = useRef<Swipeable[]>([]);

  async function fetchHistory() {
    const response = await historyGetAll();
    setHistory(response);
    setIsLoading(false);
  }

  async function remove(id: string) {
    await historyRemove(id);

    fetchHistory();
  }

  function handleRemove(id: string, index: number) {
    swipeableRefs.current?.[index].close();
    Alert.alert(
      'Remove',
      'Do you want to remove this record?',
      [
        {
          text: 'Yes', onPress: () => remove(id)
        },
        { text: 'No', style: 'cancel' }
      ]
    );

  }

  useEffect(() => {
    fetchHistory();
  }, []);

  if (isLoading) {
    return <Loading />
  }

  return (
    <View style={styles.container}>
      <Header
        title="Historic"
        subtitle={`Your study history${'\n'}performed`}
        icon={HouseLine}
        onPress={goBack}
      />

      <ScrollView
        contentContainerStyle={styles.history}
        showsVerticalScrollIndicator={false}
      >
        {
          history.map((item, index) => (
            <Animated.View 
              key={item.id}
              entering={SlideInRight}
              exiting={SlideOutRight.duration(100)}
              layout={Layout.springify().duration(300)}
            >
              <Swipeable
                ref={(ref) => {
                  if(ref) {
                    swipeableRefs.current.push(ref)
                  }
                }}
                overshootLeft={false}
                containerStyle={styles.swipeableContainer}
                leftThreshold={5}
                renderRightActions={() => null}
                onSwipeableOpen={() => handleRemove(item.id, index)}
                renderLeftActions={() => (
                  <View style={styles.swipeableRemove}>
                    <Trash size={32} color={THEME.COLORS.GREY_100} />
                  </View>
                )}
              >
                <HistoryCard data={item} />
              </Swipeable>
            </Animated.View>
          ))
        }
      </ScrollView>
    </View>
  );
}