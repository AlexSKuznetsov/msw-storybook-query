import { rest } from 'msw';
import App from '../App';
import response from '../mocks/response.json';

export default {
  title: 'App page',
  component: App,
};

const Template = () => <App />;
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
