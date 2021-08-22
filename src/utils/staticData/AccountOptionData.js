import {Icons} from '../../themes/Themes';

export const accountOptionData = [
  {
    title: 'Top-up account',
    desc: 'Deposit money to your account to use with card',
    checkBoxReq: false,
    icon: Icons.topUp,
  },
  {
    title: 'Weekly spending limit',
    desc: 'You haven’t set any spending limit on card',
    checkBoxReq: true,
    icon: Icons.weeklyLimit,
  },
  {
    title: 'Freeze card',
    desc: 'Your debit card is currently active',
    checkBoxReq: true,
    icon: Icons.freezeCard,
  },
  {
    title: 'Get a new card',
    desc: 'This deactivates your current debit card',
    checkBoxReq: false,
    icon: Icons.getANewCard,
  },
  {
    title: 'Deactivated cards',
    desc: 'Your previously deactivated cards',
    checkBoxReq: false,
    icon: Icons.decativateCard,
  },
];
