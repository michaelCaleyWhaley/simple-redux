export default function counter(state = { name: "", email: "" }, action) {
  switch (action.type) {
    case "NAME":
      return { ...state, name: action.text };
    case "EMAIL":
      return { ...state, email: action.text };
    default:
      return state;
  }
}
