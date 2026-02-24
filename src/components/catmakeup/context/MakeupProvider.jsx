import PropTypes from 'prop-types';
import { MakeupContext } from './MakeupContext';
import { useCatMakeupState } from '../../hooks/catmakeup/hooks/useCatMakeupState';

/**
 * MakeupProvider - Provides makeup state to children
 */
export const MakeupProvider = ({ children }) => {
  const makeupState = useCatMakeupState();

  return (
    <MakeupContext.Provider value={makeupState}>
      {children}
    </MakeupContext.Provider>
  );
};

MakeupProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
