import styled from 'styled-components';

const Contenedor = styled.div`
    display: flex;
    justify-content: center;
    height: 100%;
    align-items: center;
`;

const Section = styled.section`
    background-color: #eee;
    border-top: solid 2px palevioletred;
    padding: 20px 25px;
    width: 500px;
    box-shadow: 0px 2px 3px rgb(0, 0, 0, 0.3);
`;

function App() {
    return (
        <Contenedor>
            <Section>
                <h1>Calculadora de Interés Compuesto</h1>
            </Section>
        </Contenedor>
    );
}

export default App;
