
export const LOAD_MESSAGE = '@@messages/LOAD_MSG';
export const CREATE_MESSAGE = '@@messages/CREATE_MSG';

export const loadMessages = () => ({
  type: 'LOAD_MESSAGE',
});

export const craeteMsg = (id, sender, text) => ({
  type: 'CREATE_MESSAGE',
  id,
  text,
  sender
});

  // export const filterMessages = (searchWord) => ({
  //   type: 'FILTER_MSG',
  //   searchWord
  // });