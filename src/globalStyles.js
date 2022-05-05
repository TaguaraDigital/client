import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    /* Colors */
    --altClr: #1544c0;
    --lightClr: #EDEBE8;
    --darkClr: #5e6072;
    --ctaInvClr: #5210ac;
    --ctaClr: #EB6909;

    --saintBlue: #001489;
    --saintOrange: #EB6909; 
    --saintOrangeLight: #EB690925; 
    --saintGreen: #97CA40;
    --saintGreenLight: #97CA4025;
    --saintPurple: #462E83;


    /* other variables  */
    --header-height: 80px;
  }

  *, *::before, *::after {
    box-sizing: border-box;
    margin:0;
    padding: 0;
  }
  
  html {
    scroll-behavior: smooth;
  }

  body {
    background-color: var(--lightClr);
    color: var(--darkclr);
    font-family: Tahoma,  sans-serif;
    font-size: 16px;
    line-height: 1.2;
  }

  .title-center{
    text-align: center;
  }

  
  .error {
    color: var(--ctaClr);
    font-size: bolder;
    margin:0 0 15px;
    padding: 0;
  }

  input {
    display: block;
    height: 30px;
    width: 100%;
    margin: 10px 0 0;
    border: none;
    padding: 10px;
    font-size: 16px;
    box-shadow: 1x 1px 1px rgba(0,0,0,.5)
  }


  input[type=checkbox] {
    height: 15px;
    width: 100%;
    padding: 2px;
    margin: 5px 0;
    font-size: 1rem;
    box-shadow: none;
  }


  table {
    border-collapse: collapse;
    width: 100%;
    margin: 10px auto 0;
    font-size: 1rem;
    color: #4a788b;
    border-radius: 10px;
    margin-bottom: 2rem;
  }

  caption {
    font-size: 2rem;
    margin-bottom: 1rem;
  }

  table thead {
    background-color: #d9f0fc;
  }

  table th,
  table td {
    border: 1px solid #6fcfff;
    margin: 0;
    padding: 0 10px;
    text-align: center;
  }

  @media screen and (max-width: 639px) {
    /* .title {
        text-align: left;
    } */
    .smart-table .first-cell,
    .smart-table thead {
        display: none;
    }
    .smart-table tr,
    .smart-table td {
        display: block;
    }

    .smart-table tr:not(:last-child) {
        border-bottom: 5px solid #5ca0c3;
    }

    .smart-table td {
        padding-left: 54%;
        position: relative;
    }
  
    .smart-table td::before {
        content: attr(data-col-title);
        width: 45%;
        position: absolute;
        padding: 5px;
        left: 0;
        top: 0;
        bottom: 0;
        font-weight: bold;
        background-color: #f3f6fa;
    }
}

@media screen and (min-width: 1024px) {
    /* .title {
        text-align: center;
    } */
    table {
        width: 80%;
    }
}

.pago-container {
  display:flex;
  flex-direction:column;
  justify-content: center;
  align-items: center;
}

.tarjeta {
  padding : 2rem;
  font-size: 2rem;
  background-color: #d9f0fc;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}


.container-tarjeta {
  width: 100%;
  display:flex;
  flex-direction:column;
  justify-content: center;
  align-items: center;
}

.datos-tarjeta {
  margin-top: 2rem;
  width: 100%;
  padding : 2rem;
  font-size: 2rem;
  background-color: yellow;
}


  button {
    margin-top:2rem;
    padding: 1rem 2rem;
    font-size: 1.2rem;
    display: block;
    background-color: yellow;
    border: none;
    &:hover{
      background-color: var(--ctaClr);
    }
  }
}
`;

// export const Button = styled.button`

//   background-color: ${({primary}) => (primary ? 'var(--ctaClr)' : 'var(--ctaInvClr)')};
//   color: var(--lightClr);
//   white-space: nowrap;
//   padding: ${({big}) => (big ? '12px 64px' : '10px 20px' )};
//   cursor: pointer;

//   margin-bottom: 10rem;

//   border: none;
//   outline: none;

//   &:hover {
//     background-color: ${({primary}) => (primary ? 'var(--ctaInvClr)' : 'var(--ctaClr)')};
//     transition: all .5s ease;
//   }
// `;
