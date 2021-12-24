import { DataProvider } from '../src/context/context';

export const ContextDecorator = (storyFn) => {
  return <DataProvider>{storyFn()}</DataProvider>;
};
