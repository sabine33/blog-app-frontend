import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-hot-toast";
import { MessageType } from "../../types";

const initialState: MessageType = {
  content: "",
  type: "notification",
};
/**
 * Slice for global notification.
 */
const messageSlice = createSlice({
  name: "message",
  initialState,
  reducers: {
    setMessage: (state, action) => {
      const { content, type } = action.payload;
      state.content = content;
      state.type = type;
      if (type == "notification") {
        toast.success(content);
      } else {
        toast.error(content);
      }
    },
    clearMessage: (state) => {
      state.content = "";
      state.type = null;
    },
  },
});

export const { setMessage, clearMessage } = messageSlice.actions;
export default messageSlice.reducer;
