import styled from 'styled-components';
import { Formik, Form } from 'formik';
import Input from './components/Input';

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
    const handleSubmit = () => {
        // code
    };

    return (
        <Contenedor>
            <Section>
                <h1>Calculadora de Interés Compuesto</h1>
                <Formik
                    initialValues={{
                        deposito: '',
                        contribucion: '',
                        años: '',
                        interes: '',
                    }}
                    onSubmit={handleSubmit}>
                    <Form>
                        <Input name='deposito' label='Depósito Inicial' />
                        <Input name='contribucion' label='Contribución Anual' />
                        <Input name='años' label='Años' />
                        <Input name='interes' label='Interes Estimado' />
                    </Form>
                </Formik>
            </Section>
        </Contenedor>
    );
}

export default App;
