/* eslint-disable import/no-extraneous-dependencies */
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import bootstrap from "../infrastructure/bootstrap";

(async () => {
  const handler = err => {
    throw err;
  };

  const mockedResponse = { data: [] };
  bootstrap.__set__("fetchIngredients", () =>
    Promise.resolve(mockedResponse).catch(handler)
  );
  bootstrap.__set__("fetchBurgers", () =>
    Promise.resolve(mockedResponse).catch(handler)
  );

  configure({ adapter: new Adapter() });
  await bootstrap();
})();
