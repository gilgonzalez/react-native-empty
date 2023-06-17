import { MenuItem } from '../interfaces/Interfaces';
import { StackScreens } from '../navigation/StackNavigation';

export
  const menuItems: MenuItem[] = [
    {
      name: 'Animation 101',
      icon: 'cube-outline',
      component: StackScreens.ANIMATION_101,
    },
    {
      name: 'Animation 102',
      icon: 'albums-outline',
      component: StackScreens.ANIMATION_102,
    },
    {
      name: 'Switch',
      icon: 'toggle-outline',
      component: StackScreens.SWITCH,
    },
    {
      name: 'Alerts',
      icon: 'alert-circle-outline',
      component: StackScreens.ALERT,
    },
    {
      name: 'TextInput',
      icon: 'document-text-outline',
      component: StackScreens.TEXT_INPUT,
    },
    {
      name: 'PullToRefresh',
      icon: 'refresh-outline',
      component: StackScreens.PULL_TO_REFRESH,
    },
    {
      name: 'SectionList',
      icon: 'list-outline',
      component: StackScreens.SECTION_LIST,
    },
    {
      name: 'Modal',
      icon: 'copy-outline',
      component: StackScreens.MODAL,
    },
    {
      name: 'InfiniteScroll',
      icon: 'infinite-outline',
      component: StackScreens.INFINITY_SCROLL,
    },
    {
      name: 'Slides',
      icon: 'flower-outline',
      component: StackScreens.SLIDES,
    },
    {
      name: 'Theme',
      icon: 'flask-outline',
      component: StackScreens.THEME,
    },
  ];
