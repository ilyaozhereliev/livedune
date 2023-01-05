import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type User = {
  name: string;
  email: string;
  password: string;
};

type UsersState = {
  users: User[];
};

const initialState: UsersState = {
  users: [
    {
      name: 'Игорь',
      email: 'example@example.com',
      password: 'password2021',
    },
  ],
};

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    addUser(
      state,
      action: PayloadAction<{ name: string; email: string; password: string }>,
    ) {
      state.users.push({
        name: action.payload.name,
        email: action.payload.email,
        password: action.payload.password,
      });
    },
  },
});

const { actions, reducer } = usersSlice;

export const { addUser } = actions;
export default reducer;
