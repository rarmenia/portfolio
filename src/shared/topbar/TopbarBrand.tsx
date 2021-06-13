import React from 'react';
import { NavLink } from 'react-router-dom';

interface Props {
  brandIcon?: React.ReactNode;
  brandText: React.ReactNode;
  linkTo: string;
  exactMatch?: boolean;
  activeClass?: string;
  className?: string;
}

const TopbarBrand = (props: Props) => {
  return (
    <NavLink
      to={props.linkTo ?? '/'}
      exact={props.exactMatch ?? false}
      activeClassName={props.activeClass ?? ''}
      className={props.className ?? ''}
    >
      <div className='d-flex flex-row'>
        {props.brandIcon ? <div>props.brandIcon</div> : ''}
        <div>{props.brandText}</div>
      </div>
    </NavLink>

  );
};

export default TopbarBrand;