import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { updateLayoutState } from '../../../redux/root/layout-state/functions';


const LandingRoot = () => {
  const dispatch = useDispatch();



  useEffect(() => {
    dispatch(updateLayoutState({ displayTopbar: true}));
  }, [dispatch]);

  return (
    <div>
    </div>
  );
};

export default LandingRoot;
