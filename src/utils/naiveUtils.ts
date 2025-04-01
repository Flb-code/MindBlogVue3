import { createDiscreteApi } from "naive-ui";

const { message } = createDiscreteApi(["message"]);

function Success(text: string) {
  message.success(text);
}
function Error(text: string) {
  message.error(text);
}

export const Message = {
  Success,
  Error,
};
