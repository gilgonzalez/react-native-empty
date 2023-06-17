import React, { useContext, useState } from 'react';
import { Text, ImageSourcePropType, Dimensions, View, Image, Animated } from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import { SafeAreaView } from 'react-native-safe-area-context';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import useAnimation from '../hooks/useAnimation';
import { ThemeContext } from '../context/Theme/ThemeContext';
import ButtonExit from '../components/ButtonExit';
import { RootStackParams, StackScreens } from '../navigation/StackNavigation';
import { styles } from '../theme/apptheme';

const { width } = Dimensions.get('window');

const Slides = () => {
  const navigate = useNavigation<NavigationProp<RootStackParams>>();
  const [numberSlide, setNumberSlide] = useState<number>(0);
  const { opacity, fadeIn, fadeOut } = useAnimation(500, 250);

  const { theme: { aditionalColors } } = useContext(ThemeContext);

  interface Slide {
    title: string;
    desc: string;
    img: ImageSourcePropType
  }

  const items: Slide[] = [
    {
      title: 'Titulo 1',
      desc: 'Ea et eu enim fugiat sunt reprehenderit sunt aute quis tempor ipsum cupidatat et.',
      img: require('../assets/slide-1.png'),
    },
    {
      title: 'Titulo 2',
      desc: 'Anim est quis elit proident magna quis cupidatat culpa labore Lorem ea. Exercitation mollit velit in aliquip tempor occaecat dolor minim amet dolor enim cillum excepteur. ',
      img: require('../assets/slide-2.png'),
    },
    {
      title: 'Titulo 3',
      desc: 'Ex amet duis amet nulla. Aliquip ea Lorem ea culpa consequat proident. Nulla tempor esse ad tempor sit amet Lorem. Velit ea labore aute pariatur commodo duis veniam enim.',
      img: require('../assets/slide-3.png'),
    },
  ];
  const renderItem = (item: Slide) => {

    return (
      <View style={{
        flex: 1,
        borderRadius: 5,
        margin: 5,
        gap: 15,
        backgroundColor: aditionalColors.backgroundSlide,
        padding: 40,
        justifyContent: 'center',
      }}>
        <Image
          source={item.img}
          style={{
            width: 350,
            height: 400,
            resizeMode: 'center',
          }}
        />
        <Text style={[styles.title, { color: aditionalColors.text }]}>{item.title}</Text>
        <Text style={[styles.text, {color: aditionalColors.text}]}>{item.desc}</Text>
        <Animated.View style={{ flex: 1, justifyContent: 'flex-end', alignItems: 'flex-end', opacity: opacity }}>
          <ButtonExit disabled={numberSlide !== items.length - 1} goHome={() => navigate.navigate(StackScreens.HOME, {}) } />
        </Animated.View>
      </View>
    );
  };
  return (
    <SafeAreaView
      style={{
        flex: 1,
      }}
    >
      <Carousel
        //ref={(c) => { this._carousel = c; }}
        data={items}
        renderItem={({ item }: { item: Slide }) => renderItem(item)}
        sliderWidth={width}
        itemWidth={width}
        layout="default"
        onSnapToItem={(index) => {
          setNumberSlide(index);
          if (index === items.length - 1) {
            fadeIn();
          } else {
            fadeOut();
          }
        }
        }
      />
      <Pagination
        dotsLength={items.length}
        activeDotIndex={numberSlide}
        dotStyle={{
          width: 10,
          height: 10,
          borderRadius: 5,
          backgroundColor: aditionalColors.inactiveButtonSwitch,

        }}
      />


    </SafeAreaView>
  );
};

export default Slides;


