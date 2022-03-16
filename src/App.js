import { Formik, Form } from 'formik';

import Input from './components/Input';
import Boton from './components/Boton';
import Contenedor from './components/Contenedor';
import Section from './components/Section';

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
                        <Input name='interes' label='Interés Estimado' />
                        <Boton>Calcular</Boton>
                    </Form>
                </Formik>
            </Section>
        </Contenedor>
    );
}

export default App;
