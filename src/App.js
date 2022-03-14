import styled from 'styled-components';

const Contenedor = styled.div`
    display: flex;
    justify-content: center;
    height: 100%;
    align-items: center;
`;

function App() {
    return (
        <Contenedor>
            <h1>Calculadora de Interés Compuesto</h1>
        </Contenedor>
    );
}

export default App;
