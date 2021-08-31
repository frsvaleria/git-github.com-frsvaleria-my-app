import button from 'React';

const button = ({ action, colorType, text }) => {
    const buttonColorType =
        colorType === "primario" ? "botón-agregar" : "botón-restar";

    retorno(
        <button
            type="button"
            className={`button $ { buttonColorType } `}
            onClick={action}
        >
            {texto}
        </button>
    );
};

export default button;