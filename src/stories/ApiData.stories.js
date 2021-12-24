import { rest } from 'msw';

import { ApiData } from '../components/ApiData';
import response from '../mocks/response.json';

export default {
  title: 'Api Data',
  component: ApiData,
};

const Template = () => <ApiData />;

export const Default = Template.bind({});
Default.parameters = {
  msw: {
    handlers: [
      rest.get(
        'https://jsonplaceholder.typicode.com/todos/',
        (_req, res, ctx) => {
          return res(ctx.json(response));
        }
      ),
    ],
  },
};

export const Loading = Template.bind({});
Loading.parameters = {
  msw: {
    handlers: [
      rest.get(
        'https://jsonplaceholder.typicode.com/todos/',
        (_req, res, ctx) => {
          return res(ctx.delay(1500), ctx.json(response));
        }
      ),
    ],
  },
};
