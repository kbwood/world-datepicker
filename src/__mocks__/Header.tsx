import React from 'react';
import { Props } from '../Header';

const Header = ({ curDate }: Props) => {
  const message = `Month header (current ${curDate.toString()})`;
  return <div>{message}</div>;
};

export default Header;
