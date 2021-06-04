export const state = () => ({
  drawer: true,
});

export const mutations = {
  TOGGLE_DRAWER: (s) => (s.drawer = !s.drawer),
};
