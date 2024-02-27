const format: Utility.JSONValue = {
  creditCardNumber: (cardNumber: string) => {
    // Verifica si la entrada es válida
    if (!cardNumber || typeof cardNumber !== "string") {
      throw new Error("Número de tarjeta no válido");
    }

    // Elimina cualquier espacio en blanco y caracteres no numéricos
    const cleanedNumber = cardNumber.replace(/\D/g, "");

    // Verifica si el número tiene al menos cuatro dígitos
    if (cleanedNumber.length < 4) {
      throw new Error("Número de tarjeta no válido");
    }

    // Obtiene los últimos cuatro dígitos del número de tarjeta
    const lastFourDigits = cleanedNumber.slice(-4);

    // Sustituye todos los dígitos excepto los últimos cuatro por asteriscos
    const maskedNumber = "*".repeat(cleanedNumber.length - 4) + lastFourDigits;

    return maskedNumber;
  },
};

export default format;
