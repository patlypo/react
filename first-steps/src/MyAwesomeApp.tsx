export function MyAwesomeApp(){
    const firstName = 'Fernando';
    const lastName = 'Herrera';

    const colores = ['azul', 'rojo', 'blanco', 'verde'];
    const isActive = true;

    const address = {
        zipCode:'ABC-123',
        country:'Canada',
    };
    return(
        <>
        <h1>{firstName}</h1>
        <h3>{lastName}</h3>
        <p>{colores.join(', ')}</p>


        <h1>{isActive? 'Activo':'No activo'}</h1>

        <p style={{ 
            backgroundColor:'#645858',
            borderRadius: isActive ? 10:20,
            padding:10,
        }}
        >
            {JSON.stringify(address)}</p>
        </>
    );
};