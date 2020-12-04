// import { node, number } from 'prop-types';
import React from 'react';
import { IFlexContainerProps, IFlexContainerStyles } from './flexContainer.interface';
import { flexContainerClass } from './flexContainer.styled';

const FlexContainer: React.FC<IFlexContainerProps> = (props) => {
  const { padding, children } = props;
  const styledProps: IFlexContainerStyles = { padding: padding ?? 1 };
  const classes = flexContainerClass(styledProps);

  return (
    <div className={classes.root}>{children}</div>
  );
};

export default FlexContainer;
