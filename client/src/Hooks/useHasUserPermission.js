import { useSelector } from 'react-redux';

export const useHasUserPermission = (permission) => {
  const { featureControls } = useSelector((store) => store.featureControls);

  if (featureControls?.length === 0) {
    return false;
  }

  return (
    featureControls.find((x) => x.featureName === permission)?.permission ??
    false
  );
};
