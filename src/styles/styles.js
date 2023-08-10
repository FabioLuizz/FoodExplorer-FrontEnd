import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`

* { 
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background-color: ${({ theme }) => theme.COLORS.Dark_400};
}

body, button {
  font-family: 'Poppins', sans-serif;
}

input, textarea {
  font-family: 'Roboto', sans-serif;
}

button, a {
  cursor: pointer;
  text-decoration: none;
}
`