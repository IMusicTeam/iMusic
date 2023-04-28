import { useSelector } from 'react-redux';

export const useHasApplicationPermission = (permission) => {
  const { featureControlsAll } = useSelector((store) => store.featureControls);

  if (featureControlsAll?.length === 0) {
    return false;
  }

  return (
    featureControlsAll.find((x) => x.featureName === permission)?.permission ??
    false
  );
};
