import { useAppContext } from '~/provider/AppContextProvider';

export default function useApp() {
  const appContext = useAppContext();
  const { categories, countries } = appContext;
  return {
    categories,
    countries,
  };
}
