import { Formik, Form } from 'formik';

import Input from './components/Input';
import Boton from './components/Boton';
import Contenedor from './components/Contenedor';
import Section from './components/Section';

// Fórmula del interés compuesto
const interesCompuesto = (deposito, contribucion, años, interes) => {
    let total = deposito;

    for (let i = 0; i < años; i++) {
        total = (total + contribucion) * (interes + 1);
    }

    return Math.round(total); // Redondeamos el total
};

function App() {
    const handleSubmit = ({ deposito, contribucion, años, interes }) => {
        const resultado = interesCompuesto(
            /*
                Pasamos a número estos datos, porque en initialValues son
                tipo string
            */
            Number(deposito),
            Number(contribucion),
            Number(años),
            Number(interes)
        );
        console.log('Resultado Interés Compuesto: ',resultado);
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
